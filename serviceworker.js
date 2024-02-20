self.addEventListener("install", event => {
   alert(1)
});
self.addEventListener("activate", event => {
   alert(2);
});
