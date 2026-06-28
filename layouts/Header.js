"use client";
import { nextUtility } from "@/utility/index";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header }) => {
  useEffect(() => {
    nextUtility.stickyNav();
  }, []);

  return <HeaderMain />;

};
export default Header;

const Menu = ({ menu }) => {
  const singleMenu = menu
    ? menu
    : [
      { id: 1, href: "about", title: "About" },
      { id: 2, href: "products", title: "Products" },
      { id: 4, href: "blog", title: "Blog" },
      { id: 3, href: "contact", title: "Contact" },
    ];
  return (
    <Fragment>
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link href="/" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">
              Products
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">

                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="/assets/img/home/ctp.webp" alt="Thermal CTP Plates" />
                      <div className="demo-button">
                        <Link href="/products" className="theme-btn">
                          View Product Page
                        </Link>
                        <Link href="/products/thermal-ctp-plates" className="theme-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Thermal CTP Plates</h4>
                    </div>
                  </div>

                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="/assets/img/home/double-layered-ctp.webp" alt="Double Layer CTP Plates" />
                      <div className="demo-button">
                        <Link href="/products" className="theme-btn">
                          View Product Page
                        </Link>
                        <Link href="/products/double-layer-ctp-plates" className="theme-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Double Layer CTP Plates</h4>
                    </div>
                  </div>

                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="/assets/img/home/ctp.webp" alt="CTCP Plates" />
                      <div className="demo-button">
                        <Link href="/products" className="theme-btn">
                          View Product Page
                        </Link>
                        <Link href="/products/ctcp-plates" className="theme-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">CTCP Plates</h4>
                    </div>
                  </div>

                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="/assets/img/products/glossy.jpg" alt="Gloss BOPP Lamination Film" />
                      <div className="demo-button">
                        <Link href="/products" className="theme-btn">
                          View Product Page
                        </Link>
                        <Link href="/products/gloss-bopp-lamination-film" className="theme-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Gloss BOPP Film</h4>
                    </div>
                  </div>

                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="/assets/img/products/matte.jpg" alt="Matte BOPP Lamination Film" />
                      <div className="demo-button">
                        <Link href="/products" className="theme-btn">
                          View Product Page
                        </Link>
                        <Link href="/products/matte-bopp-lamination-film" className="theme-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Matte BOPP Film</h4>
                    </div>
                  </div>

                  <div className="col-xl-2 homemenu">
                    <div className="homemenu-thumb">
                      <img src="/assets/img/products/metalized.jpg" alt="Metalized BOPP Film" />
                      <div className="demo-button">
                        <Link href="/products" className="theme-btn">
                          View Product Page
                        </Link>
                        <Link href="/products/metalized-bopp-film" className="theme-btn">
                          View Details
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Metalized BOPP Film</h4>
                    </div>
                  </div>

                </div>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/blog">
              Blog & News
            </Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = ({ menu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
    setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
    setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenu = menu
    ? menu
    : [
      { id: 1, href: "about", title: "About" },
      { id: 2, href: "products", title: "Products" },
      { id: 4, href: "blog", title: "Blog" },
      { id: 3, href: "contact", title: "Contact" },
    ];
  return (
    <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span />
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            <li className="has-dropdown active d-xl-none">
              <a
                href="#"
                className="border-none"
                onClick={() => activeMenuSet("home")}
              >
                Home
                <i className="fas fa-angle-down" />
              </a>
              <a
                className="mean-expand"
                href="#"
                onClick={() => activeMenuSet("home")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <Fragment>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <a href="#" onClick={() => activeMenuSet("Blog")}>
                  Blog & News
                  <i className="fas fa-angle-down" />
                </a>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Blog")}
                >
                  <i className="far fa-plus" />
                </a>
              </li>
              <li className="mean-last">
                <Link href="/contact">Contact</Link>
              </li>
            </Fragment>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const Sidebar = ({ sidebarToggle, close, menu }) => {
  return (
    <Fragment>
      <div className="fix-area">
        <div className={`offcanvas__info ${sidebarToggle ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo.webp" alt="logo-img" className="logo-1" />
                  </Link>
                </div>
                <div className="offcanvas__close" onClick={() => close()}>
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3">
                <MobileMenu menu={menu} />
              </div>
              <p className="text d-none d-xl-block mb-5">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        GF, No. 64, Industrial Area,
                        7th Cross Road, BTM Layout 2nd Stage,
                        Bengaluru, Karnataka - 560076
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@aayushmarketing.com">info@aayushmarketing.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+91 9945160901">+91 99451 60901</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="/contact" className="theme-btn text-center">
                    Contact Us
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${sidebarToggle ? "overlay-open" : ""}`}
        onClick={() => close()}
      />
    </Fragment>
  );
};

const HeaderMain = ({ menu }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img

                    src="/assets/img/logo-white.webp"
                    alt="logo-img"
                    className="logo-1"
                  />
                </Link>
                <Link href="/">
                  <img

                    src="/assets/img/logo.webp"
                    alt="logo-img"
                    className="logo-2"
                  />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+91 9945160901">+91 9945160901</a>
                    </h4>
                  </div>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
      />
    </Fragment>
  );
};
