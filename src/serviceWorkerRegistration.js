// Esta función registra el service worker
export function register() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registrado con éxito:", registration);
          })
          .catch((error) => {
            console.error("Error al registrar el Service Worker:", error);
          });
      });
    }
  }
  
  // Esta función desactiva el service worker
  export function unregister() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
  