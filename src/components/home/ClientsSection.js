"use client";

import Image from "next/image";

// Client logos
const clientLogos = [
  { name: "Binstellar", logo: "/images/clients/Webp/Binstellar.webp" },
  { name: "Brihati", logo: "/images/clients/Webp/Brihati.webp" },
  { name: "EPN", logo: "/images/clients/Webp/EPN.webp" },
  { name: "Form6", logo: "/images/clients/Webp/Form6.webp" },
  { name: "NXI", logo: "/images/clients/Webp/NXI011.webp" },
  { name: "SFMS", logo: "/images/clients/Webp/SFMS.webp" },
  { name: "VPTechnoLabs", logo: "/images/clients/Webp/VPTechnoLabsFinal.webp" },
  { name: "WebSeede", logo: "/images/clients/Webp/WebSeede.webp" },
  { name: "Protergia", logo: "/images/clients/Webp/protergia.webp" },
  { name: "Advetfly", logo: "/images/clients/Webp/Advetfly.webp" },
];

// duplicate for seamless loop
const marqueeLogos = [...clientLogos, ...clientLogos];

export default function ClientsSection() {
  return (
    <section className="relative py-16 overflow-hidden dark:bg-gray-900">
      {/* 🔥 DOT + STAR BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Dots */}
        <div
          className="absolute inset-0 
          bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] 
          dark:bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:20px_20px]"
        ></div>

        {/* Stars (small glow points) */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-20 w-1 h-1 bg-primary rounded-full blur-[2px]"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full blur-[2px]"></div>
          <div className="absolute bottom-20 left-40 w-1 h-1 bg-primary rounded-full blur-[2px]"></div>
          <div className="absolute bottom-32 right-20 w-1 h-1 bg-primary rounded-full blur-[2px]"></div>
        </div>
      </div>

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-3">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Trusted Partners
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">Our Clients</h2>
        </div>

        {/* 🔥 CONTINUOUS MARQUEE */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

          <div className="flex w-max animate-marquee">
            {marqueeLogos.map((client, index) => (
              <div key={index} className="px-8 flex items-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={110}
                  height={40}
                  sizes="(max-width: 768px) 80px, 110px"
                  className="object-contain w-auto h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">100+</p>
            <p className="text-muted-foreground text-sm">Happy Clients</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-primary">50+</p>
            <p className="text-muted-foreground text-sm">SAP Projects</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-primary">25+</p>
            <p className="text-muted-foreground text-sm">Industries Served</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-primary">10+</p>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
