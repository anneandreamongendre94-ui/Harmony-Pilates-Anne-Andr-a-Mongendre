import { Share2, Mail } from "lucide-react";

export function Footer() {
  const links = [
    { name: "Philosophy", href: "#" },
    { name: "Reformer", href: "#" },
    { name: "Mat Pilates", href: "#" },
    { name: "Studio Policies", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-[#FDFCF8] border-t border-stone-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-serif italic text-primary-container">Harmony Pilates</div>
          <p className="font-serif text-sm tracking-wide text-stone-600 text-center md:text-left max-w-xs">
            © 2024 Harmony Pilates. All rights reserved. Restoration through movement.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-500 font-serif text-sm tracking-wide hover:text-primary-container transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-primary hover:opacity-100 opacity-70 transition-opacity">
            <Share2 size={20} />
          </a>
          <a href="#" className="text-primary hover:opacity-100 opacity-70 transition-opacity">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
