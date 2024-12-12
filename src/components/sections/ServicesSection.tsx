// app/components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Scale, Workflow, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Scale,
    title: "Controladoria Jurídica",
    description:
      "Gestão estratégica de departamentos jurídicos com KPIs, relatórios automatizados e análise preditiva para tomada de decisões.",
    benefits: [
      "Dashboard personalizado",
      "Métricas em tempo real",
      "Análise de custos",
      "Gestão de prazos",
    ],
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas",
    description:
      "Soluções tecnológicas sob medida para otimizar processos jurídicos, integrando diferentes áreas e automatizando tarefas repetitivas.",
    benefits: [
      "Sistemas personalizados",
      "Integração com APIs",
      "Interface intuitiva",
      "Suporte contínuo",
    ],
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description:
      "Automatização inteligente de fluxos de trabalho jurídicos, reduzindo tempo operacional e minimizando erros humanos.",
    benefits: [
      "Workflows automatizados",
      "Redução de erros",
      "Maior produtividade",
      "Processos padronizados",
    ],
  },
  {
    icon: Lightbulb,
    title: "Consultoria em Inovação Jurídica",
    description:
      "Assessoria estratégica para transformação digital de departamentos jurídicos, implementando as melhores práticas do mercado.",
    benefits: [
      "Diagnóstico tecnológico",
      "Planejamento estratégico",
      "Gestão da mudança",
      "Treinamento de equipes",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="group relative overflow-hidden p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />

        <div className="relative">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <Icon className="w-6 h-6 text-primary" />
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {service.title}
          </h3>

          <p className="text-slate-600 mb-6">{service.description}</p>

          <ul className="space-y-2">
            {service.benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-slate-600"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50">
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
            Nossas Soluções Jurídicas
          </h2>
          <p className="text-lg text-slate-600">
            Combinamos expertise jurídica com tecnologia de ponta para
            transformar a forma como escritórios e departamentos jurídicos
            trabalham.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
