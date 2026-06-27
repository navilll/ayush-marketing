"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/data/products";

const categories = ["All", "BOPP Films", "CTP Plates"];

export default function ProductsClient() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = useMemo(() => {
        return products.filter((p) => {
            const matchesCategory =
                activeCategory === "All" || p.category === activeCategory;
            const q = search.toLowerCase();
            const matchesSearch =
                !q ||
                p.name.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.applications.some((a) => a.toLowerCase().includes(q)) ||
                p.features.some((f) => f.toLowerCase().includes(q));
            return matchesCategory && matchesSearch;
        });
    }, [search, activeCategory]);

    return (
        <section className="project-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-content wow fadeInUp">
                        <img src="assets/img/bale.png" alt="img" />
                        Product Range
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Printing & Packaging Solutions
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: 580, margin: "12px auto 0", color: "#666", fontSize: 15 }}>
                        Premium quality BOPP lamination films and CTP plates for commercial printing, packaging, and branding applications.
                    </p>
                </div>

                {/* Search + Filter Bar */}
                <div
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", margin: "36px 0 32px", background: "#f8f9fb", borderRadius: 10, padding: "18px 24px", border: "1px solid #eaeaea" }}
                >
                    <div style={{ position: "relative", flex: "1 1 260px", minWidth: 220 }}>
                        <i className="fas fa-search" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#aaa", fontSize: 14 }} />
                        <input
                            type="text"
                            placeholder="Search products, features, applications..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ width: "100%", padding: "10px 14px 10px 38px", border: "1.5px solid #ddd", borderRadius: 8, fontSize: 14, outline: "none", background: "#fff", color: "#333", transition: "border-color 0.2s" }}
                            onFocus={(e) => (e.target.style.borderColor = "var(--theme-color, #e8702a)")}
                            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                        />
                        {search && (
                            <button onClick={() => setSearch("")} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#aaa", fontSize: 16, lineHeight: 1, padding: 0 }}>×</button>
                        )}
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{ padding: "9px 20px", borderRadius: 7, border: "1.5px solid", borderColor: activeCategory === cat ? "var(--theme-color, #e8702a)" : "#ddd", background: activeCategory === cat ? "var(--theme-color, #e8702a)" : "#fff", color: activeCategory === cat ? "#fff" : "#555", fontWeight: activeCategory === cat ? 600 : 400, fontSize: 13.5, cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}
                            >
                                {cat}
                                {cat !== "All" && (
                                    <span style={{ marginLeft: 6, background: activeCategory === cat ? "rgba(255,255,255,0.25)" : "#eee", color: activeCategory === cat ? "#fff" : "#777", borderRadius: 20, padding: "1px 7px", fontSize: 11, fontWeight: 600 }}>
                                        {products.filter((p) => p.category === cat).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results count */}
                <div style={{ marginBottom: 24, color: "#888", fontSize: 13.5 }}>
                    Showing <strong style={{ color: "#333" }}>{filtered.length}</strong> of{" "}
                    <strong style={{ color: "#333" }}>{products.length}</strong> products
                    {search && <span> for <em>"{search}"</em></span>}
                </div>

                {/* Product Grid */}
                {filtered.length > 0 ? (
                    <div className="row">
                        {filtered.map((product, i) => (
                            <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + (i % 3) * 0.2}s`}>
                                <div className="project-card-items" style={{ marginBottom: 30 }}>

                                    {/* Clickable image */}
                                    <Link href={`/products/${product.slug}`}>
                                        <div className="project-image" style={{ position: "relative" }}>
                                            <img src={product.image} alt={product.name} />
                                            <span style={{ position: "absolute", top: 14, left: 14, background: "var(--theme-color, #e8702a)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                                                {product.category}
                                            </span>
                                        </div>
                                    </Link>

                                    <div className="project-content" style={{ padding: "22px 24px 24px" }}>
                                        <p style={{ marginBottom: 6 }}>{product.category}</p>

                                        {/* Clickable title */}
                                        <h3 style={{ marginBottom: 12, fontSize: "1.2rem" }}>
                                            <Link href={`/products/${product.slug}`} style={{ color: "inherit" }}>
                                                {product.name}
                                            </Link>
                                        </h3>

                                        <p style={{ fontSize: 13.5, color: "#666", lineHeight: 1.7, marginBottom: 16, fontWeight: 400 }}>
                                            {product.description}
                                        </p>

                                        {/* Features */}
                                        <div style={{ marginBottom: 16 }}>
                                            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "#999", marginBottom: 8 }}>Key Features</div>
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                                {product.features.map((f) => (
                                                    <span key={f} style={{ background: "#f3f4f6", color: "#444", fontSize: 12, padding: "3px 10px", borderRadius: 5, fontWeight: 500 }}>{f}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Applications */}
                                        <div style={{ marginBottom: 20 }}>
                                            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "#999", marginBottom: 8 }}>Applications</div>
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                                {product.applications.map((a) => (
                                                    <span key={a} style={{ background: "rgba(232,112,42,0.08)", color: "var(--theme-color, #e8702a)", fontSize: 12, padding: "3px 10px", borderRadius: 5, fontWeight: 500, border: "1px solid rgba(232,112,42,0.15)" }}>{a}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTAs */}
                                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                                            <Link href={`/products/${product.slug}`} className="theme-btn" style={{ display: "inline-block", fontSize: 13.5 }}>
                                                View Details <i className="fas fa-arrow-right" style={{ marginLeft: 6 }} />
                                            </Link>
                                            <Link href={`/products/${product.slug}`} className="theme-btn"
                                                style={{ display: "inline-block", fontSize: 13.5, border: "1.5px solid var(--theme-color, #e8702a)", color: "var(--theme-color, #e8702a)", textDecoration: "none", background: "transparent" }}>
                                                Enquire <i className="fas fa-arrow-right" style={{ marginLeft: 6 }} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: "center", padding: "72px 24px", color: "#aaa" }}>
                        <i className="fas fa-box-open" style={{ fontSize: 48, marginBottom: 16, display: "block" }} />
                        <h4 style={{ color: "#555", marginBottom: 8 }}>No products found</h4>
                        <p style={{ fontSize: 14 }}>Try a different search term or clear the filter.</p>
                        <button
                            onClick={() => { setSearch(""); setActiveCategory("All"); }}
                            style={{ marginTop: 16, padding: "10px 24px", background: "var(--theme-color, #e8702a)", color: "#fff", border: "none", borderRadius: 7, cursor: "pointer", fontSize: 14, fontWeight: 600 }}
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="wow fadeInUp" data-wow-delay=".3s" style={{ textAlign: "center", marginTop: 20, padding: "48px 32px", background: "#f8f9fb", borderRadius: 12, border: "1px solid #eaeaea" }}>
                    <h4 style={{ marginBottom: 10, fontSize: "1.3rem" }}>Need a Custom Quote?</h4>
                    <p style={{ color: "#666", fontSize: 14.5, marginBottom: 20 }}>
                        Contact Ayush Marketing for competitive pricing, bulk orders, and technical support across India.
                    </p>
                    <Link href="/contact" className="theme-btn">
                        Get in Touch <i className="fas fa-arrow-right" style={{ marginLeft: 6 }} />
                    </Link>
                </div>
            </div>
        </section>
    );
}