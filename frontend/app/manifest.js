export default function manifest() {
  return {
    name: "Clyne",
    short_name: "Clyne",
    description:
      "Streamline your business with Clyne's customizable booking platform. Easily manage appointments, services, and client scheduling.",
    background_color: "#ffffff",
    theme_color: "#007BFF",
    display: "standalone",
    icons: [
      {
        purpose: "any",
        sizes: "192x192",
        src: "/icons/android-chrome-192x192.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "192x192",
        src: "/icons/android-chrome-192x192.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "384x384",
        src: "/icons/android-chrome-192x192.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "384x384",
        src: "/icons/android-chrome-192x192.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "/icons/android-chrome-512x512.png",
        type: "image/png",
      },
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "/icons/android-chrome-512x512.png",
        type: "image/png",
      },
    ],
  };
}
