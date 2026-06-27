import Counter from "./Counter";

const FunFactCounter = () => {
  return (
    <div className="row">
      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".2s"
      >
        <div className="funfact-box-items">
          <h2>
            <span className="count">
              <Counter end={6} />
            </span>
            +
          </h2>
          <h6>BOPP Film Variants</h6>
          <p>
            Gloss, Matte, Metalized, White Opaque, Heat Sealable & Anti-Fog
            films for diverse packaging needs.
          </p>
        </div>
      </div>

      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className="funfact-box-items active">
          <h2>
            <span className="count">
              <Counter end={10} />
            </span>
            +
          </h2>
          <h6>Industry Applications</h6>
          <p>
            Trusted for packaging, commercial printing, labels, books,
            pharmaceuticals, FMCG, cosmetics.
          </p>
        </div>
      </div>

      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".6s"
      >
        <div className="funfact-box-items">
          <h2>
            <span className="count">
              <Counter end={3} />
            </span>
            +
          </h2>
          <h6>Printing Plate Solutions</h6>
          <p>
            Premium CTP, CTCP, and Double Layer CTP plates engineered for
            precision, durability.
          </p>
        </div>
      </div>

      <div
        className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay=".8s"
      >
        <div className="funfact-box-items">
          <h2>
            <span className="count">
              <Counter end={100} />
            </span>
            %
          </h2>
          <h6>Quality & Reliable Supply</h6>
          <p>
            Premium products sourced from trusted manufacturers with competitive
            pricing, timely delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunFactCounter;