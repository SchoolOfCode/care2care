if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js", { scope: "/" })
    .then((registration) => {
      console.log(
        "%cService worker registered",
        "background: rgb(31, 193, 27);color:#FFF;padding:5px 10px;border-radius: 5px;"
      );
    })
    .catch((error) => {
      console.log(
        "%cService worker not registered",
        "background: rgb(255, 85, 85);color:#FFF;padding:5px 10px;border-radius: 5px;",
        error
      );
    });
}
