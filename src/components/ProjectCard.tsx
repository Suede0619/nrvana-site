"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Project {
  title: string;
  client?: string;
  skills: string;
  description: string;
  images: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageCount = project.images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageCount) % imageCount);
  };


  // Intersection observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg overflow-hidden border border-border hover-lift ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {/* Image Slideshow */}
      <div className="relative aspect-[16/10] bg-surface overflow-hidden">
        {imageCount === 0 ? (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-highlight/20 flex items-center justify-center">
            <span className="text-primary/30 text-2xl font-light tracking-widest uppercase text-center px-4">
              {project.title}
            </span>
          </div>
        ) : (
          project.images.map((img, i) => (
            <Image
              key={img}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              fill
              className={`object-cover slide-transition ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))
        )}

        {imageCount > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-200"
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-200"
              aria-label="Next image"
            >
              &#8250;
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    i === currentSlide ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-heading text-2xl mb-3" style={{ fontFamily: "var(--font-klarissa)" }}>{project.title}</h3>
        <p className="text-muted text-sm mb-1">
          <strong className="text-heading">Skills Involved: </strong>
          {project.skills}
        </p>
        {project.client && (
          <p className="text-muted text-sm mb-3">
            <strong className="text-heading">Client: </strong>
            {project.client}
          </p>
        )}
        <p className="text-muted text-sm leading-relaxed">
          {project.description}
        </p>
        <a
          href="mailto:stuart.paul@nrvana.com"
          className="inline-block mt-4 bg-primary text-white px-5 py-2 rounded text-sm font-bold tracking-wider hover:bg-highlight transition-colors duration-200"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
