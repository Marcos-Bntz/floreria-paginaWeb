import React, { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/Button";
import { ChevronDown, ChevronUp, HelpCircle, Search } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    // Pedidos y Envíos
    {
      id: 1,
      question: "¿Cuánto tiempo duran las flores frescas?",
      answer:
        "Nuestras flores frescas duran entre 5-7 días con el cuidado adecuado. Incluimos instrucciones detalladas de cuidado con cada pedido para maximizar la duración de tus flores.",
      category: "pedidos",
    },
    {
      id: 2,
      question: "¿Hacen entregas el mismo día?",
      answer:
        "Sí, ofrecemos entrega el mismo día para pedidos realizados antes de las 2:00 PM en el área de San Francisco. Para otras áreas, consulta con nuestro equipo.",
      category: "pedidos",
    },
    {
      id: 3,
      question: "¿Cuál es el costo de envío?",
      answer:
        "El envío estándar cuesta $15. Envío gratuito en pedidos superiores a $100. Para entregas especiales o fuera del área, consulta con nosotros.",
      category: "pedidos",
    },
    {
      id: 4,
      question: "¿Puedo programar una entrega para una fecha específica?",
      answer:
        "¡Por supuesto! Puedes programar entregas hasta con 30 días de anticipación. Especialmente útil para eventos y celebraciones importantes.",
      category: "pedidos",
    },

    // Productos y Personalización
    {
      id: 5,
      question: "¿Puedo personalizar mi arreglo floral?",
      answer:
        "¡Absolutamente! Nos encanta crear arreglos personalizados. Contacta con nosotros para discutir tus ideas, colores preferidos, flores específicas o el estilo que deseas.",
      category: "productos",
    },
    {
      id: 6,
      question: "¿Qué tipos de flores usan?",
      answer:
        "Trabajamos con una amplia variedad de flores de temporada y clásicas: rosas, tulipanes, peonías, lirios, gerberas, crisantemos y muchas más. Siempre seleccionamos las mejores flores disponibles.",
      category: "productos",
    },
    {
      id: 7,
      question: "¿Ofrecen plantas de interior?",
      answer:
        "Sí, tenemos una selección de plantas de interior como orquídeas, suculentas, plantas de aire y más. Todas vienen con instrucciones de cuidado.",
      category: "productos",
    },
    {
      id: 8,
      question: "¿Puedo elegir los colores de mi arreglo?",
      answer:
        "¡Por supuesto! Puedes especificar tus colores preferidos al hacer tu pedido. Nuestros diseñadores crearán un arreglo que combine perfectamente con tu visión.",
      category: "productos",
    },

    // Eventos y Celebraciones
    {
      id: 9,
      question: "¿Hacen arreglos para bodas?",
      answer:
        "¡Sí! Especializamos en arreglos para bodas. Ofrecemos ramos de novia, decoración de iglesia, centros de mesa y más. Agenda una consulta gratuita.",
      category: "eventos",
    },
    {
      id: 10,
      question: "¿Pueden decorar eventos corporativos?",
      answer:
        "Absolutamente. Ofrecemos servicios de decoración floral para eventos corporativos, inauguraciones, conferencias y más. Contacta con nosotros para un presupuesto personalizado.",
      category: "eventos",
    },
    {
      id: 11,
      question: "¿Con cuánta anticipación debo reservar para un evento?",
      answer:
        "Recomendamos reservar con al menos 2-3 semanas de anticipación para eventos grandes. Para eventos pequeños, 1 semana es suficiente.",
      category: "eventos",
    },
    {
      id: 12,
      question: "¿Ofrecen servicios de instalación?",
      answer:
        "Sí, ofrecemos servicios completos de instalación para eventos. Nuestro equipo se encarga de todo, desde el diseño hasta la instalación y limpieza.",
      category: "eventos",
    },

    // Devoluciones y Garantías
    {
      id: 13,
      question: "¿Aceptan devoluciones?",
      answer:
        "Si no estás satisfecho con tu pedido, contáctanos dentro de las 24 horas y haremos lo posible por solucionarlo. Ofrecemos reemplazos o reembolsos según el caso.",
      category: "devoluciones",
    },
    {
      id: 14,
      question: "¿Qué pasa si las flores llegan dañadas?",
      answer:
        "Si las flores llegan dañadas, toma una foto y contáctanos inmediatamente. Te enviaremos un reemplazo sin costo adicional.",
      category: "devoluciones",
    },
    {
      id: 15,
      question: "¿Ofrecen garantía en sus productos?",
      answer:
        "Sí, garantizamos la frescura de nuestras flores. Si no estás satisfecho, contacta con nosotros y resolveremos el problema.",
      category: "devoluciones",
    },

    // Cuidado y Mantenimiento
    {
      id: 16,
      question: "¿Cómo debo cuidar mis flores?",
      answer:
        "Cambia el agua cada 2-3 días, corta los tallos en diagonal, mantén las flores lejos de la luz directa y el calor. Incluimos instrucciones detalladas con cada pedido.",
      category: "cuidado",
    },
    {
      id: 17,
      question: "¿Las flores son orgánicas?",
      answer:
        "Trabajamos con proveedores que cultivan flores de manera sostenible. Muchas de nuestras flores son orgánicas o cultivadas sin pesticidas dañinos.",
      category: "cuidado",
    },
    {
      id: 18,
      question: "¿Puedo preservar mis flores?",
      answer:
        "Sí, ofrecemos servicios de preservación floral. Las flores preservadas pueden durar años. Consulta con nosotros para más detalles.",
      category: "cuidado",
    },
  ];

  const categories = [
    { id: "todos", name: "Todas las preguntas" },
    { id: "pedidos", name: "Pedidos y Envíos" },
    { id: "productos", name: "Productos y Personalización" },
    { id: "eventos", name: "Eventos y Celebraciones" },
    { id: "devoluciones", name: "Devoluciones y Garantías" },
    { id: "cuidado", name: "Cuidado y Mantenimiento" },
  ];

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "todos" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestros
              productos, servicios y políticas. Si no encuentras lo que buscas,
              no dudes en contactarnos.
            </p>
          </div>
        </div>
      </section>

      {/* Búsqueda y Filtros */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Barra de búsqueda */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar preguntas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary bg-bg-primary text-text-primary"
              />
            </div>

            {/* Filtros por categoría */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-text-primary hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No se encontraron resultados
                </h3>
                <p className="text-text-secondary">
                  Intenta con otros términos de búsqueda o contacta con nosotros
                  directamente.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-bg-primary dark:bg-bg-secondary border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <h3 className="font-semibold text-text-primary pr-4">
                        {faq.question}
                      </h3>
                      {expandedItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </button>

                    {expandedItems.includes(faq.id) && (
                      <div className="px-6 pb-4">
                        <p className="text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bg-accent dark:bg-bg-secondary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Nuestro equipo está aquí para ayudarte. Contáctanos y te
            responderemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Contactar Soporte
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
