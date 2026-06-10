"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    width: 120 + Math.random() * 180,
    length: height * 2.5,
    angle: -35 + Math.random() * 10,
    speed: 0.8 + Math.random() * 1.5,
    opacity: 0.35 + Math.random() * 0.35,
    hue: 180 + Math.random() * 40,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.04,
  };
}

export function BeamsBackground({
  className,
  children,
  intensity = "strong",
}: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationRef = useRef<number>(0);

  const opacityMap = {
    subtle: 0.6,
    medium: 0.85,
    strong: 1,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      beamsRef.current = Array.from(
        { length: 40 },
        () => createBeam(window.innerWidth, window.innerHeight)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const drawBeam = (beam: Beam) => {
      ctx.save();

      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const opacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.3) *
        opacityMap[intensity];

      const gradient = ctx.createLinearGradient(
        0,
        0,
        0,
        beam.length
      );

      gradient.addColorStop(
        0,
        `hsla(${beam.hue},100%,70%,0)`
      );

      gradient.addColorStop(
        0.25,
        `hsla(${beam.hue},100%,70%,${opacity * 0.8})`
      );

      gradient.addColorStop(
        0.5,
        `hsla(${beam.hue},100%,70%,${opacity})`
      );

      gradient.addColorStop(
        0.75,
        `hsla(${beam.hue},100%,70%,${opacity * 0.8})`
      );

      gradient.addColorStop(
        1,
        `hsla(${beam.hue},100%,70%,0)`
      );

      ctx.fillStyle = gradient;
      ctx.fillRect(
        -beam.width / 2,
        0,
        beam.width,
        beam.length
      );

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      ctx.filter = "blur(50px)";

      beamsRef.current.forEach((beam) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y + beam.length < -200) {
          beam.y = window.innerHeight + 200;
          beam.x = Math.random() * window.innerWidth;
        }

        drawBeam(beam);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [intensity]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      <motion.div
        className="absolute inset-0 bg-cyan-500/5"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {children}
    </div>
  );
}