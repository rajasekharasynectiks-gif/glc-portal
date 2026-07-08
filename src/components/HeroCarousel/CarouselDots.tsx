type CarouselDotsProps = {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function CarouselDots({ count, activeIndex, onSelect }: CarouselDotsProps) {
  return (
    <div className="hero-carousel__dots" role="tablist" aria-label="Slide selection">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          aria-label={`Go to slide ${index + 1}`}
          className={`hero-carousel__dot ${index === activeIndex ? "active" : ""}`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
