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
    `transition-colors font-medium ${isActive ? "text-molten font-bold" : "text-white hover:text-molten"}`;

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `text-lg transition-colors ${isActive ? "text-molten font-bold" : "text-white hover:text-molten"}`;

  return (
    <div className="bg-charcoal text-white min-h-screen w-full overflow-x-hidden font-inter">
      <ScrollToTop />

      <nav className="fixed top-0 w-full bg-charcoal/95 backdrop-blur-md z-50 border-b border-steel">
        <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <span className="text-2xl text-molten">✓</span>
            <span>Win The Hour!™</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/features" className={navClass}>
              Features
            </NavLink>
            <NavLink to="/membership" className={navClass}>
              Membership
            </NavLink>
            <NavLink to="/manifesto" className={navClass}>
              Manifesto
            </NavLink>
            <NavLink to="/blog" className={navClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/membership"
              className="hidden md:inline-flex items-center justify-center whitespace-nowrap overflow-hidden bg-molten text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-molten/50 hover:bg-molten-dark transition-all transform hover:scale-105 active:scale-95"
            >
              Start Free
            </Link>
            <button
              className="md:hidden p-2 text-white hover:text-molten transition-colors"
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
          <div className="md:hidden bg-charcoal/95 backdrop-blur-md border-b border-steel">
            <div className="flex flex-col px-6 py-6 gap-5">
              <NavLink to="/" end onClick={closeMobile} className={mobileNavClass}>
                Home
              </NavLink>
              <NavLink to="/features" onClick={closeMobile} className={mobileNavClass}>
                Features
              </NavLink>
              <NavLink to="/membership" onClick={closeMobile} className={mobileNavClass}>
                Membership
              </NavLink>
              <NavLink to="/manifesto" onClick={closeMobile} className={mobileNavClass}>
                Manifesto
              </NavLink>
              <NavLink to="/blog" onClick={closeMobile} className={mobileNavClass}>
                Blog
              </NavLink>
              <NavLink to="/contact" onClick={closeMobile} className={mobileNavClass}>
                Contact
              </NavLink>
              <Link
                to="/membership"
                onClick={closeMobile}
                className="bg-molten text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg hover:shadow-molten/50 hover:bg-molten-dark transition-all mt-2 whitespace-nowrap overflow-hidden"
              >
                Start Free
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="py-12 px-6 bg-charcoal border-t border-steel">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl text-molten">✓</span>
                <span className="text-xl font-bold text-white">Win The Hour!™</span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed">
                Gamified productivity for high-performers. Reclaim your time. Win every hour.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <Link to="/features" className="hover:text-molten transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/membership" className="hover:text-molten transition-colors">
                    Membership
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-molten transition-colors">
                    Affiliate Program
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <Link to="/manifesto" className="hover:text-molten transition-colors">
                    Manifesto
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-molten transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-molten transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-molten transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a href="#" className="hover:text-molten transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-molten transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-molten transition-colors">
                    License Agreement
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-steel pt-8 text-center text-white/60 text-sm">
            <p className="mb-2">&copy; 2026 Chude Muonelo. All Rights Reserved.</p>
            <p>Win The Hour!™ and Make Yourself Better Every Day™ (M.Y.B.E.D.) are pending trademarks.</p>
            <p className="mt-2">Licensed under Toravian Dynasty Trust · Managed by MCM Enterprises</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
