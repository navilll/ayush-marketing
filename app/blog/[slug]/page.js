import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { blogs, recentPosts } from "@/data/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Ayush Marketing`,
    description: blog.excerpt,
  };
}

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  // Related posts — same category, exclude current
  const related = blogs
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  const allCategories = [
    { name: "BOPP Films",       count: blogs.filter((b) => b.category === "BOPP Films").length },
    { name: "CTP Plates",       count: blogs.filter((b) => b.category === "CTP Plates").length },
    { name: "Industry Trends",  count: blogs.filter((b) => b.category === "Industry Trends").length },
    { name: "Packaging Tips",   count: 0 },
    { name: "Print Technology", count: 0 },
  ];

  return (
    <NextLayout>
      <Breadcrumb pageName={blog.title} />
      <section className="blog-wrapper news-wrapper section-padding">
        <div className="container">
          <div className="news-area">
            <div className="row">

              {/* ── Blog Detail Content ── */}
              <div className="col-12 col-lg-8">
                <div className="blog-post-details border-wrap mt-0">
                  <div className="single-blog-post post-details mt-0">
                    <div className="post-content pt-0">

                      <h2 className="mt-0">{blog.title}</h2>

                      <div className="post-meta mt-3">
                        <span>
                          <i className="fal fa-user" />
                          {blog.author}
                        </span>
                        <span>
                          <i className="fal fa-comments" />
                          {blog.comments} Comments
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          {blog.date}
                        </span>
                        <span>
                          <i className="fal fa-folder" />
                          {blog.category}
                        </span>
                      </div>

                      {/* Intro paragraphs */}
                      {blog.content.intro.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}

                      {/* Detail image 1 */}
                      <img
                        src={blog.detailImage1}
                        alt={blog.title}
                        className="single-post-image"
                      />

                      <h2>{blog.content.subHeading}</h2>
                      <p>{blog.content.subContent}</p>

                      <blockquote>{blog.content.blockquote}</blockquote>

                      <h4>{blog.content.listHeading}</h4>
                      <ul className="checked-list mb-4">
                        {blog.content.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <h4>{blog.content.subHeading2}</h4>


                      <p>{blog.content.subContent2}</p>

                      <p>
                        For more information about our product range or to place an enquiry,
                        contact the Ayush Marketing team. We supply premium BOPP lamination films
                        and CTP plates to printing businesses across India with competitive pricing
                        and reliable delivery.
                      </p>

                    </div>
                  </div>

                  {/* Tags + Share */}
                  <div className="row tag-share-wrap">
                    <div className="col-lg-8 col-12">
                      <h4>Related Tags</h4>
                      <div className="tagcloud">
                        {blog.relatedTags.map((tag) => (
                          <Link key={tag} href="/blog">{tag}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <h4>Social Share</h4>
                      <div className="social-share">
                        <a href="#"><i className="fab fa-facebook-f" /></a>
                        <a href="#"><i className="fab fa-twitter" /></a>
                        <a href="#"><i className="fab fa-whatsapp" /></a>
                        <a href="#"><i className="fab fa-linkedin-in" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Sidebar ── */}
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">

                  {/* Search */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Search</h3>
                    </div>
                    <div className="search_widget">
                      <form action="/blog">
                        <input type="text" name="q" placeholder="Keywords here...." />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
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
                        {allCategories.map((cat) => (
                          <li key={cat.name}>
                            <Link href="/blog">
                              {cat.name} <span>{String(cat.count).padStart(2, "0")}</span>
                            </Link>
                          </li>
                        ))}
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
                        <Link key={tag} href="/blog">{tag}</Link>
                      ))}
                    </div>
                  </div>

                  {/* Related Posts — only if exists */}
                  {related.length > 0 && (
                    <div className="single-sidebar-widget">
                      <div className="wid-title">
                        <h3>Related Posts</h3>
                      </div>
                      <div className="popular-posts">
                        {related.map((post) => (
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
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default BlogDetailPage;