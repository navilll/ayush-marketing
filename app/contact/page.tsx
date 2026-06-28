import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Contact Us" pageTitle="Contact Us" />

      {/* Contact Section Start */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      Contact Us
                    </span>

                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Get in Touch with <br />
                      Aayush Marketing
                    </h2>
                  </div>

                  <p
                    className="mt-3 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Aayush Marketing is your trusted One Stop Solution for
                    premium printing and packaging materials. We supply
                    high-quality BOPP Lamination Films, GL BOPP Film, MT BOPP
                    Film, CTP Plates, CTCP Plates, and Double Layer Thermal CTP
                    Plates with a strong commitment to quality, reliability, and
                    customer satisfaction.
                  </p>

                  <ul
                    className="contact-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <a href="mailto:info@aayushmarketing.com">
                        info@aayushmarketing.com
                      </a>
                    </li>

                    <li>
                      GF, No. 64, Industrial Area,
                      <br />
                      7th Cross Road, BTM Layout 2nd Stage,
                      <br />
                      Bengaluru, Karnataka - 560076
                    </li>

                    <li>
                      <a href="tel:+919945160901">+91 99451 60901</a>
                      {" | "}
                      <a href="tel:+919880238771">+91 98802 38771</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="contact-right wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h3>Send Us an Enquiry</h3>

                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="email"
                            name="email"
                            id="email2"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Tell us about your requirement"
                            defaultValue={""}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn">
                          Send Enquiry
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15555.678759744966!2d77.6076365!3d12.9128831!3m2!1i1024!2i768!4f13.1!2m1!1sGF%20No%2064%20Industrial%20Area%207th%20Cross%20Road%20BTM%20Layout%202nd%20Stage%20Bengaluru%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1782557614067!5m2!1sen!2sin"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};

export default page;