"use client";

import "@css/swiper-bundle.min.css";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

export const TestimonialSlider1 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider}
      className="swiper testimonial-slider"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              "Ayush Marketing's BOPP lamination films have transformed our packaging quality. The crystal clear finish and moisture resistance are outstanding."
            </p>
            <div className="author-items">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Rajesh Kumar / <span>Packaging Manager</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              "We've been using their CTP plates for our commercial printing needs. The image reproduction and consistency are truly exceptional."
            </p>
            <div className="author-items">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Priya Sharma / <span>Printing Director</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              "The double layer CTP plates from Ayush Marketing have significantly improved our long-run printing efficiency. Highly recommended."
            </p>
            <div className="author-items">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Amit Patel / <span>Production Head</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <p>
              "Their CTCP plates offer excellent cost-effectiveness without compromising on quality. A game-changer for our offset printing operations."
            </p>
            <div className="author-items">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Sunita Reddy / <span>Printing Plant Owner</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot pt-5 ps-1">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const TestimonialSlider2 = ({ style = "style-1" }) => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider2}
      className="swiper testimonial-slider-2"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className={`testimonial-card-items ${style}`}>
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Vikram Singh <span>/Label Manufacturer</span>
                  </h5>
                </div>
              </div>
              <p>
                "The matte BOPP film from Ayush Marketing gives our labels a premium, elegant look that our clients absolutely love. The non-reflective surface is perfect for luxury packaging."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className={`testimonial-card-items ${style}`}>
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Deepak Agarwal <span>/FMCG Packaging Head</span>
                  </h5>
                </div>
              </div>
              <p>
                "We switched to Ayush Marketing's thermal CTP plates and noticed immediate improvements in print consistency and reduced downtime. Their technical support is excellent."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className={`testimonial-card-items ${style}`}>
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Meera Nair <span>/Pharmaceutical Packaging</span>
                  </h5>
                </div>
              </div>
              <p>
                "The anti-fog BOPP film is perfect for our fresh food packaging. It maintains excellent visibility while keeping products fresh. Ayush Marketing understands our industry needs perfectly."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className={`testimonial-card-items ${style}`}>
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Sanjay Verma <span>/Commercial Printer</span>
                  </h5>
                </div>
              </div>
              <p>
                "The Fujifilm Superia CTP plates supplied by Ayush Marketing have revolutionized our printing quality. The dot reproduction is flawless and press runs are smooth."
              </p>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot pb-5 text-center">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const TestimonialSlider3 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider3}
      className="swiper testimonial-slider-3"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <div className="content">
                <h5>
                  Ananya Gupta / <span>Creative Director</span>
                </h5>
              </div>
            </div>
            <p>
              "Ayush Marketing's metalized BOPP film adds a stunning metallic finish to our luxury packaging projects. It elevates our brand presentations significantly."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <div className="content">
                <h5>
                  Ravi Desai / <span>Book Publisher</span>
                </h5>
              </div>
            </div>
            <p>
              "We use Ayush Marketing's lamination films for our premium book covers. The scratch resistance and glossy finish keep our books looking new for years."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <div className="content">
                <h5>
                  Neha Joshi / <span>Cosmetic Brand Owner</span>
                </h5>
              </div>
            </div>
            <p>
              "The white opaque BOPP film is perfect for our cosmetic packaging. It provides a clean, solid background that makes our branding stand out beautifully."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <div className="content">
                <h5>
                  Suresh Menon / <span>Industrial Packaging Specialist</span>
                </h5>
              </div>
            </div>
            <p>
              "For industrial packaging, Ayush Marketing's BOPP films offer unmatched durability and chemical resistance. Our products stay protected during transport and storage."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <div className="content">
                <h5>
                  Kavita Krishnan / <span>Marketing Manager</span>
                </h5>
              </div>
            </div>
            <p>
              "Their double layer CTP plates have reduced our plate changing frequency by 40%. The extended press life saves us both time and money."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-content">
            <div className="author-image">
              <div className="content">
                <h5>
                  Mohit Arora / <span>Printing Consultant</span>
                </h5>
              </div>
            </div>
            <p>
              "I recommend Ayush Marketing to all my printing clients. Their CTCP plates combine affordability with professional-grade quality that delivers consistent results."
            </p>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot-2 pt-3 ps-1">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const TestimonialSlider4 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider4}
      className="swiper testimonial-slider-4"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Pankaj Tiwari <span>/CEO, Print Solutions</span>
                  </h5>
                </div>
              </div>
              <p>
                "Ayush Marketing has been our trusted partner for lamination films and CTP plates for over 5 years. Their quality standards are consistently excellent."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Ritu Sharma <span>/Packaging Designer</span>
                  </h5>
                </div>
              </div>
              <p>
                "The heat sealable BOPP film from Ayush Marketing works perfectly for our food packaging line. The sealing is strong and consistent every time."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Alok Gupta <span>/Business Owner</span>
                  </h5>
                </div>
              </div>
              <p>
                "Their competitive pricing and timely delivery make Ayush Marketing our preferred supplier for all printing and packaging materials."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Sneha Reddy <span>/Production Manager</span>
                  </h5>
                </div>
              </div>
              <p>
                "The glossy BOPP film gives our brochures and catalogs a professional, high-end look. Our clients always compliment the print quality."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Vijay Kumar <span>/Industrial Buyer</span>
                  </h5>
                </div>
              </div>
              <p>
                "Ayush Marketing's eco-friendly BOPP films help us meet our sustainability goals while maintaining superior packaging quality."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Divya Patel <span>/Creative Head</span>
                  </h5>
                </div>
              </div>
              <p>
                "We love the crystal clear finish of Ayush Marketing's lamination films. They make our promotional materials look vibrant and professional."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Harish Singh <span>/Printing Supervisor</span>
                  </h5>
                </div>
              </div>
              <p>
                "The Orient NexGen CTP plates from Ayush Marketing give us exceptional ink-water balance and print consistency across all our machines."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Manisha Kaur <span>/Label Designer</span>
                  </h5>
                </div>
              </div>
              <p>
                "For our sticker and label business, Ayush Marketing's BOPP films provide the perfect balance of adhesion, clarity, and durability."
              </p>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export const TestimonialSlider5 = () => {
  return (
    <Swiper
      {...sliderProps.testimonialSlider5}
      className="swiper testimonial-slider-5"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Ranjit Nair <span>/Developer</span>
                  </h5>
                </div>
              </div>
              <p>
                "Ayush Marketing's comprehensive product range and technical expertise make them the go-to supplier for all our packaging needs."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Jyoti Verma <span>/CEO &amp; Founder</span>
                  </h5>
                </div>
              </div>
              <p>
                "The quality of their double layer CTP plates has significantly extended our press runs, reducing costs and increasing efficiency."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Arun Pandey <span>/Manager</span>
                  </h5>
                </div>
              </div>
              <p>
                "We've been using Ayush Marketing's products for our magazine printing. The results are consistently impressive and our readers notice the quality."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Priyanka Rao <span>/Designer</span>
                  </h5>
                </div>
              </div>
              <p>
                "The metalized BOPP film has added a premium feel to our festive packaging collections. Sales have increased significantly since switching."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Shailesh Thakur <span>/Printing Director</span>
                  </h5>
                </div>
              </div>
              <p>
                "Ayush Marketing's commitment to quality and customer service sets them apart. They always deliver on time with the right specifications."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Reema Jain <span>/Packaging Consultant</span>
                  </h5>
                </div>
              </div>
              <p>
                "For pharmaceutical packaging, the quality standards are critical. Ayush Marketing's films meet all our regulatory requirements with ease."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Kiran Bhatia <span>/FMCG Executive</span>
                  </h5>
                </div>
              </div>
              <p>
                "The cost-effectiveness of Ayush Marketing's CTCP plates has improved our profit margins significantly without compromising on print quality."
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="testimonial-box-items">
            <div className="testimonial-content">
              <div className="author-image">
                <div className="content">
                  <h5>
                    Naveen Reddy <span>/Print Technician</span>
                  </h5>
                </div>
              </div>
              <p>
                "I've worked with many suppliers, but Ayush Marketing's technical support and product quality are unmatched in the industry."
              </p>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export const TestiThumbSlider = () => {
  return (
    <Swiper
      {...sliderProps.testiThumbSlider}
      className="swiper testi-thumb-slider"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/01.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/02.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/03.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/04.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/05.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/01.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/02.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/03.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/04.png")',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="testi-thumb bg-cover"
            style={{
              backgroundImage: 'url("assets/img/home-6/testimonial/05.png")',
            }}
          />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export const TestiContentSlider = () => {
  return (
    <Swiper
      {...sliderProps.testiContentSlider}
      className="swiper testi-content-slider"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Ananya Gupta <span>/ CEO &amp; Founder, PrintWorks</span>
            </h3>
            <h4>
              "Ayush Marketing has been instrumental in transforming our packaging business. Their BOPP lamination films and CTP plates have helped us deliver superior quality to our clients. The crystal clear finish and durability of their products have made a significant impact on our brand reputation."
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Vikram Singh <span>/ Production Head, PackTech</span>
            </h3>
            <h4>
              "We've been using Ayush Marketing's thermal CTP plates for over three years now. The consistency in print quality, extended press life, and excellent dot reproduction have helped us achieve outstanding results for our commercial printing projects."
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Priya Reddy <span>/ Packaging Consultant</span>
            </h3>
            <h4>
              "What sets Ayush Marketing apart is their deep understanding of the printing and packaging industry. From gloss BOPP films for premium labels to anti-fog films for food packaging, they provide solutions that perfectly match our requirements."
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Rajesh Kumar <span>/ CEO, Digital Print India</span>
            </h3>
            <h4>
              "The double layer CTP plates from Ayush Marketing have revolutionized our high-volume printing operations. The plates deliver exceptional performance, even during extended print runs, maintaining image quality and stability throughout."
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="content">
            <h3>
              Meera Nair <span>/ Packaging Manager, FreshFoods</span>
            </h3>
            <h4>
              "Ayush Marketing's heat sealable and anti-fog BOPP films have been game-changers for our food packaging line. They offer the perfect combination of functionality, clarity, and eco-friendliness that our customers demand."
            </h4>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};