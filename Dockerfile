# ---------- Stage 1: build the React app ----------
FROM node:22-alpine AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build

# ---------- Stage 2: production server ----------
FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app

COPY server/package*.json ./server/
RUN npm install --prefix server --omit=dev

COPY server/ ./server/
COPY --from=client-build /app/client/dist ./client/dist

ENV PORT=5000 \
    STORAGE_DIR=/app/storage
RUN mkdir -p /app/storage && chown -R node:node /app/storage
USER node

EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD wget -qO- http://localhost:5000/api/health || exit 1
CMD ["node", "server/src/index.js"]
