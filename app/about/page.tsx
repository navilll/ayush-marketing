import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="About Us" pageTitle="About Us" />

      {/* About Section Start */}
      <section className="about-section fix section-padding pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Aayush Marketing
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Your Trusted Partner in <br />
                      Printing &amp; Packaging Materials
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Aayush Marketing is your trusted One Stop Solution for premium printing 
                    and packaging materials. Based in BTM Layout, Bengaluru, we supply 
                    high-quality products to printers and packaging businesses across Karnataka 
                    with a focus on quality, reliability, and customer satisfaction.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>Premium BOPP Lamination Films</h4>
                      <p>
                        We offer high-quality BOPP Lamination Films in both GL and MT variants, 
                        designed to deliver superior gloss, matte finishes, and exceptional 
                        durability for all your printing needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="assets/img/about/about-1.webp" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Start */}
      <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="assets/img/home/ctp.webp" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Advanced Printing Solutions &amp; Fast Delivery
                  </h4>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    From small print shops to large-scale packaging businesses, our flexible 
                    product range adapts to your specific requirements. We provide high-precision 
                    CTP, CTCP, and Double Layer Thermal Plates that ensure exceptional image 
                    quality and consistent performance across all printing applications.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h4>Fast Local Delivery Across Bengaluru &amp; Karnataka</h4>
                      <p>
                        We understand the importance of timely delivery. Our efficient logistics 
                        network ensures that your orders reach you quickly and safely across 
                        Bengaluru and all major cities in Karnataka.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="about"
                    className="theme-btn mt-50 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Know More
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funfact Section Start */}
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


      {/* Testimonial Section Start */}
      <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Client Testimonials
            </span>
            <h2>What Our Printing &amp; Packaging Partners Say</h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section>

      {/* Footer Section Start */}
    </NextLayout>
  );
};

export default page;