import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import "./App.css";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div
      className="App"
      style={{ padding: "0.5rem 3.5rem", overflow: "hidden" }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
