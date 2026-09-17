import { useReveal } from "./hooks/useReveal";
import Masthead from "./components/Masthead";
import Hero from "./components/Hero";
import Capability from "./components/Capability";
import Record from "./components/Record";
import Work from "./components/Work";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import TitleBlock from "./components/TitleBlock";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#capability">
        Skip to content
      </a>
      <div className="margin-rule" aria-hidden="true" />
      <Masthead />
      <Hero />
      <main>
        <Capability />
        <Record />
        <Work />
        <Credentials />
        <Contact />
      </main>
      <TitleBlock />
    </>
  );
}
