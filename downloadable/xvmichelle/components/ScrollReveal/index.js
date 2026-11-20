
import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
    children,
    animation = 'fadeInUp',
    duration = 1000,
    delay = 0,
    className = '',
    once = true,
    threshold = 0.15,
}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        const updateMotionPreference = () => {
            setReduceMotion(mediaQuery.matches);
        };

        updateMotionPreference();

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', updateMotionPreference);
            return () => mediaQuery.removeEventListener(
                'change',
                updateMotionPreference
            );
        }

        mediaQuery.addListener(updateMotionPreference);
        return () => mediaQuery.removeListener(updateMotionPreference);
    }, []);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        if (
            reduceMotion ||
            typeof IntersectionObserver === 'undefined'
        ) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);

                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [once, reduceMotion]);

    const validAnimations = [
        'fadeInUp',
        'fadeInLeft',
        'fadeInRight',
    ];

    const selectedAnimation = validAnimations.includes(animation)
        ? animation
        : 'fadeInUp';

    return (
        <div
            ref={elementRef}
            className={[
                className,
                isVisible && !reduceMotion ? 'animated' : '',
                isVisible && !reduceMotion ? selectedAnimation : '',
            ].filter(Boolean).join(' ')}
            style={
                reduceMotion
                    ? {}
                    : {
                        animationDuration: `${duration}ms`,
                        animationDelay: `${delay}ms`,
                    }
            }
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
