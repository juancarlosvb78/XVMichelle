
import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({
    children,
    as: Component = 'div',
    animation = 'fadeInUp',
    duration = 1100,
    delay = 0,
    className = '',
    once = true,
    threshold = 0.15,
}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const showElement = () => {
            element.style.opacity = '1';
            element.style.transform = 'translate3d(0, 0, 0)';
        };

        // Si el navegador no soporta IntersectionObserver,
        // mostrar el contenido directamente.
        if (typeof IntersectionObserver === 'undefined') {
            showElement();
            return;
        }

        const animations = {
            fadeInUp: 'translate3d(0, 90px, 0)',
            fadeInLeft: 'translate3d(-90px, 0, 0)',
            fadeInRight: 'translate3d(90px, 0, 0)',
        };

        const initialTransform =
            animations[animation] || animations.fadeInUp;

        const safeDuration = Math.max(0, Number(duration) || 0);
        const safeDelay = Math.max(0, Number(delay) || 0);

        // Estado inicial antes de entrar en pantalla.
        element.style.transition = 'none';
        element.style.opacity = '0';
        element.style.transform = initialTransform;

        // Preparar la transición.
        element.offsetHeight;

        element.style.transition = `
            opacity ${safeDuration}ms ease-in-out ${safeDelay}ms,
            transform ${safeDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${safeDelay}ms
        `;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        showElement();

                        if (once) {
                            observer.unobserve(entry.target);
                        }
                    } else if (!once) {
                        element.style.opacity = '0';
                        element.style.transform = initialTransform;
                    }
                });
            },
            {
                threshold,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [animation, duration, delay, once, threshold]);

    return (
        <Component
            ref={elementRef}
            className={className}
        >
            {children}
        </Component>
    );
};

export default ScrollReveal;