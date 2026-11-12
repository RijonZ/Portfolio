export default function Section({ id, number, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {title && (
          <h2 className="section__title reveal">
            <span className="mono">{number}.</span> {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
