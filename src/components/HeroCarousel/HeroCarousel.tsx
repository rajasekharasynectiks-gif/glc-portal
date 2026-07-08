import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CarouselControls } from "./CarouselControls";
import { CarouselDots } from "./CarouselDots";
import { HeroSlide } from "./HeroSlide";
import "./hero-carousel.css";

export type HeroSlideItem = {
  image: string;
  alt: string;
  tag: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
};

export const slides: HeroSlideItem[] = [
  {
    image: new URL("../../../images/slide1.png", import.meta.url).href,
    alt: "Lobby entrance of a retail partner with Georgia Lottery branding",
    tag: "Retailer licensing",
    title: "Georgia Lottery Retailer Licensing Portal",
    subtitle: "Fast, Secure and Digital Licensing Experience",
    primaryCta: { label: "Apply Now", to: "/auth/register" },
    secondaryCta: { label: "Learn More", to: "/licensing" },
  },
  {
    image: new URL("../../../images/slide2.jpg", import.meta.url).href,
    alt: "Storefront with products and Georgia Lottery signage",
    tag: "Retailer licensing",
    title: "Georgia Lottery Retailer Licensing Portal",
    subtitle: "Fast, Secure and Digital Licensing Experience",
    primaryCta: { label: "Apply Now", to: "/auth/register" },
    secondaryCta: { label: "Learn More", to: "/licensing" },
  },
  {
    image: new URL("../../../images/slide3.jpg", import.meta.url).href,
    alt: "Bright retail space with a customer-ready lottery counter",
    tag: "Retailer licensing",
    title: "Georgia Lottery Retailer Licensing Portal",
    subtitle: "Fast, Secure and Digital Licensing Experience",
    primaryCta: { label: "Apply Now", to: "/auth/register" },
    secondaryCta: { label: "Learn More", to: "/licensing" },
  },
  {
    image: new URL("../../../images/slide4.png", import.meta.url).href,
    alt: "Georgia Lottery retail display reflecting government-style service",
    tag: "Retailer licensing",
    title: "Georgia Lottery Retailer Licensing Portal",
    subtitle: "Fast, Secure and Digital Licensing Experience",
    primaryCta: { label: "Apply Now", to: "/auth/register" },
    secondaryCta: { label: "Learn More", to: "/licensing" },
  },
];

type HeroCarouselProps = {
  showContent?: boolean;
  onActiveChange?: (image: string) => void;
  showSlides?: boolean;
};

export function HeroCarousel({ showContent = true, onActiveChange, showSlides = true }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    if (onActiveChange) onActiveChange(slides[activeIndex].image);
  }, [activeIndex, onActiveChange]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % slides.length);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    }
  };

  const handleBlur = () => {
    window.requestAnimationFrame(() => {
      if (rootRef.current && !rootRef.current.contains(document.activeElement)) {
        setPaused(false);
      }
    });
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      ref={rootRef}
      tabIndex={-1}
      role="region"
      aria-roledescription="carousel"
      aria-label="Georgia Lottery hero banner"
      className="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {/* slides container: parent may choose to hide the image elements when using a shared background */}
      {showSlides && (
        <div className="hero-carousel__slides">
          {slides.map((slide, index) => (
            <HeroSlide key={slide.image} slide={slide} isActive={index === activeIndex} />
          ))}
        </div>
      )}
      {showContent && (
        <div className="hero-carousel__panel">
          <div className="hero-carousel__content-shell container-page">
            <div className="hero-carousel__content">
              <span className="hero-carousel__eyebrow">Retailer licensing</span>
              <h1 className="hero-carousel__heading">Georgia Lottery Retailer Licensing Portal</h1>
              <p className="hero-carousel__paragraph">Fast, Secure and Digital Licensing Experience</p>
              <div className="hero-carousel__action-row">
                <Link
                  to="/auth/register"
                  className="hero-carousel__primary-button"
                >
                  Apply Now
                  <ArrowRight className="hero-carousel__primary-icon" />
                </Link>
                <Link
                  to="/licensing"
                  className="hero-carousel__secondary-button"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="hero-carousel__controls">
        <CarouselControls
          onPrevious={() => setActiveIndex((current) => (current - 1 + slides.length) % slides.length)}
          onNext={() => setActiveIndex((current) => (current + 1) % slides.length)}
        />
      </div>

      <div className="hero-carousel__dots-wrapper">
        <CarouselDots
          count={slides.length}
          activeIndex={activeIndex}
          onSelect={goToSlide}
        />
      </div>
    </section>
  );
}
