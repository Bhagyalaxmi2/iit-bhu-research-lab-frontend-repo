
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FloatingGallery.css";

const images = [
  {
    src: "/Research/drug-delivery.jpg",
    title: "Targeted Drug Delivery",
    category: "NANOMEDICINE",
    description:
      "Developing advanced nanocarriers for targeted and controlled delivery of therapeutic agents to improve treatment efficacy.",
  },
  {
    src: "/Research/Antimicrobial.jpg",
    title: "Antimicrobial Research",
    category: "ADVANCED FORMULATIONS",
    description:
      "Exploring innovative formulation and delivery strategies to address antimicrobial resistance.",
  },
  {
    src: "/Research/bacteriophage.jpg",
    title: "Bacteriophage Delivery",
    category: "ALTERNATIVE THERAPIES",
    description:
      "Investigating bacteriophage-based delivery approaches for challenging bacterial infections.",
  },
  {
    src: "/Research/protein-peptide.jpg",
    title: "Protein & Peptide Delivery",
    category: "BIOPHARMACEUTICALS",
    description:
      "Exploring delivery strategies to improve the stability and therapeutic potential of proteins and peptides.",
  },
  {
    src: "/Research/exosome.jpg",
    title: "Exosome-Based Drug Delivery",
    category: "BIOLOGICALLY INSPIRED DELIVERY",
    description:
      "Investigating exosomes as potential carriers for therapeutic delivery and cancer-related applications.",
  },
];

function FloatingGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = images[currentImage];

  const nextImage = () => {
    setCurrentImage((previous) => (previous + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage(
      (previous) => (previous - 1 + images.length) % images.length
    );
  };

  // Automatically change slides every 5 seconds.
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="research-showcase">
      <div className="showcase-heading">
        <span className="showcase-label">RESEARCH HIGHLIGHTS</span>
        <h2>Exploring Frontiers in Nanomedicine</h2>
        <p>
          Discover our research in pharmaceutical nanotechnology,
          advanced drug delivery and innovative therapeutic approaches.
        </p>
      </div>

      <div
        className="showcase-window"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false);
          }
        }}
      >
        {/* Background research image */}
        <img
          key={current.src}
          src={current.src}
          alt={current.title}
          className="showcase-image"
        />

        {/* Gradient improves text readability */}
        <div className="showcase-overlay" />

        {/* Research text */}
        <div className="showcase-text" key={current.title}>
          <div className="showcase-counter">
            <span>
              {String(currentImage + 1).padStart(2, "0")}
            </span>
            <span className="counter-divider">/</span>
            <span>{String(images.length).padStart(2, "0")}</span>
            <div className="counter-track">
              <div
                className="counter-progress"
                style={{
                  width: `${((currentImage + 1) / images.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <span className="showcase-category">
            {current.category}
          </span>

          <h3>{current.title}</h3>
          <p>{current.description}</p>

          <Link to="/research" className="showcase-button">
            Explore Research <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Previous / next controls */}
        <button
          type="button"
          className="showcase-arrow showcase-prev"
          onClick={previousImage}
          aria-label="Previous research topic"
        >
          ←
        </button>

        <button
          type="button"
          className="showcase-arrow showcase-next"
          onClick={nextImage}
          aria-label="Next research topic"
        >
          →
        </button>
      </div>

      {/* Slide indicators */}
      <div className="showcase-pagination" aria-label="Choose research topic">
        {images.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={
              index === currentImage
                ? "pagination-dot active"
                : "pagination-dot"
            }
            onClick={() => setCurrentImage(index)}
            aria-label={`Show ${item.title}`}
            aria-current={index === currentImage ? "true" : undefined}
          />
        ))}
      </div>

      {/* Research topics strip */}
      <div className="research-topic-strip">
        {images.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={
              index === currentImage
                ? "research-topic active"
                : "research-topic"
            }
            onClick={() => setCurrentImage(index)}
          >
            <span className="topic-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default FloatingGallery;
