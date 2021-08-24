if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register('/care2care/serviceWorker.js', {scope: '/care2care/'})
    .then(registration => {
        console.log("service worker registered");
    }).catch(error => {
        console.log("service worker not registered", error);
})
}