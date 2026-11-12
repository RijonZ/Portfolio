export default function Tags({ items, large = false }) {
  return (
    <div className={`tags ${large ? 'tags--lg' : ''}`}>
      {items.map((tag) => <span key={tag}>{tag}</span>)}
    </div>
  );
}
