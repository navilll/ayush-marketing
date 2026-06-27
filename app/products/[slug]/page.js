import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Ayush Marketing`,
    description: product.description,
  };
}

const ProductDetailPage = async ({ params }) => {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <NextLayout>
      <Breadcrumb pageName={product.name} pageTitle={product.name} />

      <section className="fix section-padding">
        <div className="container">

          {/* ── Top: Main Image + Side Image ── */}
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <div style={{ borderRadius: 12, overflow: "hidden", height: 420 }}>
                <img
                  src={product.gallery[0]}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{ borderRadius: 12, overflow: "hidden", height: 420 }}>
                <img
                  src={product.gallery[1]}
                  alt={product.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* ── Middle: Content + Info Sidebar ── */}
          <div className="row g-5 mb-5">

            {/* Left: Overview + Features */}
            <div className="col-lg-8">

              {/* Category badge */}
              <span
                style={{
                  display: "inline-block",
                  background: "var(--theme-color, #e8702a)",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "4px 14px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  marginBottom: 16,
                }}
              >
                {product.category}
              </span>

              <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>
                {product.tagline}
              </h2>

              <p style={{ fontSize: 15.5, color: "#555", lineHeight: 1.85, marginBottom: 36 }}>
                {product.longDescription}
              </p>

              {/* Key Features */}
              <div
                style={{
                  background: "#f8f9fb",
                  border: "1px solid #eaeaea",
                  borderRadius: 12,
                  padding: "28px 32px",
                  marginBottom: 32,
                }}
              >
                <h4 style={{ fontWeight: 700, marginBottom: 20, fontSize: "1.1rem" }}>
                  <i className="fas fa-star" style={{ color: "var(--theme-color, #e8702a)", marginRight: 10 }} />
                  Key Features
                </h4>
                <div className="row g-3">
                  {product.features.map((f) => (
                    <div className="col-md-6" key={f}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            background: "rgba(232,112,42,0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <i className="far fa-check" style={{ color: "var(--theme-color, #e8702a)", fontSize: 12 }} />
                        </span>
                        <span style={{ fontSize: 14, fontWeight: 500, color: "#333" }}>{f}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div style={{ marginBottom: 32 }}>
                <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: "1.1rem" }}>
                  <i className="fas fa-th-large" style={{ color: "var(--theme-color, #e8702a)", marginRight: 10 }} />
                  Applications
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {product.applications.map((a) => (
                    <span
                      key={a}
                      style={{
                        background: "rgba(232,112,42,0.07)",
                        color: "var(--theme-color, #e8702a)",
                        border: "1px solid rgba(232,112,42,0.2)",
                        borderRadius: 6,
                        padding: "7px 16px",
                        fontSize: 13.5,
                        fontWeight: 500,
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div style={{ marginBottom: 0 }}>
                <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: "1.1rem" }}>
                  <i className="fas fa-shield-alt" style={{ color: "var(--theme-color, #e8702a)", marginRight: 10 }} />
                  Why Choose Ayush Marketing?
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {product.whyUs.map((w) => (
                    <li
                      key={w}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        marginBottom: 14,
                        fontSize: 14.5,
                        color: "#444",
                      }}
                    >
                      <i
                        className="far fa-check-circle"
                        style={{ color: "var(--theme-color, #e8702a)", marginTop: 3, flexShrink: 0 }}
                      />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Info Sidebar */}
            <div className="col-lg-4">
              <div
                style={{
                  position: "sticky",
                  top: 100,
                  background: "#fff",
                  border: "1px solid #eaeaea",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                }}
              >
                {/* Sidebar header */}
                <div
                  style={{
                    background: "var(--theme-color, #e8702a)",
                    padding: "20px 24px",
                  }}
                >
                  <h4 style={{ color: "#fff", margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>
                    Product Information
                  </h4>
                </div>

                {/* Info rows */}
                <div style={{ padding: "8px 0" }}>
                  {Object.entries(product.info).map(([key, val], i, arr) => (
                    <div
                      key={key}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "14px 24px",
                        borderBottom: i < arr.length - 1 ? "1px solid #f0f0f0" : "none",
                      }}
                    >
                      <span style={{ fontSize: 13.5, color: "#888", fontWeight: 500 }}>{key}</span>
                      <span style={{ fontSize: 13.5, color: "#222", fontWeight: 600, textAlign: "right", maxWidth: "55%" }}>{val}</span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <Link
                    href="/contact"
                    className="theme-btn"
                    style={{ display: "block", textAlign: "center", width: "100%" }}
                  >
                    Enquire Now <i className="fas fa-arrow-right" style={{ marginLeft: 6 }} />
                  </Link>
                  <Link
                    href="/products"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "12px 20px",
                      border: "1.5px solid #ddd",
                      borderRadius: 7,
                      color: "#555",
                      fontSize: 14,
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                  >
                    ← Back to Products
                  </Link>
                </div>

                {/* Share */}
                <div
                  style={{
                    borderTop: "1px solid #f0f0f0",
                    padding: "16px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span style={{ fontSize: 13, color: "#888", fontWeight: 600, whiteSpace: "nowrap" }}>
                    Share:
                  </span>
                  {[
                    { icon: "fab fa-facebook-f", color: "#1877f2" },
                    { icon: "fab fa-whatsapp",   color: "#25d366" },
                    { icon: "fab fa-twitter",    color: "#1da1f2" },
                    { icon: "fab fa-linkedin-in",color: "#0a66c2" },
                  ].map(({ icon, color }) => (
                    <a
                      key={icon}
                      href="#"
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: `${color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color,
                        fontSize: 13,
                        textDecoration: "none",
                        transition: "background 0.2s",
                      }}
                    >
                      <i className={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Gallery ── */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <h4 style={{ fontWeight: 700, marginBottom: 20, fontSize: "1.1rem" }}>
                <i className="fas fa-images" style={{ color: "var(--theme-color, #e8702a)", marginRight: 10 }} />
                Product Gallery
              </h4>
            </div>
            {product.gallery.slice(2).map((img, i) => (
              <div className="col-lg-6" key={i}>
                <div style={{ borderRadius: 12, overflow: "hidden", height: 300 }}>
                  <img
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="project-section section-padding pt-0">
          <div className="container">
            <div className="section-title text-center">
              <span className="sub-content">
                <img src="/assets/img/bale.png" alt="img" />
                More Products
              </span>
              <h2>Related Products</h2>
            </div>
            <div className="row justify-content-center">
              {related.map((rp) => (
                <div className="col-lg-4 col-md-6" key={rp.id}>
                  <div className="project-card-items">
                    <Link href={`/products/${rp.slug}`}>
                      <div className="project-image">
                        <img src={rp.image} alt={rp.name} />
                      </div>
                    </Link>
                    <div className="project-content">
                      <p>{rp.category}</p>
                      <h3>
                        <Link href={`/products/${rp.slug}`}>{rp.name}</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 24 }}>
              <Link href="/products" className="theme-btn">
                View All Products <i className="fas fa-arrow-right" style={{ marginLeft: 6 }} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </NextLayout>
  );
};

export default ProductDetailPage;