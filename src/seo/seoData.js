export const seoData = {
  home: {
    title: "Atorix IT | SAP Consulting & Enterprise IT Solutions",

    description:
      "Atorix IT provides SAP consulting, implementation, migration and enterprise IT services to help businesses accelerate digital transformation.",

    keywords: [
      "SAP Consulting",
      "SAP Implementation",
      "SAP Migration",
      "Enterprise IT Services",
      "Digital Transformation",
    ],

    canonical: "https://www.atorixit.com/",

    robots: "index, follow", // ✅ ADD

    openGraph: {
      title: "Atorix IT | SAP Consulting Services",
      description:
        "Enterprise SAP consulting and IT services for modern businesses.",
      url: "https://www.atorixit.com/",
      siteName: "Atorix IT",
      type: "website",
    },

    // ✅ FULL SCHEMA (NO LINE SKIPPED — BASED ON YOUR FUNCTION OUTPUT)
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.atorixit.com/#webpage",
          url: "https://www.atorixit.com/",
          name: "SAP Consulting & Enterprise IT Services",
          headline: "SAP Consulting & Enterprise IT Services",
          description:
            "Atorix IT provides SAP consulting, implementation, migration and enterprise IT services to help businesses accelerate digital transformation.",
          isPartOf: { "@id": "https://www.atorixit.com#website" },
          publisher: { "@id": "https://www.atorixit.com#organization" },
          mainEntity: {
            "@id": "https://www.atorixit.com#service",
          },
        },

        {
          "@type": "BreadcrumbList",
          "@id": "https://www.atorixit.com/#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.atorixit.com/",
            },
          ],
        },

        {
          "@type": "Service",
          "@id": "https://www.atorixit.com#service",
          name: "SAP Consulting & Enterprise IT Services",
          serviceType:
            "SAP Consulting, Implementation, Migration & Enterprise IT Services",
          provider: { "@id": "https://www.atorixit.com#organization" },
          areaServed: {
            "@type": "Place",
            name: "Worldwide",
          },
          mainEntityOfPage: {
            "@id": "https://www.atorixit.com/#webpage",
          },
          offers: {
            "@id": "https://www.atorixit.com/#offer",
          },
        },

        {
          "@type": "Offer",
          "@id": "https://www.atorixit.com/#offer",
          url: "https://www.atorixit.com/",
          itemOffered: {
            "@id": "https://www.atorixit.com#service",
          },
          eligibleCustomerType: {
            "@type": "BusinessEntityType",
            name: "Business",
          },
        },

        {
          "@type": "WebSite",
          "@id": "https://www.atorixit.com#website",
          url: "https://www.atorixit.com/",
          name: "Atorix IT Solutions",
          publisher: {
            "@id": "https://www.atorixit.com#organization",
          },
        },

        {
          "@type": "Organization",
          "@id": "https://www.atorixit.com#organization",
          name: "Atorix IT Solutions",
          url: "https://www.atorixit.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.atorixit.com/atorix%20text%20logo@3x.webp",
          },
          sameAs: [
            "https://www.facebook.com/atorixitsolutions",
            "https://www.linkedin.com/company/atorix-it-solution",
            "https://www.instagram.com/atorixitsolutionspvtltd",
          ],
        },
      ],
    },
  },

  about: {
    title: "About Atorix IT | SAP Consulting Experts",

    description:
      "Learn about Atorix IT, our mission, global presence, and expertise in SAP consulting, implementation, and enterprise IT solutions.",

    keywords: [
      "About Atorix IT",
      "SAP Consulting Company",
      "Enterprise IT Solutions",
      "Digital Transformation Partner",
    ],

    canonical: "https://www.atorixit.com/about",

    robots: "index, follow",

    // ✅ OPEN GRAPH
    openGraph: {
      title: "About Atorix IT",
      description:
        "Discover Atorix IT's mission, expertise, and leadership in SAP consulting and enterprise IT solutions.",
      url: "https://www.atorixit.com/about",
      siteName: "Atorix IT",
      type: "website",

      images: [
        {
          url: "https://www.atorixit.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    // ✅ TWITTER
    twitter: {
      card: "summary_large_image",
      title: "About Atorix IT",
      description: "Learn about Atorix IT and our expertise in SAP consulting.",
      images: ["https://www.atorixit.com/og-image.jpg"],
    },

    // ✅ SCHEMA
    schema: {
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.atorixit.com/about#webpage",
          url: "https://www.atorixit.com/about",
          name: "About Atorix IT",
          headline: "About Atorix IT",
          description:
            "Learn about Atorix IT, our mission, and expertise in SAP consulting and enterprise IT solutions.",
          inLanguage: "en-IN",

          isPartOf: {
            "@id": "https://www.atorixit.com/#website",
          },

          about: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },

        {
          "@type": "BreadcrumbList",
          "@id": "https://www.atorixit.com/about#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.atorixit.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "About",
              item: "https://www.atorixit.com/about",
            },
          ],
        },

        {
          "@type": "Organization",
          "@id": "https://www.atorixit.com/#organization",
          name: "Atorix IT Solutions",
          url: "https://www.atorixit.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.atorixit.com/atorix%20text%20logo@3x.webp",
          },
          description:
            "Atorix IT Solutions is a leading SAP consulting and enterprise IT services company helping businesses accelerate digital transformation.",

          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8956001555",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English"],
          },

          sameAs: [
            "https://www.facebook.com/atorixitsolutions",
            "https://www.linkedin.com/company/atorix-it-solution",
            "https://www.instagram.com/atorixitsolutionspvtltd",
          ],
        },

        {
          "@type": "WebSite",
          "@id": "https://www.atorixit.com/#website",
          url: "https://www.atorixit.com/",
          name: "Atorix IT Solutions",
          publisher: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },
      ],
    },
  },

  services: {
    title: "SAP Services | Atorix IT Solutions",

    description:
      "Explore SAP consulting, implementation, migration, and enterprise IT services offered by Atorix IT to accelerate your business growth.",

    keywords: [
      "SAP Services",
      "SAP Consulting",
      "SAP Implementation",
      "Enterprise IT Solutions",
      "Digital Transformation Services",
    ],

    canonical: "https://www.atorixit.com/services",

    robots: "index, follow",

    // ✅ OPEN GRAPH (FIXED)
    openGraph: {
      title: "SAP Services | Atorix IT",
      description:
        "Discover comprehensive SAP and enterprise IT services tailored for modern businesses.",
      url: "https://www.atorixit.com/services",
      siteName: "Atorix IT",
      type: "website",

      images: [
        {
          url: "https://www.atorixit.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    // ✅ TWITTER (BONUS SEO)
    twitter: {
      card: "summary_large_image",
      title: "SAP Services | Atorix IT",
      description:
        "Explore SAP consulting, implementation, and enterprise IT services.",
      images: ["https://www.atorixit.com"],
    },

    // ✅ SCHEMA (FULL FIXED)
    schema: {
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://www.atorixit.com/services#servicespage",
          url: "https://www.atorixit.com/services",
          name: "SAP Services by Atorix IT Solutions",
          description:
            "Comprehensive SAP consulting, implementation, migration, and enterprise IT services.",
          isPartOf: {
            "@id": "https://www.atorixit.com/#website",
          },
          about: {
            "@id": "https://www.atorixit.com/#organization",
          },
          mainEntity: {
            "@id": "https://www.atorixit.com/services#offercatalog",
          },
          inLanguage: "en-IN",
        },

        {
          "@type": "BreadcrumbList",
          "@id": "https://www.atorixit.com/services#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.atorixit.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.atorixit.com/services",
            },
          ],
        },

        {
          "@type": "OfferCatalog",
          "@id": "https://www.atorixit.com/services#offercatalog",
          name: "Atorix IT Services Catalog",

          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://www.atorixit.com/services#consulting-service",
                name: "Business & Technology Consulting Services",
                serviceType: [
                  "Business Consulting",
                  "Process Consulting",
                  "Technology Consulting",
                ],
                provider: {
                  "@id": "https://www.atorixit.com/#organization",
                  name: "Atorix IT Solutions",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://www.atorixit.com/services#sap-service",
                name: "SAP ERP Services",
                serviceType: [
                  "SAP S/4 HANA",
                  "SAP ECC",
                  "SAP Cloud",
                  "SAP Business One",
                  "SAP Analytics",
                ],
                provider: {
                  "@id": "https://www.atorixit.com/#organization",
                  name: "Atorix IT Solutions",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://www.atorixit.com/services#sap-app-service",
                name: "SAP Application Services",
                serviceType: [
                  "Implementation",
                  "Migration",
                  "Upgrade",
                  "Support",
                  "Integration",
                ],
                provider: {
                  "@id": "https://www.atorixit.com/#organization",
                  name: "Atorix IT Solutions",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://www.atorixit.com/services#data-service",
                name: "Data Science Services",
                serviceType: [
                  "Data Analytics",
                  "Machine Learning",
                  "Data Engineering",
                  "Data Visualization",
                ],
                provider: {
                  "@id": "https://www.atorixit.com/#organization",
                  name: "Atorix IT Solutions",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },

            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://www.atorixit.com/services#it-service",
                name: "IT & Software Services",
                serviceType: [
                  "IT Consulting",
                  "Software Development",
                  "Cloud Services",
                  "Infrastructure Management",
                ],
                provider: {
                  "@id": "https://www.atorixit.com/#organization",
                  name: "Atorix IT Solutions",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
              },
            },
          ],
        },

        {
          "@type": "Organization",
          "@id": "https://www.atorixit.com/#organization",
          name: "Atorix IT Solutions",
          url: "https://www.atorixit.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.atorixit.com/atorix%20text%20logo@3x.webp",
          },
          sameAs: [
            "https://www.facebook.com/atorixitsolutions",
            "https://www.linkedin.com/company/atorix-it-solution",
            "https://www.instagram.com/atorixitsolutionspvtltd",
          ],
        },

        {
          "@type": "WebSite",
          "@id": "https://www.atorixit.com/#website",
          url: "https://www.atorixit.com/",
          name: "Atorix IT Solutions",
          publisher: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },
      ],
    },
  },

  industries: {
    title: "Industries We Serve | SAP Solutions for Every Sector – Atorix IT",

    description:
      "Explore industries served by Atorix IT including healthcare, manufacturing, finance, retail, logistics and more with tailored SAP consulting and enterprise IT solutions.",

    keywords: [
      "Industries SAP Services",
      "SAP for Healthcare",
      "SAP for Manufacturing",
      "SAP for Finance",
      "Enterprise Industry Solutions",
      "SAP Consulting India",
    ],

    canonical: "https://www.atorixit.com/industries",

    robots: "index, follow",

    // ✅ OPEN GRAPH
    openGraph: {
      title: "Industries We Serve | Atorix IT",
      description:
        "Discover how Atorix IT delivers SAP solutions across healthcare, manufacturing, finance and more industries.",
      url: "https://www.atorixit.com/industries",
      siteName: "Atorix IT",
      type: "website",

      images: [
        {
          url: "https://www.atorixit.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    // ✅ TWITTER
    twitter: {
      card: "summary_large_image",
      title: "Industries We Serve | Atorix IT",
      description:
        "Explore SAP and enterprise IT solutions tailored for multiple industries.",
      images: ["https://www.atorixit.com/og-image.jpg"],
    },

    // ✅ SCHEMA
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://www.atorixit.com/industries#industriespage",
          url: "https://www.atorixit.com/industries",
          name: "Industries We Serve",
          headline: "Industries We Serve",
          description:
            "Atorix IT delivers SAP and enterprise IT solutions across multiple industries.",
          inLanguage: "en-IN",

          isPartOf: {
            "@id": "https://www.atorixit.com/#website",
          },

          about: {
            "@id": "https://www.atorixit.com/#organization",
          },

          mainEntity: {
            "@id": "https://www.atorixit.com/industries#industry-list",
          },
        },

        {
          "@type": "BreadcrumbList",
          "@id": "https://www.atorixit.com/industries#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.atorixit.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Industries",
              item: "https://www.atorixit.com/industries",
            },
          ],
        },

        {
          "@type": "ItemList",
          "@id": "https://www.atorixit.com/industries#industry-list",
          name: "Industries Served by Atorix IT",
          itemListOrder: "http://schema.org/ItemListUnordered",
          numberOfItems: 19,

          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Healthcare Industry Solutions",
              url: "https://www.atorixit.com/industries#healthcare",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Manufacturing Industry Solutions",
              url: "https://www.atorixit.com/industries#manufacturing",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Financial Services Industry Solutions",
              url: "https://www.atorixit.com/industries#financial-services",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Retail Industry Solutions",
              url: "https://www.atorixit.com/industries#retail",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Energy Industry Solutions",
              url: "https://www.atorixit.com/industries#energy",
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Automotive Industry Solutions",
              url: "https://www.atorixit.com/industries#automotive",
            },
            {
              "@type": "ListItem",
              position: 7,
              name: "Pharmaceutical Industry Solutions",
              url: "https://www.atorixit.com/industries#pharmaceuticals",
            },
            {
              "@type": "ListItem",
              position: 8,
              name: "Telecommunications Industry Solutions",
              url: "https://www.atorixit.com/industries#telecommunications",
            },
            {
              "@type": "ListItem",
              position: 9,
              name: "Logistics Industry Solutions",
              url: "https://www.atorixit.com/industries#logistics",
            },
            {
              "@type": "ListItem",
              position: 10,
              name: "Construction Industry Solutions",
              url: "https://www.atorixit.com/industries#construction",
            },
            {
              "@type": "ListItem",
              position: 11,
              name: "Media & Entertainment Solutions",
              url: "https://www.atorixit.com/industries#media-entertainment",
            },
            {
              "@type": "ListItem",
              position: 12,
              name: "Food & Beverage Industry Solutions",
              url: "https://www.atorixit.com/industries#food-beverage",
            },
            {
              "@type": "ListItem",
              position: 13,
              name: "Shipping Industry Solutions",
              url: "https://www.atorixit.com/industries#shipping",
            },
            {
              "@type": "ListItem",
              position: 14,
              name: "Trading Industry Solutions",
              url: "https://www.atorixit.com/industries#trading",
            },
            {
              "@type": "ListItem",
              position: 15,
              name: "Chemical Industry Solutions",
              url: "https://www.atorixit.com/industries#chemical",
            },
            {
              "@type": "ListItem",
              position: 16,
              name: "Hospitality Industry Solutions",
              url: "https://www.atorixit.com/industries#hospitality",
            },
            {
              "@type": "ListItem",
              position: 17,
              name: "Agriculture Industry Solutions",
              url: "https://www.atorixit.com/industries#agriculture",
            },
            {
              "@type": "ListItem",
              position: 18,
              name: "Insurance Industry Solutions",
              url: "https://www.atorixit.com/industries#insurance",
            },
            {
              "@type": "ListItem",
              position: 19,
              name: "Education Industry Solutions",
              url: "https://www.atorixit.com/industries#education",
            },
          ],
        },

        {
          "@type": "Organization",
          "@id": "https://www.atorixit.com/#organization",
          name: "Atorix IT Solutions",
          url: "https://www.atorixit.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.atorixit.com/atorix%20text%20logo@3x.webp",
          },
        },

        {
          "@type": "WebSite",
          "@id": "https://www.atorixit.com/#website",
          url: "https://www.atorixit.com/",
          name: "Atorix IT Solutions",
        },
      ],
    },
  },

  blog: {
    title: "Blog | Atorix IT Insights & Articles",

    description:
      "Read the latest insights, articles, and updates on SAP consulting, enterprise IT solutions, and digital transformation from Atorix IT.",

    keywords: [
      "SAP Blog",
      "IT Blog",
      "Digital Transformation Articles",
      "Enterprise IT Insights",
      "Atorix Blog",
    ],

    canonical: "https://www.atorixit.com/blog",

    robots: "index, follow",

    // ✅ OPEN GRAPH
    openGraph: {
      title: "Atorix IT Blog",
      description:
        "Explore expert insights and articles on SAP and enterprise IT solutions.",
      url: "https://www.atorixit.com/blog",
      siteName: "Atorix IT",
      type: "website",

      images: [
        {
          url: "https://www.atorixit.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    // ✅ TWITTER
    twitter: {
      card: "summary_large_image",
      title: "Atorix IT Blog",
      description: "Explore SAP consulting and enterprise IT insights.",
      images: ["https://www.atorixit.com/og-image.jpg"],
    },

    // ✅ SCHEMA
    schema: {
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": "https://www.atorixit.com/blog#collectionpage",
          url: "https://www.atorixit.com/blog",
          name: "Atorix IT Blog",
          headline: "Atorix IT Blog",
          description:
            "Insights, articles, and expert perspectives on SAP and enterprise IT solutions.",
          inLanguage: "en-IN",

          isPartOf: {
            "@id": "https://www.atorixit.com/#website",
          },

          about: {
            "@id": "https://www.atorixit.com/#organization",
          },

          mainEntity: {
            "@id": "https://www.atorixit.com/blog#blog",
          },
        },

        {
          "@type": "BreadcrumbList",
          "@id": "https://www.atorixit.com/blog#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.atorixit.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://www.atorixit.com/blog",
            },
          ],
        },

        {
          "@type": "Blog",
          "@id": "https://www.atorixit.com/blog#blog",
          name: "Atorix IT Blog",
          description:
            "Expert articles on SAP consulting, enterprise IT, and digital transformation.",
          inLanguage: "en-IN",

          publisher: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },

        {
          "@type": "ItemList",
          "@id": "https://www.atorixit.com/blog#blog-list",
          name: "Blog Articles",
          itemListOrder: "http://schema.org/ItemListDescendingOrder",

          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "SAP Implementation Guide",
              url: "https://www.atorixit.com/blog/sap-implementation-guide",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Digital Transformation Strategies",
              url: "https://www.atorixit.com/blog/digital-transformation",
            },
          ],
        },

        {
          "@type": "Organization",
          "@id": "https://www.atorixit.com/#organization",
          name: "Atorix IT Solutions",
          url: "https://www.atorixit.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.atorixit.com/atorix%20text%20logo@3x.webp",
          },
        },

        {
          "@type": "WebSite",
          "@id": "https://www.atorixit.com/#website",
          url: "https://www.atorixit.com/",
          name: "Atorix IT Solutions",
          publisher: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },
      ],
    },
  },

  contact: {
    title: "Contact Atorix IT | Get in Touch",

    description:
      "Contact Atorix IT for SAP consulting, implementation, and enterprise IT solutions. Speak with our experts today.",

    keywords: [
      "Contact Atorix IT",
      "SAP Consulting Contact",
      "IT Services Contact",
      "Business Inquiry",
    ],

    canonical: "https://www.atorixit.com/contact",

    robots: "index, follow",

    // ✅ OPEN GRAPH
    openGraph: {
      title: "Contact Atorix IT",
      description:
        "Get in touch with Atorix IT for expert SAP and enterprise IT solutions.",
      url: "https://www.atorixit.com/contact",
      siteName: "Atorix IT",
      type: "website",

      images: [
        {
          url: "https://www.atorixit.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    // ✅ TWITTER
    twitter: {
      card: "summary_large_image",
      title: "Contact Atorix IT",
      description:
        "Reach out to Atorix IT for SAP consulting and enterprise IT services.",
      images: ["https://www.atorixit.com/og-image.jpg"],
    },

    // ✅ SCHEMA
    schema: {
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "ContactPage",
          "@id": "https://www.atorixit.com/contact#contactpage",
          url: "https://www.atorixit.com/contact",
          name: "Contact Atorix IT",
          headline: "Contact Atorix IT",
          description:
            "Get in touch with Atorix IT for SAP consulting, implementation, and enterprise IT solutions.",
          inLanguage: "en-IN",

          isPartOf: {
            "@id": "https://www.atorixit.com/#website",
          },

          about: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },

        {
          "@type": "BreadcrumbList",
          "@id": "https://www.atorixit.com/contact#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.atorixit.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: "https://www.atorixit.com/contact",
            },
          ],
        },

        {
          "@type": "Organization",
          "@id": "https://www.atorixit.com/#organization",
          name: "Atorix IT Solutions",
          url: "https://www.atorixit.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.atorixit.com/atorix%20text%20logo@3x.webp",
          },

          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8956001555",
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English"],
          },

          sameAs: [
            "https://www.facebook.com/atorixitsolutions",
            "https://www.linkedin.com/company/atorix-it-solution",
            "https://www.instagram.com/atorixitsolutionspvtltd",
          ],
        },

        {
          "@type": "WebSite",
          "@id": "https://www.atorixit.com/#website",
          url: "https://www.atorixit.com/",
          name: "Atorix IT Solutions",
          publisher: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },
      ],
    },
  },

  career: {
    title: "Careers at Atorix IT | Join Our Team",

    description:
      "Explore career opportunities at Atorix IT. Join our team and grow your career in SAP consulting and enterprise IT solutions.",

    keywords: [
      "Atorix Careers",
      "SAP Jobs",
      "IT Jobs",
      "Join Atorix IT",
      "Career Opportunities",
    ],

    canonical: "https://www.atorixit.com/career",

    robots: "index, follow",

    // ✅ OPEN GRAPH
    openGraph: {
      title: "Careers at Atorix IT",
      description:
        "Build your future with Atorix IT. Explore open positions and career growth opportunities.",
      url: "https://www.atorixit.com/career",
      siteName: "Atorix IT",
      type: "website",

      images: [
        {
          url: "https://www.atorixit.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },

    // ✅ TWITTER
    twitter: {
      card: "summary_large_image",
      title: "Careers at Atorix IT",
      description: "Explore SAP and IT job opportunities at Atorix IT.",
      images: ["https://www.atorixit.com/og-image.jpg"],
    },

    // ✅ SCHEMA
    schema: {
      "@context": "https://schema.org",

      "@graph": [
        {
          "@type": "CareerPage",
          "@id": "https://www.atorixit.com/career#careerpage",
          url: "https://www.atorixit.com/career",
          name: "Careers at Atorix IT Solutions",
          headline: "Careers at Atorix IT",
          description:
            "Explore career opportunities at Atorix IT Solutions and grow your career in SAP consulting and enterprise IT solutions.",
          inLanguage: "en-IN",

          isPartOf: {
            "@id": "https://www.atorixit.com/#website",
          },

          about: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },

        {
          "@type": "BreadcrumbList",
          "@id": "https://www.atorixit.com/career#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.atorixit.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Career",
              item: "https://www.atorixit.com/career",
            },
          ],
        },

        // ✅ SAMPLE JOB POSTING (VERY IMPORTANT)
        {
          "@type": "JobPosting",
          "@id": "https://www.atorixit.com/career#sap-consultant",
          title: "SAP Consultant",
          description:
            "We are hiring SAP Consultants with experience in implementation and support projects.",
          datePosted: "2026-01-01",
          employmentType: "FULL_TIME",

          hiringOrganization: {
            "@type": "Organization",
            name: "Atorix IT Solutions",
            sameAs: "https://www.atorixit.com",
            logo: "https://www.atorixit.com/atorix%20text%20logo@3x.webp",
          },

          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
          },
        },

        {
          "@type": "Organization",
          "@id": "https://www.atorixit.com/#organization",
          name: "Atorix IT Solutions",
          url: "https://www.atorixit.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.atorixit.com/atorix%20text%20logo@3x.webp",
          },

          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8956001555",
            contactType: "recruitment",
            areaServed: "IN",
            availableLanguage: ["English"],
          },
        },

        {
          "@type": "WebSite",
          "@id": "https://www.atorixit.com/#website",
          url: "https://www.atorixit.com/",
          name: "Atorix IT Solutions",
          publisher: {
            "@id": "https://www.atorixit.com/#organization",
          },
        },
      ],
    },
  },
};

export default seoData;
