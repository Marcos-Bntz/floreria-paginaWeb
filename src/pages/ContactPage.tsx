import React, { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Resetear el estado después de 3 segundos
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "123 Calle de las Flores\nSan Francisco, CA 94102",
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "hola@lotus.com",
      link: "mailto:hola@lotus.com",
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lunes - Sábado: 9:00 AM - 7:00 PM\nDomingo: 10:00 AM - 4:00 PM",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Contáctanos
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Estamos aquí para ayudarte a crear el arreglo floral perfecto. No
              dudes en contactarnos para cualquier consulta o pedido especial.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-text-secondary hover:text-primary transition-colors"
                          target={
                            info.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.content.split("\n").map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </a>
                      ) : (
                        <div className="text-text-secondary">
                          {info.content.split("\n").map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mapa */}
              <div className="mt-8">
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
                  Ubicación
                </h3>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-text-secondary">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                    <p>Mapa interactivo</p>
                    <p className="text-sm">
                      123 Calle de las Flores, San Francisco
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8">
                Envíanos un mensaje
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-700 dark:text-green-300">
                      ¡Mensaje enviado exitosamente! Te responderemos pronto.
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-red-700 dark:text-red-300">
                      Hubo un error al enviar el mensaje. Por favor, intenta
                      nuevamente.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary bg-bg-primary text-text-primary"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary bg-bg-primary text-text-primary"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary bg-bg-primary text-text-primary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary bg-bg-primary text-text-primary"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="consulta">Consulta general</option>
                      <option value="pedido">Pedido especial</option>
                      <option value="evento">Evento o celebración</option>
                      <option value="devolucion">Devolución o cambio</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary bg-bg-primary text-text-primary resize-none"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                  icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-bg-accent dark:bg-bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              ¿Tienes alguna pregunta? Aquí encontrarás las respuestas más
              comunes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                ¿Cuánto tiempo duran las flores?
              </h3>
              <p className="text-text-secondary">
                Nuestras flores frescas duran entre 5-7 días con el cuidado
                adecuado. Incluimos instrucciones de cuidado con cada pedido.
              </p>
            </div>

            <div className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                ¿Hacen entregas el mismo día?
              </h3>
              <p className="text-text-secondary">
                Sí, ofrecemos entrega el mismo día para pedidos realizados antes
                de las 2:00 PM en el área de San Francisco.
              </p>
            </div>

            <div className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                ¿Puedo personalizar mi arreglo?
              </h3>
              <p className="text-text-secondary">
                ¡Absolutamente! Nos encanta crear arreglos personalizados.
                Contacta con nosotros para discutir tus ideas.
              </p>
            </div>

            <div className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                ¿Aceptan devoluciones?
              </h3>
              <p className="text-text-secondary">
                Si no estás satisfecho con tu pedido, contáctanos dentro de las
                24 horas y haremos lo posible por solucionarlo.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Ver todas las preguntas
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
