
import { Navbar } from './../components/Navbar';
import { Hero } from './../components/Hero';
import { Stack } from "./../components/Stack";
import { Portfolio } from './../components/Portfolio';
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";


export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Stack/>
   <Portfolio/>
   <Skills/>
   <Contact />
   {/* <LogoAnimation/> */}
   </>
  );
}
