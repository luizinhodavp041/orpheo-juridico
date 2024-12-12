// app/components/sections/AboutSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Building2, ChartBar } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Users,
    value: 500,
    symbol: "+",
    label: "Clientes Atendidos",
    description:
      "Escritórios e departamentos jurídicos confiam em nossas soluções",
  },
  {
    icon: Building2,
    value: 50,
    symbol: "+",
    label: "Grandes Empresas",
    description:
      "Entre as maiores empresas do Brasil utilizam nossa tecnologia",
  },
  {
    icon: ChartBar,
    value: 1000000,
    symbol: "+",
    label: "Processos Otimizados",
    description: "Processos jurídicos automatizados e gerenciados",
  },
  {
    icon: Award,
    value: 98,
    symbol: "%",
    label: "Satisfação",
    description: "Taxa de satisfação entre nossos clientes",
  },
];

function AnimatedCounter({ value, symbol }: { value: number; symbol: string }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      const duration = 2000; // 2 segundos
      const increment = value / (duration / 16); // 60fps

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue > value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(startValue));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={nodeRef} className="text-4xl font-bold text-secondary">
      {displayValue.toLocaleString()}
      {symbol}
    </span>
  );
}

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white/10 backdrop-blur-sm border-white/20">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        <AnimatedCounter value={stat.value} symbol={stat.symbol} />
        <h3 className="text-lg font-semibold text-white mt-2">{stat.label}</h3>
        <p className="text-sm text-white/80 mt-2">{stat.description}</p>
      </Card>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Excelência em Tecnologia Jurídica
          </h2>
          <p className="text-lg text-white/80">
            Há mais de uma década, a Orpheo Jurídico lidera a transformação
            digital no setor jurídico, entregando soluções inovadoras e
            resultados expressivos.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Nossa História
              </h3>
              <p className="text-white/80 mb-4">
                Fundada por especialistas em direito e tecnologia, a Orpheo
                nasceu com a missão de modernizar o setor jurídico brasileiro
                através de soluções tecnológicas inovadoras e eficientes.
              </p>
              <p className="text-white/80">
                Hoje, somos referência em desenvolvimento de sistemas jurídicos
                e automação de processos, ajudando escritórios e departamentos
                jurídicos a alcançarem seu máximo potencial.
              </p>
            </div>
            <div className="relative h-64 bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              {/* Placeholder para futura imagem */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
