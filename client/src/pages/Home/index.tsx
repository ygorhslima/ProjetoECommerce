import BannerCarousel from "./components/BannerCarousel";
import CategorySection from "./components/CategorySection";
import FlashSale from "./components/FlashSale";

export default function Home(){
    return(
        <main>
            <BannerCarousel/>
            <CategorySection/>
            <FlashSale/>
        </main>
    )
}