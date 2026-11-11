// All portfolio content lives here. Every translatable field is { en, sq }.
// Edit this file to update the site — no frontend changes needed.

const portfolio = {
  profile: {
    name: 'Rijon Zeneli',
    role: 'AI & Full-Stack Developer',
    location: 'Prishtina, Kosovo',
    email: 'rijonz29@gmail.com',
    phone: '+383 45 287 039',
    github: 'https://github.com/RijonZ',
    linkedin: 'https://linkedin.com/in/rijon-zeneli-6ab8b1376',
    cv: '/Rijon-Zeneli-CV.pdf',
    photo: '/profile.jpg',
    badge: {
      en: 'Based in Prishtina, Kosovo',
      sq: 'Me bazë në Prishtinë, Kosovë',
    },
    lead: {
      en: 'I build end-to-end LLM-powered applications, from requirements to deployment, with a focus on making AI reliable and grounded in real data.',
      sq: 'Ndërtoj aplikacione me LLM nga fillimi në fund, nga kërkesat deri te publikimi, me fokus që AI të jetë e besueshme dhe e bazuar në të dhëna reale.',
    },
    about: [
      {
        en: "I'm a Computer Science & Engineering graduate from UBT College in Prishtina, Kosovo. I enjoy building applications where AI does real, useful work: chatbots that answer from documentation, tools that read invoices and receipts, and apps that turn plain-English questions into SQL.",
        sq: 'Jam i diplomuar në Shkenca Kompjuterike dhe Inxhinieri në Kolegjin UBT në Prishtinë. Më pëlqen të ndërtoj aplikacione ku AI bën punë reale dhe të dobishme: chatbot-ë që përgjigjen nga dokumentacioni, mjete që lexojnë fatura e kupona, dhe aplikacione që i kthejnë pyetjet në gjuhë të thjeshtë në SQL.',
      },
      {
        en: "Most of my projects are full-stack, built with React and Node.js, with PostgreSQL for data and OpenAI models for the AI features. I also train classic ML models in Python, from a CNN for traffic sign recognition to text and customer classifiers with scikit-learn. For a real client, I delivered a bilingual production platform with an AI assistant, from requirements to deployment.",
        sq: 'Shumica e projekteve të mia janë full-stack, të ndërtuara me React dhe Node.js, me PostgreSQL për të dhënat dhe modele të OpenAI për pjesën e AI-së. Trajnoj edhe modele klasike ML në Python, nga një CNN për njohjen e shenjave rrugore deri te klasifikues teksti dhe klientësh me scikit-learn. Për një klient real kam dorëzuar një platformë dygjuhëshe në prodhim me asistent AI, nga kërkesat deri te publikimi.',
      },
      {
        en: 'What I care about most is making AI dependable: answers grounded in real data, results checked by deterministic validation, and solid engineering around the model.',
        sq: 'Ajo që më intereson më së shumti është që AI të jetë e besueshme: përgjigje të bazuara në të dhëna reale, rezultate të kontrolluara me validim determinist dhe inxhinieri e mirë rreth modelit.',
      },
    ],
    stats: [
      { value: '1', label: { en: 'production client platform', sq: 'platformë klienti në prodhim' } },
      { value: '10+', label: { en: 'AI & ML projects on GitHub', sq: 'projekte AI & ML në GitHub' } },
      { value: '2', label: { en: 'languages: Albanian & English', sq: 'gjuhë: shqip & anglisht' } },
    ],
  },

  experience: [
    {
      company: 'FR Valoni Sh.P.K.',
      period: { en: '06/2026 – Present', sq: '06/2026 – Sot' },
      url: 'https://frvalonishpk.org',
      role: { en: 'Full-Stack Platform with AI Assistant', sq: 'Platformë Full-Stack me Asistent AI' },
      type: { en: 'Client engagement', sq: 'Projekt për klient' },
      bullets: [
        {
          en: 'Delivered a bilingual (Albanian/English) production platform with a public site and a secured admin CMS.',
          sq: 'Dorëzova një platformë dygjuhëshe (shqip/anglisht) në prodhim, me faqe publike dhe CMS administrativ të siguruar.',
        },
        {
          en: 'Built an OpenAI-powered assistant scoped to answer strictly from live company data, cutting manual handling of routine visitor questions.',
          sq: 'Ndërtova një asistent me OpenAI që përgjigjet vetëm nga të dhënat aktuale të kompanisë, duke ulur trajtimin manual të pyetjeve rutinë të vizitorëve.',
        },
        {
          en: 'Automated project-portfolio photo watermarking and shipped a visitor-analytics dashboard for stakeholder reporting.',
          sq: 'Automatizova vendosjen e watermark-ut në fotot e projekteve dhe ndërtova një panel analitik për vizitorët për raportim te palët e interesit.',
        },
      ],
      tags: ['Next.js', 'Node / Express', 'PostgreSQL', 'Docker', 'OpenAI API'],
    },
  ],

  projects: [
    {
      repo: 'invoice-extraction-agent',
      title: 'Invoice Extraction Agent',
      icon: 'invoice',
      label: 'Document AI',
      description: {
        en: 'Full-stack platform that extracts structured data from invoice PDFs/images with a vision-language model, guarded by a deterministic validation layer against hallucinated figures. Review dashboard, JWT roles, admin analytics and bilingual support.',
        sq: 'Platformë full-stack që nxjerr të dhëna të strukturuara nga faturat (PDF/imazhe) me një model vizion-gjuhë, e mbrojtur nga një shtresë validimi deterministe kundër shifrave të shpikura. Panel rishikimi, role me JWT, analitikë për admin dhe mbështetje dygjuhëshe.',
      },
      tags: ['React', 'TypeScript', 'Node / Express', 'PostgreSQL', 'OpenAI Vision'],
    },
    {
      repo: 'docs-rag-assistant',
      title: 'Docs RAG Assistant',
      icon: 'docs',
      label: 'RAG',
      description: {
        en: 'Documentation chatbot grounded strictly in ingested docs. Markdown is chunked, embedded into PostgreSQL/pgvector and retrieved by cosine similarity. Answers come with source citations, or an honest "I don\'t know".',
        sq: 'Chatbot dokumentacioni që përgjigjet vetëm nga dokumentet e ngarkuara. Markdown ndahet në copa, ruhet si embeddings në PostgreSQL/pgvector dhe kërkohet me cosine similarity. Përgjigjet vijnë me burime, ose me një "nuk e di" të sinqertë.',
      },
      tags: ['React', 'Node / Express', 'pgvector', 'OpenAI embeddings'],
    },
    {
      repo: 'traffic-sign-detection',
      title: 'Traffic Sign Detection',
      icon: 'vision',
      label: 'Computer Vision',
      description: {
        en: 'CNN trained on GTSRB and served as a real-time Flask/TensorFlow microservice. The surrounding platform adds JWT roles, Stripe subscriptions, Redis rate limiting, Socket.io live alerts and PDF/CSV/JSON reports.',
        sq: 'CNN i trajnuar në GTSRB dhe i shërbyer si mikroshërbim Flask/TensorFlow në kohë reale. Platforma rreth tij ka role me JWT, abonime me Stripe, rate limiting me Redis, njoftime live me Socket.io dhe raporte PDF/CSV/JSON.',
      },
      tags: ['TensorFlow', 'Flask', 'React', 'Redis', 'Stripe', 'Socket.io'],
    },
    {
      repo: 'ai-sql-analytics',
      title: 'AI SQL Analytics',
      icon: 'chart',
      label: 'LLM → SQL',
      description: {
        en: 'Ask questions about your data in plain English. GPT-4o turns them into PostgreSQL queries, then the app runs them and shows charts, tables and an AI-generated insight.',
        sq: 'Bëj pyetje për të dhënat në gjuhë të thjeshtë. GPT-4o i kthen në query PostgreSQL, pastaj aplikacioni i ekzekuton dhe shfaq grafikë, tabela dhe një përfundim të gjeneruar nga AI.',
      },
      tags: ['React', 'Node.js', 'PostgreSQL', 'GPT-4o', 'Recharts'],
    },
  ],

  moreProjects: [
    {
      repo: 'schema-inferrer',
      title: 'Schema Inferrer',
      stack: 'React · Express · OpenAI',
      description: {
        en: 'Messy CSV/JSON → clean schema, primary-key detection and ready-to-run CREATE TABLE SQL, plus AI normalization tips.',
        sq: 'CSV/JSON i çrregullt → skemë e pastër, gjetje e çelësit primar dhe CREATE TABLE SQL gati, plus sugjerime normalizimi nga AI.',
      },
    },
    {
      repo: 'receipt-to-spreadsheet',
      title: 'Receipt → Spreadsheet',
      stack: 'React · Express · OpenAI Vision',
      description: {
        en: 'Upload a receipt photo and get a clean table of items, totals and currency, with one-click CSV export.',
        sq: 'Ngarko foton e një kuponi dhe merr një tabelë të pastër me artikujt, totalet dhe valutën, me eksport CSV me një klik.',
      },
    },
    {
      repo: 'spam-text-classifier',
      title: 'Spam Text Classifier',
      stack: 'scikit-learn · NLP',
      description: {
        en: 'Comparison of Naive Bayes, Logistic Regression and LinearSVC on bag-of-words features.',
        sq: 'Krahasim i Naive Bayes, Logistic Regression dhe LinearSVC mbi veçori bag-of-words.',
      },
    },
    {
      repo: 'mall-customer-clustering-comparison',
      title: 'Customer Clustering',
      stack: 'scikit-learn · Pandas',
      description: {
        en: 'K-Means vs. Hierarchical clustering for customer segmentation, compared with metrics.',
        sq: 'K-Means kundrejt Hierarchical clustering për segmentimin e klientëve, të krahasuara me metrika.',
      },
    },
    {
      repo: 'random-forest-classification',
      title: 'Random Forest Classification',
      stack: 'scikit-learn · Jupyter',
      description: {
        en: 'Predicting purchase behaviour from demographic features with a Random Forest model.',
        sq: 'Parashikimi i sjelljes së blerjes nga të dhënat demografike me një model Random Forest.',
      },
    },
  ],

  skills: [
    {
      title: { en: 'AI & Machine Learning', sq: 'AI & Machine Learning' },
      items: ['RAG', 'LLMs', 'OpenAI API', 'AI Agents', 'NLP', 'CNN (TensorFlow)', 'scikit-learn'],
    },
    {
      title: { en: 'Programming & Data', sq: 'Programim & të dhëna' },
      items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'PostgreSQL', 'pgvector', 'Pandas', 'Feature Engineering', 'Model Evaluation'],
    },
    {
      title: { en: 'Software Engineering & Backend', sq: 'Inxhinieri softueri & backend' },
      items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Docker', 'Redis', 'REST APIs', 'JWT Auth', 'Socket.io', 'Stripe', 'Git'],
    },
  ],

  education: [
    {
      period: { en: '10/2023 – 07/2026', sq: '10/2023 – 07/2026' },
      title: 'UBT College',
      detail: {
        en: 'Bachelor of Computer Science and Engineering · Prishtina, Kosovo',
        sq: 'Bachelor në Shkenca Kompjuterike dhe Inxhinieri · Prishtinë, Kosovë',
      },
    },
    {
      period: { en: 'In progress', sq: 'Në vazhdim' },
      title: 'LLM Engineering: Master AI, LLMs & Agents',
      detail: { en: 'Ed Donner · RAG, QLoRA and AI agents across 20+ models', sq: 'Ed Donner · RAG, QLoRA dhe agjentë AI me 20+ modele' },
    },
    {
      period: { en: 'In progress', sq: 'Në vazhdim' },
      title: 'Machine Learning A-Z: AI & Python',
      detail: { en: 'ML, NLP, deep learning, reinforcement learning', sq: 'ML, NLP, deep learning, reinforcement learning' },
    },
    {
      period: { en: '05/2025 – 06/2025', sq: '05/2025 – 06/2025' },
      title: 'Data Management — Innovation Centre Kosovo',
      detail: { en: 'SPSS, spreadsheet analytics, Python data automation', sq: 'SPSS, analitikë me spreadsheet, automatizim të dhënash me Python' },
    },
  ],
};

export default portfolio;
