// app/components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Transformação Digital
              <span className="text-primary block mt-2">
                para o Setor Jurídico
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Automatize processos, ganhe eficiência e tome decisões baseadas em
              dados com nossas soluções jurídicas inteligentes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Conheça Nossas Soluções
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Cases de Sucesso
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {[
                { value: "98%", label: "Satisfação dos Clientes" },
                { value: "+500", label: "Processos Automatizados" },
                { value: "-70%", label: "Redução de Tempo" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Animation Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl">
              {/* Placeholder para futura animação ou imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  {/* Aqui podemos adicionar uma animação Lottie ou imagem posteriormente */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
