import React from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ChevronRight, ArrowLeft } from "lucide-react";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/Button";
import { useCartStore } from "../store/cartStore";
import { cn } from "../utils/cn";

export const CartPage: React.FC = () => {
  const {
    items,
    subtotal,
    shipping,
    total,
    removeItem,
    updateQuantity,
    clearCart,
    calculateTotals,
  } = useCartStore();

  React.useEffect(() => {
    calculateTotals();
  }, [calculateTotals]);

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                <ShoppingBag size={40} className="text-primary" />
              </div>
            </div>
            <h1 className="font-heading text-2xl font-bold text-gray-800 mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-gray-600 mb-8">
              Parece que aún no has agregado productos a tu carrito de compras.
            </p>
            <Link to="/catalogo">
              <Button
                variant="primary"
                className="w-full"
                icon={<ArrowLeft size={16} />}
              >
                Explorar el catálogo
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-16 pt-32 md:pt-40 lg:pt-44">
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Carrito de Compras
          </h1>
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">
              Inicio
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span>Carrito</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="font-medium text-gray-800">
                  Productos ({items.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-error flex items-center"
                >
                  <Trash2 size={14} className="mr-1" />
                  Vaciar carrito
                </button>
              </div>

              <div className="divide-y divide-gray-100">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-4 flex flex-col sm:flex-row"
                  >
                    {/* Imagen */}
                    <div className="w-full sm:w-20 h-20 flex-shrink-0 mb-4 sm:mb-0">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>

                    {/* Información */}
                    <div className="flex-grow sm:ml-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                        <Link
                          to={`/producto/${item.product.id}`}
                          className="font-medium text-gray-800 hover:text-primary"
                        >
                          {item.product.name}
                        </Link>
                        <span className="font-heading font-semibold text-gray-800 mt-1 sm:mt-0">
                          ${item.product.price.toLocaleString("es-MX")}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <label className="text-sm text-gray-500">
                            Cantidad:
                          </label>
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.product.id,
                                parseInt(e.target.value),
                              )
                            }
                            className="border-gray-200 rounded-md text-sm p-1"
                          >
                            {[
                              ...Array(
                                Math.min(10, item.product.stockQuantity),
                              ),
                            ].map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex items-center space-x-4">
                          <span className="text-gray-600 text-sm">
                            Subtotal:{" "}
                            <span className="font-medium">
                              $
                              {(
                                item.product.price * item.quantity
                              ).toLocaleString("es-MX")}
                            </span>
                          </span>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-gray-400 hover:text-error transition-colors"
                            aria-label={`Eliminar ${item.product.name} del carrito`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link
                to="/catalogo"
                className="text-primary hover:underline flex items-center"
              >
                <ArrowLeft size={16} className="mr-1" />
                Continuar comprando
              </Link>
            </div>
          </div>

          {/* Resumen */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
              <div className="p-4 border-b border-gray-100">
                <h2 className="font-medium text-gray-800">Resumen de compra</h2>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    ${subtotal.toLocaleString("es-MX")}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span
                    className={cn(
                      "font-medium",
                      shipping === 0 ? "text-success" : "",
                    )}
                  >
                    {shipping === 0
                      ? "Gratis"
                      : `$${shipping.toLocaleString("es-MX")}`}
                  </span>
                </div>

                {shipping === 0 && (
                  <div className="text-xs text-success bg-success/10 p-2 rounded">
                    ¡Felicidades! Tu pedido califica para envío gratis.
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between font-heading text-lg font-semibold text-gray-800">
                    <span>Total</span>
                    <span>${total.toLocaleString("es-MX")}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Impuestos incluidos
                  </p>
                </div>

                <Link to="/checkout">
                  <Button variant="primary" className="w-full mt-4">
                    Proceder al pago
                  </Button>
                </Link>

                <div className="text-xs text-gray-500 text-center mt-2">
                  Aceptamos tarjetas de crédito, débito y PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
