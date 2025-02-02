export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("ServiceWorker registration successful");
        })
        .catch((err) => {
          console.log("ServiceWorker registration failed: ", err);
        });
    });
  }
}

// // app/layout.js modifications
// import { registerServiceWorker } from "@/lib/pwa";

// export default function RootLayout({ children }) {
//   // Add this to your useEffect in a client component
//   useEffect(() => {
//     registerServiceWorker();
//   }, []);

//   return (
//     <html lang="en">
//       <head>
//         <link rel="manifest" href="/site.webmanifest" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//         <meta name="apple-mobile-web-app-title" content="Clyne" />
//         <meta name="theme-color" content="#6D28D9" />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }
