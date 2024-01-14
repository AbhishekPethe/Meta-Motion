import "./App.css";
import { Footer, Navbar } from "./components";
import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "./sections";

import "./index.css"

function App() {
  return (
    <>
      <div className="bg-primary-black overflow-hidden">

      <Navbar />
      <Hero />

      <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
      </div>
    </>
  );
}

export default App;
