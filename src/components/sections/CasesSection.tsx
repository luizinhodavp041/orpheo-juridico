// app/components/sections/CasesSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const cases = [
  {
    client: "Escritório Martinez & Associados",
    logo: "/placeholder-logo.png", // Placeholder para futuros logos
    testimonial:
      "A automação implementada pela Orpheo reduziu nosso tempo de processamento de documentos em 75%, permitindo que nossa equipe foque em atividades estratégicas.",
    author: "Dr. Ricardo Martinez",
    role: "Sócio Diretor",
    metrics: [
      { label: "Redução de tempo", value: "75%" },
      { label: "Economia anual", value: "R$ 500mil" },
      { label: "Processos automatizados", value: "1.500+" },
    ],
  },
  {
    client: "Departamento Jurídico Nova Energia S.A.",
    logo: "/placeholder-logo.png",
    testimonial:
      "O sistema de controladoria desenvolvido pela Orpheo transformou nossa gestão jurídica. Hoje temos visibilidade total e tomamos decisões baseadas em dados.",
    author: "Dra. Amanda Silva",
    role: "Gerente Jurídica",
    metrics: [
      { label: "Aumento de produtividade", value: "60%" },
      { label: "Redução de custos", value: "45%" },
      { label: "Processos otimizados", value: "3.000+" },
    ],
  },
  {
    client: "Global Tech Advocacia",
    logo: "/placeholder-logo.png",
    testimonial:
      "A parceria com a Orpheo nos permitiu escalar nossas operações sem perder qualidade. O sistema customizado atende perfeitamente nossas necessidades.",
    author: "Dr. Felipe Santos",
    role: "Coordenador de Inovação",
    metrics: [
      { label: "Crescimento em casos", value: "200%" },
      { label: "Satisfação dos clientes", value: "98%" },
      { label: "ROI no primeiro ano", value: "320%" },
    ],
  },
];

export function CasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-slate-600">
            Conheça algumas das histórias de transformação digital que ajudamos
            a construir.
          </p>
        </motion.div>

        {/* Cases Carousel */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Testimonial Side */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {cases[activeIndex].client}
                    </h3>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/20" />
                    <p className="text-lg text-slate-600 italic mb-6 relative z-10">
                      "{cases[activeIndex].testimonial}"
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="font-semibold text-slate-900">
                      {cases[activeIndex].author}
                    </p>
                    <p className="text-sm text-slate-600">
                      {cases[activeIndex].role}
                    </p>
                  </div>
                </div>

                {/* Metrics Side */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    Resultados Alcançados
                  </h4>

                  {cases[activeIndex].metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-4 rounded-lg shadow-sm border border-slate-100"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-600">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevCase}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextCase}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
