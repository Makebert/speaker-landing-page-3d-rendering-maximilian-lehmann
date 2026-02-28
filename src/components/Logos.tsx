export default function Logos() {
  const logos = [
    { name: "Mercedes-Benz", domain: "mercedes-benz.com" },
    { name: "Tchibo", domain: "tchibo.de" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "Sopra Steria", domain: "soprasteria.com" },
    { name: "Bioscientia", domain: "bioscientia.de" },
    { name: "Freie Universität Berlin", domain: "fu-berlin.de" },
    {
      name: "Universität Hamburg",
      domain: "uni-hamburg.de",
      customUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/UHH_Universit%C3%A4t_Hamburg_Logo_mit_Schrift_2010_Farbe_CMYK.svg"
    },
    { name: "International School of Management", domain: "ism.de" }
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-mono tracking-widest text-zinc-500 uppercase mb-16">
          Trusted by industry leaders
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-x-16 md:gap-y-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-[40%] sm:w-auto text-zinc-400 hover:text-weavy-accent transition-colors duration-300"
            >
              <img
                src={logo.customUrl || `https://logo.clearbit.com/${logo.domain}`}
                onError={(e) => {
                  if (!logo.customUrl) {
                    e.currentTarget.src = `https://www.google.com/s2/favicons?sz=128&domain_url=${logo.domain}`;
                  }
                }}
                alt={`${logo.name} logo`}
                className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-md"
              />
              <span className="text-sm sm:text-lg md:text-2xl font-semibold tracking-tight text-center">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
