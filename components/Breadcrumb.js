import Link from "next/link";

const Breadcrumb = ({ pageName = "About Company", pageTitle }) => {
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/breadcrum.webp")' }}
    >
      <div className="container">
        <div className="page-heading">
          <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: "#fff" }}>
            {pageTitle ? pageTitle : pageName}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
