export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}

      <h2 className="font-japanese text-[clamp(1.65rem,3vw,2.45rem)] font-medium leading-[1.45] tracking-[.02em] text-ink">
        {title}
      </h2>

      {description && (
        <p className={`mt-4 max-w-[580px] text-[13px] leading-[2.05] text-muted ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
