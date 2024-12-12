// app/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

const footerLinks = {
  servicos: [
    { name: "Controladoria Jurídica", href: "#" },
    { name: "Desenvolvimento de Sistemas", href: "#" },
    { name: "Automação de Processos", href: "#" },
    { name: "Consultoria em Inovação", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "#" },
    { name: "Cases de Sucesso", href: "#" },
    { name: "Carreira", href: "#" },
    { name: "Blog", href: "#" },
  ],
  contato: [
    { name: "contato@orpheo.com.br", href: "mailto:contato@orpheo.com.br" },
    { name: "(11) 3456-7890", href: "tel:+551134567890" },
    { name: "São Paulo, SP", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Orpheo</h2>
            <p className="text-slate-600 max-w-xs">
              Transformando o setor jurídico através da tecnologia e inovação.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-slate-400 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900">
              Serviços
            </h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900">
              Empresa
            </h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900">
              Contato
            </h3>
            <ul className="space-y-2">
              {footerLinks.contato.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Orpheo Jurídico. Todos os direitos
              reservados.
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-600 hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg transition-colors"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
