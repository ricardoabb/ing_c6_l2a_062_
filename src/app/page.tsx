import dynamic from "next/dynamic";


import { TextBox } from "./components/TextBox";


import { Navigation, A11y } from 'swiper/modules';
import { register, SwiperContainer } from "swiper/element/bundle";
register();


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Menu } from "./components/Menu";




const ThreeScene = dynamic(() => import('./components/ThreeScene'), { ssr: false });


export default function Home() {



  return (
    <main className="flex relative overflow-hidden flex-col justify-center   items-center ">
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <section className="
      relative flex justify-center items-center overflow-hidden
       bg-hospital bg-cover bg-no-repeat bg-transparent bg-bottom w-screen h-screen
       before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent"
      >
        <TextBox />
        {/* <ThreeScene /> */}
      </section>
      {/* <Menu /> */}

    </main>
  );
}
