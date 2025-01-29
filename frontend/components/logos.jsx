export const IntegrationsLogos = () => {
  const integrations = [
    { name: "Google Calendar", icon: "/api/placeholder/120/40" },
    { name: "Zoom", icon: "/api/placeholder/120/40" },
    { name: "Stripe", icon: "/api/placeholder/120/40" },
    { name: "Outlook", icon: "/api/placeholder/120/40" },
    { name: "Slack", icon: "/api/placeholder/120/40" },
    { name: "PayPal", icon: "/api/placeholder/120/40" },
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
              className="p-4 hover:scale-110 transition-transform duration-300 cursor-pointer grayscale hover:grayscale-0"
            >
              <img
                src={integration.icon}
                alt={integration.name}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
