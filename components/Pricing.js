import Link from "next/link";

const Pricing = () => {
  return (
    <section className="pricing-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Why Choose Aayush Marketing
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Trusted Supply Partner For <br />
            Printing & Packaging Industries
          </h2>
        </div>

        <div className="row">
          {/* Card 1 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>

              <div className="pricing-header">
                <h3>Premium Quality Materials</h3>
                <p>
                  Reliable products designed to deliver consistent printing
                  performance and superior results.
                </p>
              </div>

              <ul className="pricing-list">
                <li>High-Grade BOPP Films</li>
                <li>Premium CTP & CTCP Plates</li>
                <li>Consistent Print Quality</li>
                <li>Industry Standard Products</li>
                <li>Quality Assured Supply</li>
              </ul>

              <div className="pricing-bottom">
                <h2>01</h2>
                <p>Quality Assurance</p>
              </div>

              <div className="pricing-button">
                <Link href="/contact" className="theme-btn style-transparent">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items active">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape-2.png" alt="shape-img" />
              </div>

              <div className="pricing-header">
                <h3>Ready Stock Availability</h3>
                <p>
                  Well-maintained inventory ensures quick fulfillment and
                  uninterrupted business operations.
                </p>
              </div>

              <ul className="pricing-list">
                <li>Fast Order Processing</li>
                <li>Bulk Supply Support</li>
                <li>Warehouse Stock Ready</li>
                <li>Reliable Product Availability</li>
                <li>Quick Dispatch Service</li>
              </ul>

              <div className="pricing-bottom">
                <h2>02</h2>
                <p>Inventory Strength</p>
              </div>

              <div className="pricing-button">
                <Link href="/contact" className="theme-btn style-transparent">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items">
              <div className="pricing-shape">
                <img src="assets/img/pricing-shape.png" alt="shape-img" />
              </div>

              <div className="pricing-header">
                <h3>Reliable Distribution</h3>
                <p>
                  Efficient logistics and customer-focused service across
                  various regions of wide range.
                </p>
              </div>

              <ul className="pricing-list">
                <li>Timely Deliveries</li>
                <li>Business-to-Business Support</li>
                <li>Safe Product Handling</li>
                <li>Responsive Customer Service</li>
                <li>Long-Term Partnerships</li>
              </ul>

              <div className="pricing-bottom">
                <h2>03</h2>
                <p>Delivery Excellence</p>
              </div>

              <div className="pricing-button">
                <Link href="/contact" className="theme-btn style-transparent">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;