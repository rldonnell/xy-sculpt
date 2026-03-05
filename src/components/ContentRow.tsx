interface ContentRowProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

/**
 * Two-column content row with text + image.
 * Set reverse={true} to flip the image to the left side.
 * Used for homepage sections and about pages.
 */
export default function ContentRow({ title, text, imageSrc, imageAlt, reverse = false }: ContentRowProps) {
  return (
    <section className={`content-row ${reverse ? 'content-row--reverse' : ''}`}>
      <div className="content-row__text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="content-row__image">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
    </section>
  );
}
