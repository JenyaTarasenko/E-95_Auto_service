
// import Script from "next/script";

// export default function ServiceSchema() {
//     const data = {
//         "@context": "https://schema.org",
//         "@type": "Service",
//         serviceType: "Эвакуатор круглосуточно такси помощь в дороге",
//         provider: {
//             "@type": "AutoRepair",
//             name: "E-95AVTOSERVICE",
//             telephone: "+380688505078",
//             url: "https://joyful-blini-28a6ab.netlify.app/",
//             email: "mailto:eavtoservice@gmail.com",
//         },
//         areaServed: [
//             "Кривое Озеро",
//             "Любашевка",
//             "Ширяево",
//             "Одаи",
//             "Петроверовка",
//         ],
//         description:
//             "E-95 AVTOSERVICE - круглосуточные услуги эвакуатора, автосервис, такси. Срочная эвакуация автомобилей, помощь на дороге, перевозка авто.",
//     };

//     return (
//         <Script
//             type="application/ld+json"
//             strategy="afterInteractive"
//             dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
//         />
//     );
// }


import Script from "next/script";

export default function ServiceSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "AutoRepair", // 🔥 лучше чем просто Service для твоей ниши

        name: "E-95 AVTOSERVICE",
        serviceType: "Эвакуатор 24/7, такси, шиномонтаж, автосервис",

        url: "https://joyful-blini-28a6ab.netlify.app/",
        telephone: "+380688505078",
        email: "eavtoservice@gmail.com",

        image: "https://joyful-blini-28a6ab.netlify.app/images/og.png",

        // 🔥 ГЕО (очень важно для локального SEO)
        areaServed: [
            "Троицкое",
            "Любашевка",
            "Кривое Озеро",
            "Ширяево",
            "Одесская область",
        ],

        address: {
            "@type": "PostalAddress",
            addressLocality: "Троицкое",
            addressRegion: "Одесская область",
            addressCountry: "UA",
        },

        geo: {
            "@type": "GeoCoordinates",
            latitude: 47.647677,
            longitude: 30.309478,
        },

        description:
            "E-95 AVTOSERVICE — круглосуточный эвакуатор, автосервис и помощь на дороге. Быстрая подача 15–30 минут по трассе Е-95 и Одесской области.",

        openingHours: "Mo-Su 00:00-23:59",

        // 🔥 чтобы Google понимал как бизнес
        priceRange: "$$",

        // 🔥 соц. и доп. сигналы
        sameAs: [
            "https://joyful-blini-28a6ab.netlify.app/",
        ],
    };

    return (
        <Script
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data),
            }}
        />
    );
}