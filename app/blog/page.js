"use client";
import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { blogs, recentPosts } from "@/data/blog";

const allCategories = ["All", "BOPP Films", "CTP Plates", "Industry Trends", "Packaging Tips", "Print Technology"];

const page = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchesCategory = activeCategory === "All" || b.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <NextLayout>
      <Breadcrumb pageName="Blog" />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">

              {/* ── Blog Posts ── */}
              <div className="col-12 col-lg-8">
                <div className="blog-posts">

                  {filtered.length > 0 ? filtered.map((blog) => (
                    <div className="single-blog-post" key={blog.id}>

                      {blog.video ? (
                        <div className="post-featured-thumb bg-cover" style={{ backgroundImage: `url("${blog.image}")` }}>
                          <div className="video-play-btn">
                            <a href={blog.video} className="video-button ripple video-popup">
                              <i className="fas fa-play" />
                            </a>
                          </div>
                        </div>
                      ) : (
                        <Link href={`/blog/${blog.slug}`}>
                          <div className="post-featured-thumb bg-cover" style={{ backgroundImage: `url("${blog.image}")` }} />
                        </Link>
                      )}

                      <div className="post-content">
                        <div className="post-meta">
                          <span><i className="fal fa-user" />{blog.author}</span>
                          <span><i className="fal fa-comments" />{blog.comments} Comments</span>
                          <span><i className="fal fa-calendar-alt" />{blog.date}</span>
                          <span><i className="fal fa-folder" />{blog.category}</span>
                        </div>
                        <h2>
                          <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                        </h2>
                        <p>{blog.excerpt}</p>
                        <Link href={`/blog/${blog.slug}`} className="theme-btn mt-4 line-height">
                          <span>READ MORE <i className="fas fa-chevron-right" /></span>
                        </Link>
                      </div>
                    </div>
                  )) : (
                    <div style={{ textAlign: "center", padding: "60px 24px", color: "#aaa" }}>
                      <i className="fal fa-newspaper" style={{ fontSize: 48, display: "block", marginBottom: 16 }} />
                      <h4 style={{ color: "#555", marginBottom: 8 }}>No posts found</h4>
                      <p style={{ fontSize: 14, marginBottom: 20 }}>Try a different keyword or category.</p>
                      <button
                        onClick={() => { setSearch(""); setActiveCategory("All"); }}
                        className="theme-btn"
                        style={{ border: "none", cursor: "pointer" }}
                      >
                        Clear Search
                      </button>
                    </div>
                  )}

                </div>
              </div>

              {/* ── Sidebar ── */}
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">

                  {/* Search */}
                  {/* Search */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Search</h3>
                    </div>
                    
                    <div className="search_widget">
                      <form action="#">
                        <div style={{ position: "relative", marginBottom: 50 }}>
                          <input
                            type="text"
                            placeholder="Keywords here...."
                            value={search}
                            style={{background:'#eeeeee'}}
                            onChange={(e) => setSearch(e.target.value)}
                          />

                          {search ? (
                            <button
                              type="button"
                              onClick={() => setSearch("")}
                              style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                                bottom: 0,
                                background: "var(--theme-color, #e8702a)",
                                border: "none",
                                padding: "0 18px",
                                cursor: "pointer",
                                color: "#fff",
                                fontSize: 16,
                              }}
                            >
                              ×
                            </button>
                          ) : (
                            <button
                              type="button"
                              style={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                                bottom: 0,
                                background: "var(--theme-color, #e8702a)",
                                border: "none",
                                padding: "0 18px",
                                cursor: "pointer",
                                color: "#fff",
                              }}
                            >
                              <i className="fal fa-search" />
                            </button>
                          )}
                        </div>

                        {search && (
                          <p
                            style={{
                              fontSize: 12.5,
                              color: "#888",
                              marginTop: 8,
                              marginBottom: 0,
                            }}
                          >
                            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for{" "}
                            <em>"{search}"</em>
                          </p>
                        )}
                      </form>
                    </div>

                    {/* Categories */}
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Categories</h3>
                      </div>
                      <div className="widget_categories">
                        <ul>
                          {allCategories.map((cat) => {
                            const count = cat === "All"
                              ? blogs.length
                              : blogs.filter((b) => b.category === cat).length;
                            return (
                              <li key={cat}>
                                <a
                                  href="#"
                                  onClick={(e) => { e.preventDefault(); setActiveCategory(cat); setSearch(""); }}
                                  style={{
                                    fontWeight: activeCategory === cat ? 700 : 400,
                                    color: activeCategory === cat ? "var(--theme-color, #e8702a)" : "",
                                  }}
                                >
                                  {cat} <span>{String(count).padStart(2, "0")}</span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Popular Posts */}
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Popular Posts</h3>
                      </div>
                      <div className="popular-posts">
                        {recentPosts.map((post) => (
                          <div className="single-post-item" key={post.slug}>
                            <div className="thumb bg-cover" style={{ backgroundImage: `url("${post.image}")` }} />
                            <div className="post-content">
                              <h5><Link href={`/blog/${post.slug}`}>{post.title}</Link></h5>
                              <div className="post-date">
                                <i className="far fa-calendar-alt" />{post.date}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social */}
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Never Miss News</h3>
                      </div>
                      <div className="social-link">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-instagram" /></a>
                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                        <a href="#"><i className="fab fa-youtube" /></a>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Popular Tags</h3>
                      </div>
                      <div className="tagcloud">
                        {["BOPP Film", "CTP Plates", "Lamination", "Packaging", "Printing", "CTCP", "Matte Film", "Gloss Film"].map((tag) => (
                          <a
                            key={tag}
                            href="#"
                            onClick={(e) => { e.preventDefault(); setSearch(tag); setActiveCategory("All"); }}
                          >
                            {tag}
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Popular Posts */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Posts</h3>
                    </div>
                    <div className="popular-posts">
                      {recentPosts.map((post) => (
                        <div className="single-post-item" key={post.slug}>
                          <div className="thumb bg-cover" style={{ backgroundImage: `url("${post.image}")` }} />
                          <div className="post-content">
                            <h5><Link href={`/blog/${post.slug}`}>{post.title}</Link></h5>
                            <div className="post-date">
                              <i className="far fa-calendar-alt" />{post.date}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="widget_categories">
                      <ul>
                        {allCategories.map((cat) => {
                          const count = cat === "All"
                            ? blogs.length
                            : blogs.filter((b) => b.category === cat).length;
                          return (
                            <li key={cat}>
                              <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); setActiveCategory(cat); setSearch(""); }}
                                style={{
                                  fontWeight: activeCategory === cat ? 700 : 400,
                                  color: activeCategory === cat ? "var(--theme-color, #e8702a)" : "",
                                }}
                              >
                                {cat} <span>{String(count).padStart(2, "0")}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Never Miss News</h3>
                    </div>
                    <div className="social-link">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-linkedin-in" /></a>
                      <a href="#"><i className="fab fa-youtube" /></a>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Popular Tags</h3>
                    </div>
                    <div className="tagcloud">
                      {["BOPP Film", "CTP Plates", "Lamination", "Packaging", "Printing", "CTCP", "Matte Film", "Gloss Film"].map((tag) => (
                        <a
                          key={tag}
                          href="#"
                          onClick={(e) => { e.preventDefault(); setSearch(tag); setActiveCategory("All"); }}
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;