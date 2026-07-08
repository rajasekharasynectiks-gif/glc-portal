import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, ChevronDown, ShoppingCart } from "lucide-react";
import Footer from "@/components/Footer";
import { SignInModal } from "@/components/auth/SignInModal";
import { HeroCarousel, slides } from "./HeroCarousel/HeroCarousel";

const logoUrl = new URL("../../images/logo.png.png", import.meta.url).href;
const playersClubUrl = new URL("../../images/iHipe.png", import.meta.url).href;

const PUBLIC_NAV = [
  { label: "Home", to: "/" },
  { label: "Apply for License", to: "/auth/register" },
  { label: "Renew License", to: "/licensing#renewals" },
  { label: "Application Status", to: "/app/applications" },
  { label: "Retailer Resources", to: "/documents" },
  { label: "Documents", to: "/documents" },
  { label: "FAQ", to: "/faq" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  
];

function PublicHeaderIntegrated() {
  const [open, setOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [bgImage, setBgImage] = useState(slides[0].image);

  return (
    <header className="relative z-40">
      {/* Wrapper that holds utility bar, nav and hero so the background can extend behind all three */}
      <div className="relative">
        {/* Background layer (will be shared by utility bar and hero) */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {/* subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none z-0" />

        {/* Top utility bar */}
        {/* Top utility bar */}
<div className="relative bg-[linear-gradient(180deg,#1d1714_0%,#0b0b0b_100%)] text-white">
  <div className="container-page flex h-[46px] items-center px-8">

    <div className="flex-1" />

    <div className="hidden items-center gap-4 lg:flex">

      {/* Latest Results */}
      <button className="inline-flex h-[42px] items-center gap-2 rounded-sm bg-[#5a87bb] px-5 text-[13px] font-bold tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
        <span>LATEST RESULTS</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {/* Main Links */}
      <div className="flex items-center gap-6 text-[13px] font-semibold">
        <a
          href="https://www.galottery.com/en-us/about-us.html"
          target="_blank"
          className="hover:underline whitespace-nowrap"
        >
          About Us
        </a>
        <a
          href="https://www.galottery.com/en-us/retailers.html"
          target="_blank"
          className="hover:underline whitespace-nowrap"
        >
          Retailers
        </a>
        <a
          href="https://www.galottery.com/en-us/coam.html"
          target="_blank"
          className="hover:underline whitespace-nowrap"
        >
          COAM
        </a>
        <a
          href="https://www.galottery.com/en-us/media-center.html"
          target="_blank"
          className="hover:underline whitespace-nowrap"
        >
          Press Center
        </a>
      </div>

      {/* Search */}
      <button
        type="button"
        className="inline-flex items-center gap-2 text-[13px] font-semibold text-white"
      >
        <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[linear-gradient(180deg,#f0a34b_0%,#d6692d_100%)]">
          <Search className="h-5 w-5" strokeWidth={2.6} />
        </span>

        <span>Search</span>
      </button>


{/* Players Club */}
<img
  src={playersClubUrl}
  alt="Players Club"
  className="h-[48px] w-[48px] object-contain shrink-0"
/>

      {/* Sign In */}
      <div className="relative flex flex-col items-center leading-none">
        <a
          href="/players/info"
          className="mb-1 text-[11px] font-semibold whitespace-nowrap"
        >
          What is Players Club?
        </a>

        <button
          type="button"
          onClick={() => setIsSignInOpen(true)}
          className="inline-flex h-[38px] w-[120px] items-center justify-center rounded-sm bg-[#5f8f3e] text-[15px] font-bold uppercase tracking-wide text-white"
        >
          SIGN IN
        </button>

        <SignInModal
          open={isSignInOpen}
          onClose={() => setIsSignInOpen(false)}
        />
      </div>

      {/* Register */}
      <div className="flex flex-col items-center leading-none">
        <span className="mb-1 text-[11px] font-semibold whitespace-nowrap">
          Don't have an account yet?
        </span>

        <Link
          to="/auth/register"
          className="inline-flex h-[38px] w-[120px] items-center justify-center rounded-sm bg-[#537fb0] text-[15px] font-bold uppercase tracking-wide text-white"
        >
          REGISTER
        </Link>
      </div>

      {/* Cart */}
      <a
        href="/cart"
        className="relative ml-1 flex items-center text-white"
        aria-label="Cart"
      >
        <ShoppingCart className="h-7 w-7" strokeWidth={2.2} />

        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#c23b3b] text-[9px] font-bold">
          0
        </span>
      </a>

    </div>
  </div>
</div>

        {/* Main navigation strip: solid white bar, sits above background */}
        <div className="relative bg-white border-b border-border">
          <div className="container-page flex items-center h-[68px] px-8 overflow-visible">
            <Link to="/" className="flex items-center gap-4 shrink-0 -mt-6 md:-mt-5 lg:-mt-5">
              <img
                src={logoUrl}
                alt="Georgia Lottery logo"
                className="block h-[99px] w-auto object-contain md:h-[96px] lg:h-[104px]"
              />
            </Link>

            <nav className="ml-4 hidden lg:flex items-center h-full">
              <ul className="flex items-center gap-7">
                {PUBLIC_NAV.map((n, index) => (
                  <li key={`${n.label}-${n.to}-${index}`}>
                    <Link to={n.to} className="text-[16px] font-semibold text-slate-900 hover:text-primary whitespace-nowrap">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>



            {/* Mobile menu toggle */}
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="ml-auto lg:hidden grid h-10 w-10 place-items-center rounded-md text-slate-900">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* thin orange divider line like GA Lottery */}
        <div className="h-1 bg-[#EE7B2D]" />

        {/* Hero slider area (transparent background; actual background is the absolute layer) */}
        <div className="relative w-full" style={{ ['--hero-height' as any]: '540px' }}>
          {/* Render the carousel; it will occupy the hero height so no extra spacer is required */}
          <HeroCarousel showContent={false} onActiveChange={(img) => setBgImage(img)} showSlides={true} />
        </div>
      </div>

      {/* Mobile nav drawer placed directly under nav */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page flex flex-col gap-2 py-3">
            {PUBLIC_NAV.map((n, index) => (
              <Link key={`${n.label}-${n.to}-${index}`} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 text-sm font-medium hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2">
              <button type="button" onClick={() => { setOpen(false); setIsSignInOpen(true); }} className="rounded-md border border-border px-4 py-2 text-sm">Sign in</button>
              <Link to="/auth/register" className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Register</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <PublicHeaderIntegrated />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

// ----- shared bits -----
export function Chip({ tone = "muted", children }: { tone?: "success"|"warning"|"info"|"error"|"muted"; children: React.ReactNode }) {
  const cls = { success: "chip-success", warning: "chip-warning", info: "chip-info", error: "chip-error", muted: "chip-muted" }[tone];
  return <span className={`${cls} inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`}>{children}</span>;
}

export function StatDot({ tone = "info" }: { tone?: "success"|"warning"|"info"|"error" }) {
  const c = { success: "bg-success", warning: "bg-warning", info: "bg-info", error: "bg-destructive" }[tone];
  return <span className={`inline-block h-2 w-2 rounded-full ${c}`} />;
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {it.to ? <Link to={it.to} className="hover:text-foreground">{it.label}</Link> : <span className="text-foreground">{it.label}</span>}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}
