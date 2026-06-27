import FunFactCounter from "@/components/FunFactCounter";
import Pricing from "@/components/Pricing";
import BannerSlider from "@/components/BannerSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <NextLayout>
      <BannerSlider />

      {/* Product Highlights Section */}
      <section className="service-section fix pt-80 pb-80 section-bg">
        <div className="container">
          <h4
            className="mb-5 text-white text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            Your One Stop Solution for Premium Printing & Packaging Materials
          </h4>
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-items">
                <div className="content">
                  <p>01</p>
                  <h5>
                    <Link href="products">
                      BOPP Lamination <br />
                      Films
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <Image src="/assets/img/home/bopp.jpg" alt="BOPP Lamination Film" width={180} height={165} />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-items">
                <div className="content">
                  <p>02</p>
                  <h5>
                    <Link href="products">
                      GL BOPP <br />
                      Film
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <Image src="/assets/img/home/glbopp.webp" alt="GL BOPP Film" width={180} height={165} />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-items">
                <div className="content">
                  <p>03</p>
                  <h5>
                    <Link href="products">
                      MT BOPP <br />
                      Film
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <Image src="/assets/img/home/mt-bopp.jpg" alt="MT BOPP Film" width={180} height={165} />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-items">
                <div className="content">
                  <p>04</p>
                  <h5>
                    <Link href="products">
                      CTP &amp; CTCP <br />
                      Plates
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <Image src="/assets/img/home/ctp.webp" alt="CTP CTCP Plates" width={180} height={165} />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-items">
                <div className="content">
                  <p>05</p>
                  <h5>
                    <Link href="products">
                      Positive CTCP <br />
                      Plates
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <Image src="/assets/img/home/positive-ctp.jpg" alt="Positive CTCP Plates" width={180} height={165} />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-items">
                <div className="content">
                  <p>06</p>
                  <h5>
                    <Link href="products">
                      Double Layer <br />
                      Thermal CTP Plates
                    </Link>
                  </h5>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                  <Image src="/assets/img/home/double-layered-ctp.webp" alt="Double Layer Thermal CTP Plate" width={180} height={165} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>10+ Years Of Experience</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>500+ Happy Clients</li>
                  </ul>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img src="assets/img/home/about1.webp" alt="Printing materials warehouse" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img src="assets/img/home/about2.webp" alt="BOPP film rolls" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Company
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Your Trusted Partner in Printing &amp; Packaging Materials
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Aayush Marketing is your trusted One Stop Solution for
                    premium printing and packaging materials. Based in BTM
                    Layout, Bengaluru, we supply high-quality products to
                    printers and packaging businesses across Karnataka with a
                    focus on quality, reliability, and customer satisfaction.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <i className="fas fa-check" />
                      Premium BOPP Lamination Films — GL &amp; MT variants
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      High-precision CTP, CTCP &amp; Double Layer Thermal Plates
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Fast local delivery across Bengaluru &amp; Karnataka
                    </li>
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="about" className="theme-btn">
                        Learn More
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="author-image">
                      <img src="assets/img/about/author.jpg" alt="Founder" />
                      <div className="content">
                        <h5>
                          Aayush Marketing / <span>Bengaluru</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Explore Our Catalog
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Industry-Grade Printing Materials <br />
              Engineered For Performance
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-technical" />
                </div>
                <h3>
                  <Link href="products">
                    Protective Overlaminate
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/home/protective.jpg" alt="Protective Overlaminate" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="products">
                  View Details
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-card-items active">
                <div className="icon">
                  <i className="flaticon-vector-design" />
                </div>
                <h3>
                  <Link href="products">
                    Specialty Coating Films
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/home/coating.jpg" alt="Specialty Coating Films" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="products">
                  View Details
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <h3>
                  <Link href="products">
                    Offset Printing Plates
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/home/double-layer.webp" alt="Offset Printing Plates" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="products">
                  View Details
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-design-thinking" />
                </div>
                <h3>
                  <Link href="products">
                    Advanced Plate Solutions
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="assets/img/home/ctp-plate.webp" alt="Advanced Plate Solutions" />
                  <div className="line-shape">
                    <img src="assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="products">
                  View Details
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Video Section */}
      <div
        className="cta-video-section fix bg-cover"
        style={{ backgroundImage: 'url("assets/img/home/video-banner.webp")' }}
      >
        <div className="container">
          <div className="cta-video-wrapper">
            <div className="video-box">
              <Link
                href="https://youtu.be/LbhJxdwhIZk?si=Xhe0Cot7zBrNLtWi"
                className="video-buttton ripple video-popup"
                target="_blank"
              >
                <i className="fas fa-play" />
              </Link>
            </div>
          </div>
        </div>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">BOPP</span>
                <span className="text-slider">Lamination Film </span>
                <span className="text-slider style-border" />
                <span className="text-slider">GL </span>
                <span className="text-slider">BOPP Film</span>
                <span className="text-slider style-border" />
                <span className="text-slider">MT </span>
                <span className="text-slider">BOPP Film</span>
                <span className="text-slider style-border" />
                <span className="text-slider">CTP</span>
                <span className="text-slider">Plates </span>
                <span className="text-slider style-border" />
                <span className="text-slider">CTCP</span>
                <span className="text-slider">Plates </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Double Layer</span>
                <span className="text-slider">Thermal CTP </span>
                <span className="text-slider style-border" />
                <span className="text-slider">BOPP</span>
                <span className="text-slider">Lamination Film </span>
                <span className="text-slider style-border" />
                <span className="text-slider">GL </span>
                <span className="text-slider">BOPP Film</span>
                <span className="text-slider style-border" />
                <span className="text-slider">MT </span>
                <span className="text-slider">BOPP Film</span>
                <span className="text-slider style-border" />
                <span className="text-slider">CTP</span>
                <span className="text-slider">Plates </span>
                <span className="text-slider style-border" />
                <span className="text-slider">CTCP</span>
                <span className="text-slider">Plates </span>
                <span className="text-slider style-border" />
                <span className="text-slider">Double Layer</span>
                <span className="text-slider">Thermal CTP </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section (replacing Team) */}
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  Why Choose Us
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Why Printing Businesses <br />
                  Trust Aayush Marketing
                </h2>
              </div>
              <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                We combine premium product quality with deep printing industry
                knowledge to deliver materials that keep your press running at
                its best — on time, every time.
              </p>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/home/verified.jpg" alt="Verified Quality" />
                </div>
                <div className="team-content">
                  <h4>Verified Quality</h4>
                  <p>ISO-certified manufacturer sourcing</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/home/delivery.jpg" alt="Fast Delivery" />
                </div>
                <div className="team-content">
                  <h4>Fast Local Delivery</h4>
                  <p>1–3 day fulfilment across Bengaluru</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/home/expert.jpg" alt="Expert Guidance" />
                </div>
                <div className="team-content">
                  <h4>Expert Guidance</h4>
                  <p>Right product advice for your press</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/home/instock.jpg" alt="Consistent Stock" />
                </div>
                <div className="team-content">
                  <h4>Consistent Stock</h4>
                  <p>No supply disruptions, ever</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-items">
                <div className="team-image">
                  <img src="assets/img/home/pricing.jpg" alt="Competitive Pricing" />
                </div>
                <div className="team-content">
                  <h4>Competitive Pricing</h4>
                  <p>Direct supplier relationships, fair rates</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-xxl-5 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <Link href="about" className="theme-btn">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="funfact-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Our Numbers
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Aayush Marketing at a Glance
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section>

      {/* Products Showcase (replacing Case Study) */}
      <section className="case-study-section fix section-padding theme-bg">
        <div className="left-shape">
          <img src="assets/img/case-study/left-shape.png" alt="shape-img" />
        </div>
        <div className="right-shape">
          <img src="assets/img/case-study/right-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                Featured Products
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Explore Our Most Popular <br />
                Printing & Packaging Materials
              </h2>
            </div>
            <Link href="products" className="theme-btn white-border">
              View All Products
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/home/bopp-lamination.jpg" alt="BOPP Lamination Film" />
                </div>
                <div className="content">
                  <p>Packaging Film</p>
                  <h3>
                    <Link href="products">
                      BOPP Lamination Film — GL &amp; MT Variants for Every Application
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/home/ctp-plate.webp" alt="CTP Plates" />
                </div>
                <div className="content">
                  <p>Offset Printing</p>
                  <h3>
                    <Link href="products">
                      Positive Thermal CTP &amp; CTCP Plates for Precision Offset Printing
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="case-study-items">
                <div className="thumb">
                  <img src="assets/img/home/double-layer.webp" alt="Double Layer CTP Plate" />
                </div>
                <div className="content">
                  <p>High-Volume Printing</p>
                  <h3>
                    <Link href="products">
                      Double Layer Thermal CTP Plate — Extended Run Life for High-Volume Presses
                    </Link>
                  </h3>
                  <Link className="arrow-btn" href="products">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />
    </NextLayout>
  );
};

export default page;