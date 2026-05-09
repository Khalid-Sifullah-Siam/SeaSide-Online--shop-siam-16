import Image from "next/image";

const tips = [
  {
    title: "Stay Hydrated",
    image: "/summer-hydrated.jpg",
    desc: "Keep your body fresh and active during hot summer days.",
    items: [
      "Drink 8–10 glasses of water daily",
      "Avoid sugary drinks",
      "Carry a water bottle",
    ],
    bg: "bg-blue-100",
  },
  {
    title: "Use Sunscreen",
    image: "/summer-sunscreen.webp",
    desc: "Protect your skin from harmful UV rays.",
    items: [
      "Apply SPF 30+ sunscreen",
      "Reapply every 2–3 hours",
      "Avoid direct sun at noon",
    ],
    bg: "bg-yellow-100",
  },
  {
    title: "Wear Light Clothes",
    image: "/summer-light-clothes.jpg",
    desc: "Stay cool and comfortable in summer heat.",
    items: [
      "Choose cotton fabrics",
      "Wear light colors",
      "Avoid tight clothes",
    ],
    bg: "bg-pink-100",
  },
  {
    title: "Eat Fresh Fruits",
    image: "/summer-fruits.jpg",
    desc: "Boost energy with healthy seasonal fruits.",
    items: [
      "Eat seasonal fruits",
      "Include vitamins",
      "Avoid junk food",
    ],
    bg: "bg-green-100",
  },
];

const SummerCareTips = () => {
  return (
    <section className="w-full py-16 bg-orange-50">
      <div className="p-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-red-800 mb-10">
          🌞 Summer Care Tips
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`w-full p-4 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden ${tip.bg}`}
            >
              {/* Title - No left/right padding */}
              <h3 className="text-lg font-bold text-blue-700 px-0 pt-4 pl-4">
                {tip.title}
              </h3>

              {/* Image */}
              <div className="relative w-full h-48 mt-3">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Description - No left/right padding */}
              <p className="mt-3 text-gray-700 text-sm pl-4">
                {tip.desc}
              </p>

              {/* List - No left/right padding */}
              <ul className="px-0 py-4 pl-6 space-y-1">
                {tip.items.map((item, i) => (
                  <li key={i} className="list-disc text-green-600 pl-4">
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;
