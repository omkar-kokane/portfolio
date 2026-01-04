"use client";

import { useState, useEffect, useCallback } from "react";

// ============================================================
// TYPEWRITER COMPONENT
// ============================================================
// Creates a typing effect for text strings
// Usage: <Typewriter texts={["Hello", "World"]} />

interface TypewriterProps {
    texts: string[];
    typingSpeed?: number;      // Ms per character when typing
    deletingSpeed?: number;    // Ms per character when deleting
    pauseTime?: number;        // Ms to pause after completing a word
    cursorChar?: string;       // Character for cursor
    className?: string;        // Additional CSS classes
    loop?: boolean;            // Whether to loop through texts
}

export function Typewriter({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000,
    cursorChar = "|",
    className = "",
    loop = true,
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    // Cursor blink effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    const type = useCallback(() => {
        const currentText = texts[textIndex];

        if (isDeleting) {
            // Deleting characters
            setDisplayText(currentText.substring(0, displayText.length - 1));

            if (displayText.length === 0) {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            // Typing characters
            setDisplayText(currentText.substring(0, displayText.length + 1));

            if (displayText === currentText) {
                // Finished typing, pause then delete
                if (loop || textIndex < texts.length - 1) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                    return;
                }
            }
        }
    }, [displayText, isDeleting, textIndex, texts, pauseTime, loop]);

    useEffect(() => {
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        const timeout = setTimeout(type, speed);
        return () => clearTimeout(timeout);
    }, [type, isDeleting, deletingSpeed, typingSpeed]);

    return (
        <span className={className}>
            {displayText}
            <span
                className="text-cyan-400 transition-opacity duration-100"
                style={{ opacity: showCursor ? 1 : 0 }}
            >
                {cursorChar}
            </span>
        </span>
    );
}

export default Typewriter;
