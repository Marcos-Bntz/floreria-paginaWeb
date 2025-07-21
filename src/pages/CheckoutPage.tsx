import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CreditCard, Truck, CheckCircle, Lock, ArrowLeft } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/Button";
import { useCartStore } from "../store/cartStore";
import { Product } from "../types";

interface CheckoutItem {
  product: Product;
  quantity: number;
}

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCartStore();

  // Obtener datos del estado de navegación (compra directa)
  const directPurchase = location.state?.directPurchase as CheckoutItem | null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "card",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Calcular totales
  const items = directPurchase ? [directPurchase] : [];
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const shipping = subtotal > 1500 ? 0 : 150;
  const total = subtotal + shipping;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simular procesamiento de pago
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Limpiar carrito si no es compra directa
    if (!directPurchase) {
      clearCart();
    }

    setOrderSuccess(true);
    setIsProcessing(false);
  };

  if (orderSuccess) {
    return (
      <Layout>
        <div className="container-custom py-16 text-center">
          <div className="max-w-md mx-auto">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
            <h1 className="font-heading text-3xl font-bold text-text-primary mb-4">
              ¡Orden confirmada!
            </h1>
            <p className="text-text-secondary mb-8">
              Tu pedido ha sido procesado exitosamente. Recibirás un email de
              confirmación con los detalles de tu compra.
            </p>
            <div className="space-y-3">
              <Button
                variant="primary"
                onClick={() => navigate("/")}
                className="w-full"
              >
                Volver al inicio
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/catalogo")}
                className="w-full"
              >
                Seguir comprando
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-text-secondary hover:text-primary mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver
          </button>
          <h1 className="font-heading text-3xl font-bold text-text-primary">
            Finalizar compra
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información personal */}
              <div className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h2 className="font-heading text-xl font-semibold text-text-primary mb-4">
                  Información personal
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Dirección de envío */}
              <div className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h2 className="font-heading text-xl font-semibold text-text-primary mb-4">
                  Dirección de envío
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Dirección *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Calle, número, colonia"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Ciudad *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Código postal *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-bg-primary text-text-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Método de pago */}
              <div className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h2 className="font-heading text-xl font-semibold text-text-primary mb-4">
                  Método de pago
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer hover:bg-accent dark:hover:bg-accent/20">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <CreditCard
                      size={20}
                      className="mr-3 text-text-secondary"
                    />
                    <span className="font-medium text-text-primary">
                      Tarjeta de crédito/débito
                    </span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer hover:bg-accent dark:hover:bg-accent/20">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <Truck size={20} className="mr-3 text-text-secondary" />
                    <span className="font-medium text-text-primary">
                      Pago contra entrega
                    </span>
                  </label>
                </div>
              </div>

              {/* Botón de pago */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isProcessing}
                icon={isProcessing ? undefined : <Lock size={18} />}
              >
                {isProcessing ? "Procesando pago..." : "Pagar ahora"}
              </Button>
            </form>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:pl-8">
            <div className="bg-bg-primary dark:bg-bg-secondary p-6 rounded-lg border border-gray-200 dark:border-gray-700 sticky top-8">
              <h2 className="font-heading text-xl font-semibold text-text-primary mb-6">
                Resumen del pedido
              </h2>

              {/* Productos */}
              <div className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-text-primary">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold text-text-primary">
                      $
                      {(item.product.price * item.quantity).toLocaleString(
                        "es-MX",
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totales */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span className="font-medium text-text-primary">
                    ${subtotal.toLocaleString("es-MX")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Envío</span>
                  <span className="font-medium text-text-primary">
                    {shipping === 0
                      ? "Gratis"
                      : `$${shipping.toLocaleString("es-MX")}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t border-gray-200 dark:border-gray-700 pt-2">
                  <span className="text-text-primary">Total</span>
                  <span className="text-text-primary">
                    ${total.toLocaleString("es-MX")}
                  </span>
                </div>
              </div>

              {/* Información adicional */}
              <div className="mt-6 p-4 bg-accent dark:bg-accent/20 rounded-lg">
                <div className="flex items-start mb-3">
                  <Truck size={20} className="text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-text-primary">
                      Envío seguro
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Entrega en 24-48 horas
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-text-primary">
                      Garantía de frescura
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Flores frescas garantizadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
