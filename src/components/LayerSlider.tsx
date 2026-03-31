"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import type { SliderConfig, SliderLayer } from "@/data/sliders/types";

// Easing functions matching LayerSlider/jQuery UI
const easings: Record<string, (t: number) => number> = {
  linear: (t) => t,
  easeInSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine: (t) => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => 1 - (1 - t) * (1 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
  easeInOutQuint: (t) => (t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2),
};

function getEasing(name: string): (t: number) => number {
  return easings[name] || easings.easeInOutQuint;
}

function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

interface LayerState {
  opacity: number;
  x: number;
  y: number;
  rotate: number;
  rotateX: number;
  rotateY: number;
  scaleX: number;
  scaleY: number;
}

function getLayerState(layer: SliderLayer, elapsed: number): LayerState {
  const { delayin, durationin, showuntil, durationout } = layer;

  // Phase timing
  const animInStart = delayin;
  const animInEnd = animInStart + durationin;
  const showEnd = animInEnd + (showuntil || 999999);
  const animOutEnd = showEnd + durationout;

  // Before animation starts
  if (elapsed < animInStart) {
    return {
      opacity: layer.fadein ? 0 : 1,
      x: layer.offsetxin,
      y: layer.offsetyin,
      rotate: layer.rotatein,
      rotateX: layer.rotatexin,
      rotateY: layer.rotateyin,
      scaleX: layer.scalexin,
      scaleY: layer.scaleyin,
    };
  }

  // Animating in
  if (elapsed < animInEnd) {
    const progress = (elapsed - animInStart) / durationin;
    const eased = getEasing(layer.easingin)(Math.min(1, Math.max(0, progress)));

    return {
      opacity: layer.fadein ? eased : 1,
      x: lerp(layer.offsetxin, 0, eased),
      y: lerp(layer.offsetyin, 0, eased),
      rotate: lerp(layer.rotatein, 0, eased),
      rotateX: lerp(layer.rotatexin, 0, eased),
      rotateY: lerp(layer.rotateyin, 0, eased),
      scaleX: lerp(layer.scalexin, 1, eased),
      scaleY: lerp(layer.scaleyin, 1, eased),
    };
  }

  // Visible (holding)
  if (elapsed < showEnd) {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scaleX: 1,
      scaleY: 1,
    };
  }

  // Animating out
  if (showuntil > 0 && elapsed < animOutEnd) {
    const progress = (elapsed - showEnd) / durationout;
    const eased = getEasing(layer.easingout)(Math.min(1, Math.max(0, progress)));

    return {
      opacity: layer.fadeout ? 1 - eased : 1,
      x: lerp(0, layer.offsetxout, eased),
      y: lerp(0, layer.offsetyout, eased),
      rotate: lerp(0, layer.rotateout, eased),
      rotateX: lerp(0, layer.rotatexout, eased),
      rotateY: lerp(0, layer.rotateyout, eased),
      scaleX: lerp(1, layer.scalexout, eased),
      scaleY: lerp(1, layer.scaleyout, eased),
    };
  }

  // After out animation (or no showuntil = permanent)
  if (showuntil > 0 && elapsed >= animOutEnd) {
    return {
      opacity: layer.fadeout ? 0 : 1,
      x: layer.offsetxout,
      y: layer.offsetyout,
      rotate: layer.rotateout,
      rotateX: layer.rotatexout,
      rotateY: layer.rotateyout,
      scaleX: layer.scalexout,
      scaleY: layer.scaleyout,
    };
  }

  // Permanent visible (showuntil = 0 means stay forever)
  return {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scaleX: 1,
    scaleY: 1,
  };
}

function SliderLayerEl({ layer, elapsed, scale }: { layer: SliderLayer; elapsed: number; scale: number }) {
  const state = getLayerState(layer, elapsed);

  // Skip invisible layers
  if (state.opacity < 0.01) return null;

  const left = parseFloat(layer.left) * scale;
  const top = parseFloat(layer.top) * scale;

  const transform = [
    `translate(${state.x * scale}px, ${state.y * scale}px)`,
    state.rotate !== 0 ? `rotate(${state.rotate}deg)` : "",
    state.rotateX !== 0 ? `rotateX(${state.rotateX}deg)` : "",
    state.rotateY !== 0 ? `rotateY(${state.rotateY}deg)` : "",
    state.scaleX !== 1 || state.scaleY !== 1
      ? `scale(${state.scaleX}, ${state.scaleY})`
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  const style: React.CSSProperties = {
    position: "absolute",
    left,
    top,
    opacity: state.opacity,
    transform,
    transformOrigin: "50% 50%",
    willChange: "transform, opacity",
  };

  // Text layer
  if (layer.text) {
    const fontSize = layer.fontSize ? layer.fontSize * scale : 80 * scale;
    const fontFamily = layer.fontFamily || "'klarissaregular', 'Lato', sans-serif";

    return (
      <div
        style={{
          ...style,
          fontFamily,
          fontSize,
          color: layer.color || "#ffffff",
          whiteSpace: "nowrap",
          fontWeight: 400,
          letterSpacing: "0.05em",
        }}
      >
        {layer.text}
      </div>
    );
  }

  // Image layer
  if (layer.image) {
    return (
      <div style={style}>
        <img
          src={layer.image}
          alt=""
          style={{
            display: "block",
            maxWidth: "none",
            height: "auto",
          }}
          loading="lazy"
        />
      </div>
    );
  }

  return null;
}

export default function LayerSlider({ config }: { config: SliderConfig }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [elapsed, setElapsed] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  // Calculate the total animation duration (max delayin + durationin + showuntil + durationout)
  const totalDuration = config.layers.reduce((max, layer) => {
    const end = layer.delayin + layer.durationin + (layer.showuntil || 0) + layer.durationout;
    return Math.max(max, end);
  }, 0);

  // Responsive scaling
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setScale(containerWidth / config.width);
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [config.width]);

  // Intersection observer - start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  // Animation loop
  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const ms = timestamp - startTimeRef.current;
    // Loop the animation
    setElapsed(ms % (totalDuration + 2000));
    rafRef.current = requestAnimationFrame(animate);
  }, [totalDuration]);

  useEffect(() => {
    if (isVisible) {
      rafRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, animate]);

  const height = config.height * scale;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        height: Math.max(height, 300),
        perspective: "1500px",
      }}
    >
      {/* Background */}
      <Image
        src={config.background}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Maroon overlay for brand consistency */}
      <div className="absolute inset-0 bg-primary/30" />

      {/* Animated layers */}
      <div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {config.layers.map((layer) => (
          <SliderLayerEl
            key={layer.id}
            layer={layer}
            elapsed={elapsed}
            scale={scale}
          />
        ))}
      </div>
    </div>
  );
}
