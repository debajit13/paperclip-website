import HeroTwo from './components/HeroTwo';
import AISelling from './components/AISelling';
import Carousel from './components/Carousel';
import BuyerFeatures from './components/BuyerFeatures';
import FooterSection from './components/Footer';
import { carouselContent, carouselSteps } from '@/constants/carouselContent';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div className='relative bg-white min-h-full flex flex-col items-center justify-center text-center pt-1 xl:pt-0  pb-6 pr-0 overflow-hidden'>
      <HeroSection />

      {/* <div className='block xl:hidden'>
        <HeroTwo />
      </div>  */}
      <AISelling />
      <Carousel
        carouselContent={carouselContent}
        carouselSteps={carouselSteps}
      />

      <BuyerFeatures />
      <FooterSection />
    </div>
  );
}
