import { yen } from '../data/menu';

export default function ProductCard({ product }) {
  return (
    <article className="group min-w-0">
      <div className="image-hover relative aspect-[1.31/1] overflow-hidden rounded-[12px] bg-linen shadow-whisper">
        <img
          src={`${import.meta.env.BASE_URL}images/${product.image}`}
          alt={product.name}
          loading="lazy"
          width="800"
          height="600"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-1 pb-2 pt-4">
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
          <h3 className="font-japanese text-[15px] font-medium text-ink">
            {product.name}
          </h3>
          <span className="text-[13px] font-semibold text-coffee">
            {yen(product.price)}
          </span>
        </div>

        <p className="mt-1 text-[10px] tracking-[.12em] text-muted">
          {product.japanese}
        </p>
        <p className="mt-3 text-[12px] leading-[1.85] text-muted">
          {product.description}
        </p>
      </div>
    </article>
  );
}
