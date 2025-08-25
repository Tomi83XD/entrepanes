import React, { useState, useEffect } from 'react';

// Datos de los productos (sin cambios)
const sandwichesDeMiga = [
  { id: 1, name: 'Jamón y Queso', description: 'Clásico jamón y queso', price: 2000, image: 'https://tumercaditovegano.com.ar/wp-content/uploads/2024/03/Sandwich-de-miga-jamon-y-queso-vegano-scaled.jpg' },
  { id: 2, name: 'Salame Y Queso', description: 'Clásico salame y queso', price: 2000, image: 'https://dcdn-us.mitiendanube.com/stores/004/823/838/products/descarga-2-52c0934cc46a90250817182173158410-1024-1024.jpg' },
  { id: 3, name: 'Miga de Ternera', description: 'Una ternera de 1° calidad y mayonesa', price: 3000, image: 'https://www.clarin.com/2022/12/06/yOnu4tCQx_2000x1500__1.jpg' },
  { id: 4, name: 'Vegetariano', description: 'Queso, lechuga, tomate y mayonesa', price: 2500, image: 'https://cocinerosargentinos.com/content/recipes/original/sandwiches-de-miga-livianitos.5165.jpg' },
  { id: 5, name: 'Miga de Pollo', description: 'Pollo desmenuzado, queso y mayonesa', price: 2500, image: 'https://www.rionegro.com.ar/wp-content/uploads/2021/05/sangg.jpg?w=920&h=517&crop=1' },
  { id: 6, name: 'Huevo', description: 'Clásico JyQ con huevo', price: 2200, image: 'https://ramalloclub.com/wp-content/uploads/2021/03/d70a1b10e302586782fe2ac9887fa84fo-scaled.jpg' },
  { id: 7, name: 'Primavera', description: 'Zanahoria, tomate, lechuga y queso', price: 2500, image: 'https://www.circuitogastronomico.com/wp-content/uploads/2022/12/armoniche-sand-jpeg.webp' },
  { id: 8, name: 'Mixto', description: 'Jamón, queso y tomate', price: 2300, image: 'https://ramalloclub.com/wp-content/uploads/2021/03/6740dc2132bf70bf6617d320c67241e7o-scaled.jpg' },
  { id: 9, name: 'Mini Sanguche clasico', description: 'Jamón Y queso', price: 1000, image: 'https://dcdn-us.mitiendanube.com/stores/001/147/470/products/sandiwch-miga-jamon-y-queso-a086902b80bddc799e17075120781205-640-0.jpg' },
];

const pebetes = [
  { id: 1, name: 'Clásico: JyQ', description: 'Jamón, queso y mayonesa', price: 2000, image: 'https://http2.mlstatic.com/D_NQ_NP_2X_983521-MLA83177866752_042025-F.webp' },
  { id: 2, name: 'Salame', description: 'Salame, queso y mayonesa', price: 2000, image: 'https://images.rappi.com.ar/products/1069222-1584565667732.jpg' },
  { id: 3, name: 'Completo', description: 'Jamón, queso, lechuga y tomate', price: 2300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfeuk8j2063xlzCQeNLg4OAa1jONmxSVJmw&s' },
  { id: 4, name: 'Ternera', description: 'Una ternera de 1° calidad y mayonesa', price: 2500, image: 'https://images.rappi.com.ar/restaurants_background/home-1625581095387.jpg?e=webp&d=200x200&q=50' },
];

// Componente para los botones de redes sociales
function SocialButtons() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
      <a
        href="https://www.instagram.com/entrepanes_vcp/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        aria-label="Síguenos en Instagram"
      >
        <img
          src="/img-ig.jpeg"
          alt="Instagram Icono"
          className="w-6 h-6"
        />
      </a>
      <a
        href="https://www.tiktok.com/@entrepanes_vcp"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        aria-label="Síguenos en TikTok"
      >
        <img
          src="/tiktok-ig.png"
          alt="TikTok Icono"
          className="w-6 h-6"
        />
      </a>
    </div>
  );
}

// Nuevo componente para el pop-up de notificación
function NotificationPopup({ message, onHide }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    <div className="fixed top-6 right-6 bg-green-500 text-white font-bold px-5 py-3 rounded-xl shadow-xl z-50 animate-slide-in-right select-none">
      {message}
    </div>
  );
}

function CatalogSection({ title, items, addToCart }) {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 py-16"
      aria-labelledby={`${title.toLowerCase().replace(/\s/g, '-')}-title`}
    >
      <h2
        id={`${title.toLowerCase().replace(/\s/g, '-')}-title`}
        className="text-4xl font-extrabold text-gray-900 mb-12 select-none"
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {items.map(({ id, name, description, price, image }) => (
          <article
            key={id}
            tabIndex={0}
            role="button"
            aria-pressed="false"
            onClick={() => addToCart({ id, name, price, image })}
            onKeyDown={(e) => { if (e.key === 'Enter') addToCart({ id, name, price, image }); }}
            className="bg-yellow-900/75 backdrop-blur-lg rounded-3xl shadow-lg p-6 flex flex-col cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-600 hover:shadow-xl transition-shadow"
          >
            <img
              src={image}
              alt={name}
              className="rounded-xl object-cover mb-4 h-40 w-full"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-yellow-200 mb-2 select-none">{name}</h3>
            <p className="text-yellow-100 flex-grow">{description}</p>
            <p className="font-bold text-lg mt-4 text-yellow-400 select-none">${price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart({ id, name, price, image });
              }}
              type="button"
              className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold uppercase rounded-lg py-3 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 select-none"
            >
              Añadir al Carrito
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Cart({ cartItems, onClose, onRemoveItem, onClearCart, onIncreaseQty, onDecreaseQty }) {
  const [step, setStep] = useState('view');
  const [paymentMethod, setPaymentMethod] = useState(null);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = paymentMethod === 'transferencia' ? (total * 0.9).toFixed(2) : total.toFixed(2);
  const alias = "tomas.hornalla";
  const titular = "Tomas Martn Orellana Jimenez";

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText(alias);
      alert('Alias copiado: ' + alias);
    } catch (err) {
      console.error('Error al copiar el alias: ', err);
      alert('No se pudo copiar el alias.');
    }
  };

  const proceedToPayment = () => setStep('payment');
  const resetCartView = () => {
    setStep('view');
    setPaymentMethod(null);
  };

  const generateWhatsAppMessage = () => {
    let message = "¡Hola! Quisiera hacer el siguiente pedido:\n\n";
    cartItems.forEach(item => {
      message += `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\nTotal: $${total.toFixed(2)}`;

    if (paymentMethod === 'transferencia') {
      message += `\n*Total con 10% de descuento (transferencia): $${discountedTotal}*`;
    }
    
    if (paymentMethod === 'efectivo') {
        message += `\n*Pago en efectivo al retirar en caja*`;
    } else if (paymentMethod === 'transferencia') {
        message += `\n*Medio de pago: Transferencia. Alias: ${alias}*`;
    }

    return encodeURIComponent(message);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="fixed top-0 right-0 w-full max-w-md h-full bg-yellow-900 text-yellow-200 p-6 shadow-lg z-50 flex flex-col overflow-auto rounded-l-3xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <h2 id="cart-title" className="text-3xl font-extrabold mb-6 select-none">
          Carrito de Compras
        </h2>
        <button
          onClick={onClose}
          aria-label="Cerrar carrito"
          className="self-end text-yellow-400 hover:text-yellow-300 mb-6 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
        >
          ✕
        </button>

        {cartItems.length === 0 ? (
          <p className="text-yellow-400 select-none">Tu carrito está vacío</p>
        ) : (
          <>
            {step === 'view' && (
              <>
                <ul
                  className="flex-grow divide-y divide-yellow-700 overflow-auto mb-4"
                  aria-label="Lista de productos en carrito"
                >
                  {cartItems.map(({ id, name, price, quantity, image }) => (
                    <li key={id} className="py-4 flex gap-4 items-start" role="listitem">
                      <img
                        src={image}
                        alt={name}
                        className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex flex-col flex-grow">
                        <h3 className="font-semibold select-none">{name}</h3>
                        <p className="select-none">{quantity} x ${price}</p>
                        <p className="font-bold mt-1 select-none">Subtotal: ${(price * quantity).toFixed(2)}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onDecreaseQty(id)}
                            aria-label={`Disminuir cantidad de ${name}`}
                            className="bg-yellow-700 hover:bg-yellow-600 rounded px-2 select-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          >
                            -
                          </button>
                          <span className="font-semibold select-none">{quantity}</span>
                          <button
                            onClick={() => onIncreaseQty(id)}
                            aria-label={`Incrementar cantidad de ${name}`}
                            className="bg-yellow-700 hover:bg-yellow-600 rounded px-2 select-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => onRemoveItem(id)}
                        aria-label={`Eliminar ${name} del carrito`}
                        className="text-red-500 hover:text-red-400 font-bold self-end select-none ml-auto"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-yellow-700 pt-4 text-right font-bold text-yellow-300 text-xl select-none">
                  Total: ${total.toFixed(2)}
                </div>
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={proceedToPayment}
                    className="flex-grow bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold uppercase py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 select-none"
                  >
                    Pagar
                  </button>
                  <button
                    onClick={onClearCart}
                    className="flex-grow bg-red-600 hover:bg-red-500 text-yellow-100 font-semibold uppercase py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400 select-none"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </>
            )}

            {step === 'payment' && (
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-semibold select-none">Seleccione método de pago</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => setPaymentMethod('efectivo')}
                    className={`flex-grow py-3 rounded-lg font-semibold uppercase shadow transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 select-none ${
                      paymentMethod === 'efectivo'
                        ? 'bg-yellow-500 text-yellow-900 ring-4 ring-yellow-500'
                        : 'bg-yellow-300 text-yellow-900 hover:bg-yellow-400'
                    }`}
                  >
                    Efectivo (pago en caja)
                  </button>
                  <button
                    onClick={() => setPaymentMethod('transferencia')}
                    className={`flex-grow py-3 rounded-lg font-semibold uppercase shadow transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 select-none ${
                      paymentMethod === 'transferencia'
                        ? 'bg-green-600 text-yellow-100 ring-4 ring-green-600'
                        : 'bg-green-400 text-yellow-100 hover:bg-green-500'
                    }`}
                  >
                    Transferencia (10% descuento)
                  </button>
                </div>

                {paymentMethod && (
                  <>
                    <article className="mt-6 bg-yellow-800 bg-opacity-40 p-4 rounded-xl shadow-inner select-none">
                      <h4 className="font-semibold text-lg mb-2 text-yellow-400">Resumen de su pedido:</h4>
                      <ul className="list-disc list-inside max-h-48 overflow-y-auto text-yellow-200">
                        {cartItems.map(({ id, name, quantity, price }) => (
                          <li key={id}>
                            {quantity} x {name} - ${ (price * quantity).toFixed(2) }
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 font-bold text-lg text-yellow-300">
                        Total a pagar: ${discountedTotal}
                      </p>
                    </article>

                    {paymentMethod === 'transferencia' ? (
                      <p className="mt-2 text-yellow-300 select-none">
                        Para realizar la transferencia, podés usar las siguientes opciones:<br />
                        Alias: 
                        <span className="font-mono text-yellow-500 font-bold ml-2">
                          {alias}
                        </span>
                        <button
                          onClick={copyAlias}
                          className="ml-2 text-yellow-900 bg-yellow-400 hover:bg-yellow-300 px-2 py-1 rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          aria-label="Copiar alias"
                        >
                          Copiar Alias
                        </button>
                        <br />
                        Titular: {titular}<br />
                        Manda esta captura y el comprobante a el siguiente WhatsApp!!
                      </p>
                    ) : (
                      <p className="mt-2 text-yellow-300 select-none">
                        El pago será realizado en efectivo al momento de la entrega en caja.<br />
                        PAGO CON TRANSFERENCIA %10 DESCUENTO!!!
                      </p>
                    )}

                    {paymentMethod && (
                      <a
                        href={`https://wa.me/3541682299?text=${generateWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-400 text-yellow-900 font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 select-none"
                        aria-label="Contactar por WhatsApp"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                          <path d="M20.52 3.48A11.945 11.945 0 0012 0C5.373 0 0 5.373 0 12a11.936 11.936 0 001.664 6.004L0 24l6.132-1.612A11.92 11.92 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.255-6.192-3.48-8.52zM12 21.843a9.792 9.792 0 01-4.97-1.417l-.355-.209-3.64.956.969-3.58-.23-.37A9.82 9.82 0 012.165 12 9.828 9.828 0 0112 2.172a9.79 9.79 0 016.928 2.674 9.813 9.813 0 012.877 7.025c0 5.454-4.446 9.797-9.805 9.973z"/>
                          <path d="M17.53 14.02c-.256-.128-1.514-.746-1.75-.831-.236-.083-.41-.127-.584.127-.174.256-.673.83-.826 1-.15.172-.3.193-.556.065-.256-.128-1.078-.397-2.056-1.267-.76-.676-1.274-1.51-1.423-1.76-.15-.256-.016-.394.113-.522.116-.115.256-.3.387-.448.127-.15.17-.256.256-.427.086-.17.043-.317-.021-.445-.064-.128-.583-1.4-.8-1.916-.21-.5-.424-.432-.584-.44-.15-.006-.327-.008-.5-.008-.174 0-.455.065-.694.317-.237.256-.91.89-.91 2.173 0 1.284.934 2.527 1.065 2.702.13.174 1.838 2.88 4.462 4.037.624.27 1.11.43 1.489.55.625.192 1.195.165 1.647.1.503-.07 1.514-.62 1.727-1.22.213-.6.213-1.115.15-1.22-.064-.105-.236-.17-.492-.297z"/>
                        </svg>
                        Enviar Pedido por WhatsApp
                      </a>
                    )}

                    <div className="mt-6 flex gap-4">
                      <button
                        onClick={resetCartView}
                        className="flex-grow bg-yellow-500 hover:bg-yellow-400 text-yellow-900 font-semibold uppercase py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 select-none"
                      >
                        Volver al carrito
                      </button>
                      <button
                        onClick={onClearCart}
                        className="flex-grow bg-red-600 hover:bg-red-500 text-yellow-100 font-semibold uppercase py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-400 select-none"
                      >
                        Vaciar Carrito
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </aside>
    </>
  );
}

export default function Catalogo() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const showPopup = () => {
    setShowNotification(true);
  };

  const hidePopup = () => {
    setShowNotification(false);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const found = prevItems.find((i) => i.id === item.id);
      if (found) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
    showPopup();
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    setIsCartOpen(false);
  };

  const increaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity - 1;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-yellow-700 pt-20 pb-12 px-4 relative">
      <h1 className="text-center text-5xl font-serif font-extrabold text-white drop-shadow-lg mb-12 select-none">
        Nuestro Catálogo de Sándwiches:
      </h1>

      <button
        onClick={toggleCart}
        className="fixed top-6 right-6 bg-yellow-500 text-yellow-900 font-bold px-5 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-110 z-50 flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        aria-label="Abrir carrito de compras"
      >
        🛒{' '}
        {totalQuantity > 0 && (
          <span className="text-yellow-900 bg-yellow-300 px-2 rounded-full font-semibold select-none">
            {totalQuantity}
          </span>
        )}
      </button>

      <CatalogSection title="Sándwiches de Miga:" items={sandwichesDeMiga} addToCart={addToCart} />
      <CatalogSection title="Pebetes:" items={pebetes} addToCart={addToCart} />

      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={toggleCart}
          onRemoveItem={removeItem}
          onClearCart={clearCart}
          onIncreaseQty={increaseQty}
          onDecreaseQty={decreaseQty}
        />
      )}

      {showNotification && (
        <NotificationPopup message="¡Añadido al carrito!" onHide={hidePopup} />
      )}

      {/* BOTONES DE REDES SOCIALES */}
      <SocialButtons />
    </main>
  );
}