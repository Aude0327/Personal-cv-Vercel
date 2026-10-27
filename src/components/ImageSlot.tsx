import type { ImageSlotData } from "../data/content";

interface Props {
  image: ImageSlotData;
  className?: string;
}

/**
 * Shows the real photo when `src` is set in src/data/content.ts.
 * Otherwise shows a calm, clearly labeled placeholder (never a broken-image icon).
 */
export default function ImageSlot({ image, className = "" }: Props) {
  if (image.src) {
    return (
      <img
        className={`image-slot ${className}`.trim()}
        src={image.src}
        alt={image.alt}
        loading="lazy"
        style={{ objectFit: image.objectFit, objectPosition: image.objectPosition }}
      />
    );
  }

  return (
    <div
      className={`image-slot image-slot--placeholder ${className}`.trim()}
      role="img"
      aria-label={`${image.label} placeholder. Photo to be added.`}
    >
      {image.initials ? (
        <span className="placeholder-initials" aria-hidden="true">
          {image.initials}
        </span>
      ) : (
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" focusable="false">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21c-4.5-3-7-6.2-7-10a7 7 0 0 1 14 0c0 3.8-2.5 7-7 10zM12 11V7m0 4 3-2"
          />
        </svg>
      )}
      <span className="placeholder-label">{image.label}</span>
      <span className="placeholder-note">Photo to be added</span>
    </div>
  );
}
