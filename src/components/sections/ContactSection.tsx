// app/components/sections/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form data:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-white/80">
            Entre em contato conosco para saber como podemos ajudar sua empresa
            na jornada de transformação digital.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {[
              {
                icon: Phone,
                title: "Telefone",
                info: "(11) 3456-7890",
                description: "Seg-Sex, 9h às 18h",
              },
              {
                icon: Mail,
                title: "E-mail",
                info: "contato@orpheo.com.br",
                description: "Resposta em até 24h",
              },
              {
                icon: MapPin,
                title: "Endereço",
                info: "São Paulo, SP",
                description: "Av. Paulista, 1000",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="rounded-full p-3 bg-white/20">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.info}</p>
                    <p className="text-sm text-white/60">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nome
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Telefone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Empresa
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/20 border-white/20 text-white placeholder:text-white/60 min-h-[120px]"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white hover:bg-white/90 text-primary"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
