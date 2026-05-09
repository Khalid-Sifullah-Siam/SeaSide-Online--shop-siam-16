
import Banner from "@/Componments/Banner";
import PopularProducts from "@/Componments/PopularProducts";
import SummerCareTips from "@/Componments/SummerCareTips";

export const metadata = {
  title: "SeaSide | Home",
  description: "High-quality products at the best price.",
};


export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularProducts/>
      <SummerCareTips/>
    </div>
  );
}
