import { useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  name: string;
  image: string;
  edition: string;
  editionColor: string;
  price: string;
  status: "available" | "coming-soon";
  link?: string;
};

const watchfaces: Product[] = [
  {
    name: "Athletic Edition",
    image: "/store/watchfaces/athletic-edition.png",
    edition: "Athletic",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$4.99",
    status: "available",
    link: "https://payhip.com/b/MXKgG",
  },
  {
    name: "Athletic Smartwatch",
    image: "/store/watchfaces/athletic-smartwatch.png",
    edition: "Athletic",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$4.99",
    status: "available",
  },
  {
    name: "Gana la Hora",
    image: "/store/watchfaces/gana-la-hora-athletic.png",
    edition: "Athletic",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$4.99",
    status: "available",
  },
  {
    name: "Sleek Athletic",
    image: "/store/watchfaces/sleek-athletic-edition.png",
    edition: "Athletic",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$4.99",
    status: "available",
  },
  {
    name: "Classic Athletic",
    image: "/store/watchfaces/classic-athletic-edition.png",
    edition: "Athletic",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$4.99",
    status: "available",
  },
  {
    name: "Athletic Watch",
    image: "/store/watchfaces/athletic-edition-watch.png",
    edition: "Athletic",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$4.99",
    status: "available",
  },
  {
    name: "Signature Toravian",
    image: "/store/watchfaces/signature-toravian.png",
    edition: "Signature",
    editionColor: "bg-gold/20 text-gold border-gold",
    price: "$9.99",
    status: "available",
  },
  {
    name: "Signature Watch",
    image: "/store/watchfaces/signature-watch.png",
    edition: "Signature",
    editionColor: "bg-gold/20 text-gold border-gold",
    price: "$9.99",
    status: "available",
  },
  {
    name: "Elite Edition",
    image: "/store/watchfaces/elite-edition.png",
    edition: "Elite",
    editionColor: "bg-gold/20 text-gold border-gold",
    price: "$7.99",
    status: "available",
  },
  {
    name: "Mystic Edition",
    image: "/store/watchfaces/mystic-edition.png",
    edition: "Mystic",
    editionColor: "bg-tier-legendary/20 text-tier-legendary border-tier-legendary",
    price: "$7.99",
    status: "available",
  },
  {
    name: "Chakra Edition",
    image: "/store/watchfaces/chakra-edition.png",
    edition: "Chakra",
    editionColor: "bg-tier-legendary/20 text-tier-legendary border-tier-legendary",
    price: "$7.99",
    status: "available",
  },
  {
    name: "Chakra Watch Face",
    image: "/store/watchfaces/chakra-watch-face.png",
    edition: "Chakra",
    editionColor: "bg-tier-legendary/20 text-tier-legendary border-tier-legendary",
    price: "$7.99",
    status: "available",
  },
  {
    name: "Chakra Watch",
    image: "/store/watchfaces/chakra-watch-design.png",
    edition: "Chakra",
    editionColor: "bg-tier-legendary/20 text-tier-legendary border-tier-legendary",
    price: "$7.99",
    status: "available",
  },
  {
    name: "Chakra Golden Mandala",
    image: "/store/watchfaces/chakra-golden-mandala.png",
    edition: "Chakra",
    editionColor: "bg-tier-legendary/20 text-tier-legendary border-tier-legendary",
    price: "$7.99",
    status: "available",
  },
  {
    name: "Clutch Edition",
    image: "/store/watchfaces/clutch-edition.png",
    edition: "Clutch",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$4.99",
    status: "available",
  },
];

const merch: Product[] = [
  {
    name: "Golden Checkmark Hoodie",
    image: "/store/merch/hoodie-golden.png",
    edition: "Apparel",
    editionColor: "bg-gold/20 text-gold border-gold",
    price: "$59.99",
    status: "coming-soon",
  },
  {
    name: "Glow Checkmark Hoodie",
    image: "/store/merch/hoodie-glow.png",
    edition: "Apparel",
    editionColor: "bg-gold/20 text-gold border-gold",
    price: "$59.99",
    status: "coming-soon",
  },
];

const posters: Product[] = [
  {
    name: "Build Your Empire",
    image: "/store/posters/build-your-empire.png",
    edition: "Print",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$24.99",
    status: "coming-soon",
  },
  {
    name: "Bold Statement",
    image: "/store/posters/bold-statement.png",
    edition: "Print",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$24.99",
    status: "coming-soon",
  },
  {
    name: "Empower Your Hour",
    image: "/store/posters/empower-your-hour.png",
    edition: "Print",
    editionColor: "bg-molten/20 text-molten border-molten",
    price: "$24.99",
    status: "coming-soon",
  },
];

function groupByEdition(products: Product[]) {
  const groups: { edition: string; editionColor: string; products: Product[] }[] = [];
  for (const product of products) {
    const existing = groups.find((g) => g.edition === product.edition);
    if (existing) {
      existing.products.push(product);
    } else {
      groups.push({ edition: product.edition, editionColor: product.editionColor, products: [product] });
    }
  }
  return groups;
}

function ProductSubGroup({ edition, editionColor, products, columns = 4 }: {
  edition: string;
  editionColor: string;
  products: Product[];
  columns?: number;
}) {
  const [open, setOpen] = useState(true);
  const gridCols = columns === 4
    ? "sm:grid-cols-2 lg:grid-cols-4"
    : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="mb-8 last:mb-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 mb-4 cursor-pointer"
      >
        <span className={`text-sm font-bold px-3 py-1 rounded-full border ${editionColor}`}>
          {edition}
        </span>
        <span className="text-white/40 text-sm">{products.length} {products.length === 1 ? "item" : "items"}</span>
        <svg
          className={`w-4 h-4 text-white/40 transition-transform duration-300 ${open ? "" : "-rotate-90"}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className={`grid ${gridCols} gap-8`}>
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const content = (
    <>
      <div className="aspect-square overflow-hidden bg-charcoal">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border ${product.editionColor}`}
          >
            {product.edition}
          </span>
          {product.status === "coming-soon" && (
            <span className="text-xs font-bold px-3 py-1 rounded-full border bg-steel/40 text-white/70 border-steel">
              Coming Soon
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-molten">{product.price}</span>
          {product.status === "available" ? (
            <span className="bg-molten text-white px-5 py-2 rounded-full font-semibold text-sm group-hover:bg-molten-dark transition-all whitespace-nowrap">
              Buy Now
            </span>
          ) : (
            <span className="bg-steel text-white px-5 py-2 rounded-full font-semibold text-sm group-hover:bg-steel/80 transition-all whitespace-nowrap">
              Notify Me
            </span>
          )}
        </div>
      </div>
    </>
  );

  const cardClasses = "bg-slate rounded-3xl border-2 border-steel hover:border-molten transition-all duration-300 overflow-hidden group cursor-pointer";

  if (product.link) {
    return (
      <a href={product.link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
        {content}
      </a>
    );
  }

  if (product.status === "coming-soon") {
    return (
      <Link to="/contact" className={cardClasses}>
        {content}
      </Link>
    );
  }

  return (
    <Link to="/contact" className={cardClasses}>
      {content}
    </Link>
  );
}

export default function Store() {
  const [watchfacesOpen, setWatchfacesOpen] = useState(true);
  const [merchOpen, setMerchOpen] = useState(true);
  const [postersOpen, setPostersOpen] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-molten/20 border border-molten rounded-full text-molten text-sm font-bold uppercase tracking-wide">
            Official Merchandise
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            The Win The Hour!™ <span className="text-molten">Store</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Watchfaces, apparel, and prints designed for those who take their time seriously.
            Represent the movement.
          </p>
        </div>
      </section>

      {/* Watchface Collections */}
      <section className="py-20 px-6 bg-slate">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setWatchfacesOpen(!watchfacesOpen)}
            className="flex items-center gap-4 mb-12 w-full text-left cursor-pointer"
          >
            <div className="w-12 h-12 border-2 border-molten rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold">Watchface Collections</h2>
              <p className="text-white/60">Digital watchfaces for Apple Watch and compatible devices</p>
            </div>
            <svg
              className={`w-6 h-6 text-white/60 shrink-0 transition-transform duration-300 ${watchfacesOpen ? "" : "-rotate-90"}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {watchfacesOpen && (
            <div>
              {groupByEdition(watchfaces).map((group) => (
                <ProductSubGroup
                  key={group.edition}
                  edition={group.edition}
                  editionColor={group.editionColor}
                  products={group.products}
                  columns={4}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Merch & Apparel */}
      <section className="py-20 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setMerchOpen(!merchOpen)}
            className="flex items-center gap-4 mb-12 w-full text-left cursor-pointer"
          >
            <div className="w-12 h-12 border-2 border-molten rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold">Merch & Apparel</h2>
              <p className="text-white/60">Wear the movement. Premium quality, limited runs.</p>
            </div>
            <svg
              className={`w-6 h-6 text-white/60 shrink-0 transition-transform duration-300 ${merchOpen ? "" : "-rotate-90"}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {merchOpen && (
            <div>
              {groupByEdition(merch).map((group) => (
                <ProductSubGroup
                  key={group.edition}
                  edition={group.edition}
                  editionColor={group.editionColor}
                  products={group.products}
                  columns={3}
                />
              ))}

              {/* Placeholder card for future merch */}
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate rounded-3xl border-2 border-steel border-dashed flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-16 h-16 mb-6 border-2 border-steel rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-steel" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white/50">More Coming</h3>
                  <p className="text-white/40 text-sm">T-shirts, mugs, journals, and more dropping soon.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Posters & Prints */}
      <section className="py-20 px-6 bg-slate">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setPostersOpen(!postersOpen)}
            className="flex items-center gap-4 mb-12 w-full text-left cursor-pointer"
          >
            <div className="w-12 h-12 border-2 border-molten rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-molten" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold">Posters & Prints</h2>
              <p className="text-white/60">Statement pieces for your office, studio, or training space</p>
            </div>
            <svg
              className={`w-6 h-6 text-white/60 shrink-0 transition-transform duration-300 ${postersOpen ? "" : "-rotate-90"}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {postersOpen && (
            <div>
              {groupByEdition(posters).map((group) => (
                <ProductSubGroup
                  key={group.edition}
                  edition={group.edition}
                  editionColor={group.editionColor}
                  products={group.products}
                  columns={3}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-charcoal text-center border-t border-steel">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Want something custom?
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Custom watchface designs, bulk merch orders, or brand collaborations — let's talk.
          </p>
          <Link
            to="/contact"
            className="bg-molten text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-molten/50 hover:bg-molten-dark transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center whitespace-nowrap overflow-hidden"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
