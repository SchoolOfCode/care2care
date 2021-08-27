if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("/serviceWorker.js", { scope: "/" })
      .then((registration) => {
        console.log("service worker registered");
      })
      .catch((error) => {
        console.log("service worker not registered", error);
      });
}
