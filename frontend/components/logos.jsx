import Image from "next/image";

export const IntegrationsLogos = () => {
  const integrations = [
    { name: "Google Calendar", icon: "/logos/google-calendar.svg" },
    { name: "Visa", icon: "/logos/visa.svg" },
    { name: "Zoom", icon: "/logos/zoom.svg" },
    { name: "Paystack", icon: "/logos/paystack.svg" },
    { name: "Outlook", icon: "/logos/outlook.svg" },
    { name: "PayPal", icon: "/logos/paypal.svg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl text-gray-600">
            Works with your favorite tools
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="p-4 hover:scale-110 transition-transform duration-300 cursor-pointer grayscale-0 hover:grayscale lg:grayscale lg:hover:grayscale-0"
            >
              <Image
                src={integration.icon}
                alt={integration.name}
                width={50}
                height={50}
                className="w-auto h-auto"
                // unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
