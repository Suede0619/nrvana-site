"use client";

import { useState, useEffect, useCallback } from "react";
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
  const imageCount = project.images.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % imageCount);
  }, [imageCount]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageCount) % imageCount);
  };

  useEffect(() => {
    if (imageCount <= 1) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [imageCount, nextSlide]);

  return (
    <div className="bg-surface rounded-lg overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
      {/* Image Slideshow */}
      <div className="relative aspect-[16/10] bg-black">
        {imageCount === 0 ? (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <span className="text-white/20 text-4xl font-light tracking-widest uppercase">
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
              className={`object-cover transition-opacity duration-500 ${
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
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
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
        <h3 className="text-white text-lg font-bold mb-1">{project.title}</h3>
        {project.client && (
          <p className="text-muted text-xs mb-2 uppercase tracking-wider">
            {project.client}
          </p>
        )}
        <p className="text-accent text-xs font-bold mb-3 tracking-wider">
          {project.skills}
        </p>
        <p className="text-muted text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
