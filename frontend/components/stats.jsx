export const Stats = () => {
  const stats = [
    { number: "99.9%", label: "Uptime" },
    { number: "50K+", label: "Users" },
    { number: "4.9", label: "Rating" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
