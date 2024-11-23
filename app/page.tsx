import Cover from "@/components/Cover";
import News from "@/components/News";
import Head from 'next/head';
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
    <Cover />
    <About />
    <Team />
    <News />
    <Projects />
    </>
  );
}
