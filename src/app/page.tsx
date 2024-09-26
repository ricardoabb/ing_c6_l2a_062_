import dynamic from "next/dynamic";
import { Title } from "./components/Title";
import { Menu } from "./components/Menu";
import { TextBox } from "./components/TextBox";
import AudioPlayer from "./components/AudioPlayer";
import FloatingElements from "./components/FloatingElement";


const ThreeScene = dynamic(() => import('./components/ThreeScene'), { ssr: false });


export default function Home() {



  return (
    <main className="overflow-hidden bg-gradient-to-b from-pink-500 via-indigo-700 to-cyan-500 bg-whiteflex flex-col justify-center items-center w-full h-screen">
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <section className="relative pt-10 bg-modal bg-transparent w-screen h-screen">
        <AudioPlayer />
        <Title title="Língua Inglesa" />
        <TextBox />

        <Menu />
        <ThreeScene />
        <FloatingElements />
      </section>
    </main>
  );
}
