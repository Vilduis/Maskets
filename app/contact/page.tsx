"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contacto@maskets.com",
      link: "mailto:contacto@maskets.com",
      description: "Escríbenos cuando quieras",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Lun - Vie, 9am - 6pm",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Ciudad, País",
      link: "#",
      description: "Visítanos en nuestras oficinas",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 text-sm text-white">
            Contáctanos
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Trabajemos juntos
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos listos para ayudarte a hacer crecer tu negocio. Envíanos un
            mensaje y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Badge variant="outline" className="mb-4">
                  Información
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Información de contacto
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Puedes contactarnos a través de cualquiera de estos medios.
                  Estamos aquí para ayudarte.
                </p>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card
                      key={index}
                      className="group hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                    >
                      <CardContent className="p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>
                            <a
                              href={info.link}
                              className="text-sm sm:text-base text-secondary font-medium hover:text-primary transition-colors block mb-1 wrap-break-word"
                            >
                              {info.content}
                            </a>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Additional Info Card */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        Tiempo de respuesta
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Normalmente respondemos en menos de 24 horas durante
                        días hábiles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-2 hover:border-accent transition-all duration-300 shadow-lg">
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                        Envíanos un mensaje
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Completa el formulario y nos pondremos en contacto
                      </p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          Nombre completo
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full h-11"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Teléfono{" "}
                        <span className="text-muted-foreground">
                          (opcional)
                        </span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Mensaje
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Cuéntanos sobre tu proyecto, ideas o preguntas..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[140px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto group"
                    >
                      Enviar mensaje
                      <Send className="size-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
