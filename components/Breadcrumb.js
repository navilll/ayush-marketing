import Link from "next/link";

const Breadcrumb = ({ pageName = "About Us", pageTitle }) => {
  return (
    <section className="breadcrumb-wrapper">
      <div className="breadcrumb-shape shape-one"></div>
      <div className="breadcrumb-shape shape-two"></div>
      <div className="breadcrumb-shape shape-three"></div>

      <div className="container">
        <div className="breadcrumb-content">
          <span className="breadcrumb-bg-text">
            {(pageTitle || pageName).toUpperCase()}
          </span>

          <div className="breadcrumb-list">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="active">{pageName}</span>
          </div>

          <h1>{pageTitle || pageName}</h1>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;