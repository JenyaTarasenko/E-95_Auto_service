
import Script from "next/script";

export default function ServiceSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Эвакуатор круглосуточно",
        provider: {
            "@type": "AutoRepair",
            name: "E-95AVTOSERVICE",
            telephone: "+380688505078",
            url: "https://statuesque-cascaron-264f9a.netlify.app/",
            email: "mailto:eavtoservice@gmail.com",
        },
        areaServed: [
            "Кривое Озеро",
            "Любашевка",
            "Ширяево",
            "Одаи",
            "Петроверовка",
        ],
        description:
            "E-95 AVTOSERVICE - круглосуточные услуги эвакуатора, автосервис, такси. Срочная эвакуация автомобилей, помощь на дороге, перевозка авто.",
    };

    return (
        <Script
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}