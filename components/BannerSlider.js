"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        image: "/assets/img/banner-4.webp",
        heading: (
            <>
                Premium BOPP <br />
                Lamination Films &amp; <br /> Packaging
            </>
        ),
        buttonText: "Explore Films",
        buttonLink: "/products",
        secondaryButtonText: "Get a Quote",
        secondaryButtonLink: "/contact",
    },
    {
        image: "/assets/img/banner-1.webp",
        heading: (
            <>
                High-Performance <br />
                Thermal CTP &amp; <br /> CTCP Plates
            </>
        ),
        buttonText: "View CTP Plates",
        buttonLink: "/products",
        secondaryButtonText: "Our Services",
        secondaryButtonLink: "/service",
    },
    {
        image: "/assets/img/banner-3.webp",
        heading: (
            <>
                Your One-Stop <br />
                Printing &amp; Industrial <br /> Material Partner
            </>
        ),
        buttonText: "About Us",
        buttonLink: "/about",
        secondaryButtonText: "Contact Us",
        secondaryButtonLink: "/contact",
    },
];

const AUTOPLAY_DELAY = 5000;
const TRANSITION_MS = 600;

const BannerSlider = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const directionRef = useRef("next"); // "next" | "prev"
    const timerRef = useRef(null);

    const goTo = useCallback(
        (index, direction = "next") => {
            if (animating || index === current) return;
            directionRef.current = direction;
            setAnimating(true);
            setTimeout(() => {
                setCurrent(index);
                setAnimating(false);
            }, TRANSITION_MS);
        },
        [animating, current]
    );

    const next = useCallback(() => {
        goTo((current + 1) % slides.length, "next");
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + slides.length) % slides.length, "prev");
    }, [current, goTo]);

    useEffect(() => {
        timerRef.current = setInterval(next, AUTOPLAY_DELAY);
        return () => clearInterval(timerRef.current);
    }, [next]);

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(next, AUTOPLAY_DELAY);
    };

    const handlePrev = () => { prev(); resetTimer(); };
    const handleNext = () => { next(); resetTimer(); };
    const handleDot = (i) => {
        const dir = i > current ? "next" : "prev";
        goTo(i, dir);
        resetTimer();
    };

    // Which slide index is "incoming" during animation
    const incomingIndex = animating
        ? directionRef.current === "next"
            ? (current + 1) % slides.length
            : (current - 1 + slides.length) % slides.length
        : null;

    const dir = directionRef.current;

    return (
        <>
            <style>{`

                /* Current slide — slides OUT */
                .hero-slide-item.slide-out-left {
                    animation: slideOutLeft ${TRANSITION_MS}ms ease forwards;
                }
                .hero-slide-item.slide-out-right {
                    animation: slideOutRight ${TRANSITION_MS}ms ease forwards;
                }

                /* Incoming slide — slides IN */
                .hero-slide-item.slide-in-left {
                    animation: slideInLeft ${TRANSITION_MS}ms ease forwards;
                }
                .hero-slide-item.slide-in-right {
                    animation: slideInRight ${TRANSITION_MS}ms ease forwards;
                }
            `}</style>

            <section className="hero-section hero-1 fix">
                <div className="hero-slider-wrap">
                    <div className="hero-slide-track">

                        {/* Current slide */}
                        <div
                            className={`hero-slide-item${
                                animating
                                    ? dir === "next"
                                        ? " slide-out-left"
                                        : " slide-out-right"
                                    : ""
                            }`}
                        >
                            <SlideContent slide={slides[current]} index={current} />
                        </div>

                        {/* Incoming slide (only rendered during animation) */}
                        {animating && incomingIndex !== null && (
                            <div
                                className={`hero-slide-item${
                                    dir === "next" ? " slide-in-left" : " slide-in-right"
                                }`}
                            >
                                <SlideContent slide={slides[incomingIndex]} index={incomingIndex} />
                            </div>
                        )}
                    </div>

                    {/* Prev / Next arrows */}
                    <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous slide">
                        <i className="far fa-arrow-left" />
                    </button>
                    <button className="slider-arrow next" onClick={handleNext} aria-label="Next slide">
                        <i className="far fa-arrow-right" />
                    </button>

                    {/* Pagination dots */}
                    <div className="slider-dots">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`slider-dot${i === current ? " active" : ""}`}
                                onClick={() => handleDot(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

// Extracted to avoid repeating JSX for current + incoming slides
const SlideContent = ({ slide, index }) => (
    <>
        <Image
            src={slide.image}
            alt={`Banner ${index + 1}`}
            fill
            priority={index === 0}
            quality={70}
            style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="hero-overlay" />
        <div className="hero-slide-content">
            <div className="container">
                <div className="row g-4 justify-content-between">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".2s">
                                {slide.heading}
                            </h1>
                            <div className="hero-button">
                                <Link
                                    href={slide.buttonLink}
                                    className="theme-btn hover-white wow fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    {slide.buttonText} <i className="far fa-arrow-right" />
                                </Link>
                                <Link
                                    href={slide.secondaryButtonLink}
                                    className="btn-link wow fadeInUp"
                                    data-wow-delay=".6s"
                                    style={{ color: "#fff" }}
                                >
                                    {slide.secondaryButtonText} <i className="far fa-arrow-right" />
                                </Link>
                            </div>
                            <div
                                className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                                data-wow-delay=".8s"
                            >
                                <Image
                                    src="/assets/img/hero/client.png"
                                    alt="clients"
                                    width={120}
                                    height={40}
                                    style={{ objectFit: "contain" }}
                                />
                                <p className="text-white">
                                    Trusted Packaging &amp; Print <br /> Supplier in Bengaluru
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default BannerSlider;