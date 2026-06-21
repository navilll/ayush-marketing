"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        image: "/assets/img/banner-4.webp",
        heading: (
            <>
                Premium BOPP <br />
                Lamination Films &amp; <br /> Packaging Solutions
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

const BannerSlider = () => {
    return (
        <section className="hero-section hero-1 fix" style={{ position: "relative" }}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className="hero-swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero-slide" style={{ position: "relative" }}>
                            {/* Next.js Image as background */}
                            <Image
                                src={slide.image}
                                alt={`Banner ${index + 1}`}
                                fill
                                priority={index === 0}
                                quality={90}
                                style={{ objectFit: "cover", objectPosition: "center" }}
                            />
                            {/* Dark overlay for text readability */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                                    zIndex: 1,
                                }}
                            />
                            {/* Content sits above image */}
                            <div className="container" style={{ position: "relative", zIndex: 2 }}>
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerSlider;