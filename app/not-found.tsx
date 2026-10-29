import Link from "next/link";
import { FaCompass, FaHome, FaSpa, FaArrowRight } from "react-icons/fa";
import site from "@/data/index";

export default function NotFound() {
  const data = site.notFound;
  const { code, badge, title, description, buttons, quickLinksSection } = data;

  return (
    <main>
      {/* Page container */}
      <section className="py-20 sm:py-28 bg-[#FFF5F5] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C46D77]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[850px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge container */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-rose-50 border-2 border-[#C46D77]/30 flex items-center justify-center text-[#C46D77] text-4xl sm:text-5xl shadow-lg shadow-[#C46D77]/10 mb-6">
            <FaCompass />
          </div>

          {/* Error code */}
          <div className="font-serif text-7xl sm:text-9xl font-black text-gray-900 tracking-tight leading-none select-none">
            {code.slice(0, 1)}<span className="text-[#C46D77]">{code.slice(1, 2)}</span>{code.slice(2)}
          </div>

          {/* Badge title */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-[#A84E59] text-xs font-bold uppercase tracking-widest mt-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C46D77]" />
            <span>{badge}</span>
          </div>

          {/* Headline text */}
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-4">
            {title}
          </h2>

          {/* Description text */}
          <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto mt-3 leading-relaxed font-sans">
            {description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {buttons?.home && (
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C46D77] hover:bg-[#A84E59] text-white font-bold text-sm transition-all shadow-md shadow-[#C46D77]/20"
              >
                <FaHome className="text-base" />
                <span>{buttons.home.text}</span>
              </Link>
            )}
            {buttons?.services && (
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-rose-50 text-gray-900 border border-gray-300 font-bold text-sm transition-all shadow-xs"
              >
                <FaSpa className="text-base text-[#C46D77]" />
                <span>{buttons.services.text}</span>
              </Link>
            )}
          </div>

          {/* Quick links */}
          {quickLinksSection && quickLinksSection.links && (
            <div className="mt-14 pt-10 border-t border-gray-200/80 max-w-xl mx-auto">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                {quickLinksSection.title}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                {quickLinksSection.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href.startsWith("/") && !link.href.startsWith("/#") && link.href !== "/" ? `/#${link.href.replace("/", "")}` : link.href}
                    className="p-3.5 rounded-xl bg-white hover:bg-rose-50 border border-gray-200 hover:border-[#C46D77]/40 text-xs font-bold text-gray-900 hover:text-[#C46D77] transition-all flex items-center justify-between shadow-xs"
                  >
                    <span>{link.title}</span>
                    <FaArrowRight className="text-xs text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
