type HeroSlideItem = {
  image: string;
  alt: string;
  tag: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
};

type HeroSlideProps = {
  slide: HeroSlideItem;
  isActive: boolean;
};

export function HeroSlide({ slide, isActive }: HeroSlideProps) {
  return (
    <div
      className={`hero-carousel__slide ${isActive ? "active" : ""}`}
      aria-hidden={!isActive}
    >
      <div
        className="hero-carousel__image"
        role="img"
        aria-label={slide.alt}
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      <div className="hero-carousel__backdrop" />
    </div>
  );
}
