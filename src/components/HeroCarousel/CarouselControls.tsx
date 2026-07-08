import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export function CarouselControls({ onPrevious, onNext }: CarouselControlsProps) {
  return (
    <div className="hero-carousel__controls" role="group" aria-label="Slide navigation buttons">
      <button
        type="button"
        aria-label="Previous slide"
        onClick={onPrevious}
        className="hero-carousel__control-button"
      >
        <ChevronLeft className="hero-carousel__control-icon" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={onNext}
        className="hero-carousel__control-button"
      >
        <ChevronRight className="hero-carousel__control-icon" />
      </button>
    </div>
  );
}
