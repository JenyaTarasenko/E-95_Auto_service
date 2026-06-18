export default function SchemaAutoHelp() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "E-95 AUTOSERVICE",
    description:
      "Эвакуатор 24/7 на трассе М-05 Одесса–Киев. Срочная эвакуация автомобилей, помощь на дороге, запуск двигателя, доставка топлива и круглосуточная автопомощь в Одесской области.",
    url: "https://joyful-blini-28a6ab.netlify.app/",
    telephone: "+380688505078",
    email: "mailto:eavtoservice@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressRegion: "Одеська область",
      addressCountry: "UA",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.030083,
      longitude: 30.315859,
    },

    areaServed: [
      "Одеська область",
      "Траса М-05",
      "Траса Е-95",
      "Любашівка",
      "Ширяєве",
      "Знам’янка",
      "Одеса",
    ],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],

    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}