"use client";

import { useEffect, useState } from "react";
import { useScrolled } from "../../shared/hooks/useScrolled.tsx";
import { IoClose, IoMenuOutline } from "react-icons/io5";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#epiloge", label: "Epílogo" },
  { href: "#gallery", label: "Galeria" },
  { href: "#contact", label: "Contato" },
];
export default function Navbar() {
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);

  const textBase = scrolled ? " py-4" : " py-9 ";

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all w-[100vw]",
        open
          ? "bg-white/95 shadow"
          : scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}>
      <nav className="mx-auto flex container items-center justify-between px-4  sm:px-6 lg:px-8">
        <a
          href="#"
          className={cn(
            "transition-all delay-50 duration-200 ease-in-out text-lg font-regular tracking-widest no-underline  ",
            textBase
          )}>
          Home
        </a>

        {/* Links desktop */}
        <ul className="hidden gap-28 md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "transition-all ease-in-out  font-regular tracking-widest"
                )}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          className="md:hidden transition-all ease-in-out inline-flex items-center justify-center rounded-md color-[#020A17] "
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">Abrir menu</span>
          {open ? (
            <IoClose color="#020A17" size={28} />
          ) : (
            <IoMenuOutline color="#020A17" size={28} />
          )}
        </button>
      </nav>

      {/* Painel mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden origin-top transition-all",
          open
            ? "pointer-events-auto opacity-100 scale-y-100 flex"
            : "pointer-events-none opacity-0 scale-y-95 hidden"
        )}>
        <div className="container px-4 pb-6 sm:px-6 lg:px-8">
          <div className="h-[1px] w-full bg-[#D3D7DA]" />
          <ul className="space-y-3 py-2">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-lg  tracking-widest text-[#311910] hover:bg-[#311910]/5">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
