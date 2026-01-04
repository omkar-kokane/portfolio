"use client";

import { useEffect, useRef } from "react";

// ============================================================
// PARTICLES BACKGROUND COMPONENT
// ============================================================
// Animated floating particles/stars background
// Pure canvas-based, no external dependencies

interface ParticlesBgProps {
    particleCount?: number;
    speed?: number;
    connectDistance?: number;
    particleColor?: string;
    lineColor?: string;
}

export function ParticlesBg({
    particleCount = 80,
    speed = 0.5,
    connectDistance = 120,
    particleColor = "rgba(0, 240, 255, 0.8)",
    lineColor = "rgba(0, 240, 255, 0.1)",
}: ParticlesBgProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Particle[] = [];

        // Particle class
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.vx = (Math.random() - 0.5) * speed;
                this.vy = (Math.random() - 0.5) * speed;
                this.size = Math.random() * 2 + 1;
            }

            update(canvasWidth: number, canvasHeight: number) {
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around edges
                if (this.x < 0) this.x = canvasWidth;
                if (this.x > canvasWidth) this.x = 0;
                if (this.y < 0) this.y = canvasHeight;
                if (this.y > canvasHeight) this.y = 0;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();
            }
        }

        // Resize handler
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Reinitialize particles on resize
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        // Draw connections between nearby particles
        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectDistance) {
                        const opacity = 1 - distance / connectDistance;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = lineColor.replace("0.1", String(opacity * 0.15));
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.forEach((particle) => {
                particle.update(canvas.width, canvas.height);
                particle.draw(ctx);
            });

            // Draw connections
            drawConnections();

            animationId = requestAnimationFrame(animate);
        };

        // Initialize
        resize();
        window.addEventListener("resize", resize);
        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, [particleCount, speed, connectDistance, particleColor, lineColor]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
}

export default ParticlesBg;
