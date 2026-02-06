import { useState, useEffect } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobile = () => setMobileMenuOpen(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${isActive ? "text-[#FF5E1A]" : "text-[#FFFFFF] hover:text-[#FF5E1A]"}`;

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg transition-colors ${isActive ? "text-[#FF5E1A]" : "text-[#FFFFFF] hover:text-[#FF5E1A]"}`;

  return (
    <div className="bg-[#0B0C10] text-[#FFFFFF] min-h-screen w-full overflow-x-hidden">
      <ScrollToTop />

      <nav className="fixed top-0 w-full bg-[#0B0C10]/95 backdrop-blur-lg z-50 border-b border-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-5 flex items-center justify-between">
          <NavLink
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-2 text-xl font-bold text-[#FFFFFF]"
          >
            <span className="text-2xl">✓</span>
            <span>Win The Hour!™</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-10">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/features" className={navClass}>
              Features
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
            <NavLink to="/store" className={navClass}>
              Store
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center whitespace-nowrap bg-[#FF5E1A] text-[#FFFFFF] px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-[#FF5E1A]/50 hover:bg-[#E55517] transition-all transform hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
            <button
              className="md:hidden p-2 text-[#FFFFFF] hover:text-[#FF5E1A] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0C10]/95 backdrop-blur-lg border-b border-[#1F2025]">
            <div className="flex flex-col px-6 py-6 gap-5">
              <NavLink to="/" end onClick={closeMobile} className={mobileNavClass}>
                Home
              </NavLink>
              <NavLink to="/features" onClick={closeMobile} className={mobileNavClass}>
                Features
              </NavLink>
              <NavLink to="/about" onClick={closeMobile} className={mobileNavClass}>
                About
              </NavLink>
              <NavLink to="/store" onClick={closeMobile} className={mobileNavClass}>
                Store
              </NavLink>
              <NavLink to="/contact" onClick={closeMobile} className={mobileNavClass}>
                Contact
              </NavLink>
              <Link
                to="/contact"
                onClick={closeMobile}
                className="bg-[#FF5E1A] text-[#FFFFFF] px-6 py-3 rounded-full font-semibold text-center shadow-lg hover:bg-[#E55517] transition-all mt-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="py-32 md:py-40 px-6 sm:px-10 lg:px-16 xl:px-24 bg-[#0B0C10] border-t border-[#1F2025]">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-20">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-8">
                <span className="text-2xl">✓</span>
                <span>Win The Hour!™</span>
              </Link>
              <p className="text-[#FFFFFF]/60 text-sm leading-relaxed">
                The productivity app that helps you transform your life, one
                hour at a time.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-8">Navigate</h4>
              <ul className="space-y-5 text-[#FFFFFF]/60 text-sm">
                <li>
                  <Link to="/" className="hover:text-[#FFFFFF] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="hover:text-[#FFFFFF] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#FFFFFF] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/store" className="hover:text-[#FFFFFF] transition-colors">
                    Store
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8">Support</h4>
              <ul className="space-y-5 text-[#FFFFFF]/60 text-sm">
                <li>
                  <Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">
                    Request Support
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">
                    Suggest Improvements
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8">Legal</h4>
              <ul className="space-y-5 text-[#FFFFFF]/60 text-sm">
                <li>
                  <a href="#" className="hover:text-[#FFFFFF] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFFFFF] transition-colors">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFFFFF] transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1F2025] pt-12 text-center text-[#FFFFFF]/50 text-sm">
            <p>&copy; 2026 Win The Hour!™ All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
