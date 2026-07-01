import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-section footer-bg">
      <div className="container">
        <div className="discussed-items">
          <div className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <Link href="/">
              <Image src="/assets/img/logo-white.webp" alt="Ayush Marketing" width={270} height={70} />
            </Link>
          </div>

          <div className="discussed-content wow fadeInUp" data-wow-delay=".5s">
            <h2>
              Looking for <span>Premium Printing Solutions?</span>
            </h2>

            <Link href="/contact" className="theme-btn hover-white">
              Contact Us <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>

        <div className="footer-widgets-wrapper">
          <div className="row">
            {/* About */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>About Us</h4>
                </div>

                <div className="footer-content">
                  <p>
                    Ayush Marketing is a trusted supplier of premium BOPP
                    Lamination Films, CTP Plates, CTCP Plates, and Double Layer
                    CTP Plates for the printing and packaging industry.
                  </p>

                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Links</h4>
                </div>

                <ul className="list-items">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blogs & News</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-1 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>

                <div className="contact-info-area">
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>

                    <div className="content">
                      <p>
                        Your Business Address <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>

                    <div className="content">
                      <a
                        href="mailto:info@ayushmarketing.com"
                        className="link"
                      >
                        info@ayushmarketing.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>

                    <div className="content">
                      <h4>
                        <a href="tel:+919876543210">+91 98765 43210</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Our Products</h4>
                </div>

                <div className="recent-post-area">
                  <div className="recent-post-items">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage:
                          'url("/assets/img/home/bopp.jpg")',
                      }}
                    />

                    <div className="content">
                      <h6>
                        <Link href="/products">
                          BOPP <br />
                          Lamination Film
                        </Link>
                      </h6>
                    </div>
                  </div>

                  <div className="recent-post-items mb-0">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage:
                          'url("/assets/img/home/double-layer.webp")',
                      }}
                    />

                    <div className="content">
                      <h6>
                        <Link href="/products">
                          CTP, CTCP & <br />
                          Double Layer Plates
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <ul className="footer-menu wow fadeInUp" data-wow-delay=".2s">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>

              <a
                href="#"
                id="scrollUp"
                className="scroll-icon wow fadeInUp"
                data-wow-delay=".4s"
              >
                <i className="far fa-angle-double-up" />
              </a>

              <p className="wow fadeInUp" data-wow-delay=".6s">
                © <Link href="/">2026</Link> Ayush Marketing. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;