import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, type = "website", schema }) => {
    const siteTitle = "PixelPilot Labs";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const currentUrl = url ? `https://pixelpilotlabs.com${url}` : "https://pixelpilotlabs.com";
    const metaImage = image || "https://pixelpilotlabs.com/og-image.jpg"; // Default OG Image

    // Organization + LocalBusiness + Service Schema combined if not overridden
    const defaultSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": siteTitle,
                "url": "https://pixelpilotlabs.com",
                "logo": "https://pixelpilotlabs.com/logo.png",
                "sameAs": [
                    "https://www.linkedin.com/in/pixel-pilot-2a1a783b2",
                    "https://www.instagram.com/pixelpilot_labs"
                ]
            },
            {
                "@type": "ProfessionalService",
                "name": siteTitle,
                "image": "https://pixelpilotlabs.com/logo.png",
                "@id": "https://pixelpilotlabs.com",
                "url": "https://pixelpilotlabs.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                },
                "priceRange": "$$",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Development" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Development" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Design" } }
                    ]
                }
            }
        ]
    };

    const finalSchema = schema || defaultSchema;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph metadata */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={currentUrl} />

            {/* Twitter metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />

            {/* Schema markup */}
            <script type="application/ld+json">
                {JSON.stringify(finalSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
