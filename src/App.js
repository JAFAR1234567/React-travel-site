import "./App.css";
import { Destination } from "./componsents/Destination";
import { Hero } from "./componsents/Hero";
import { Navbar } from "./componsents/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Destination/>
    </div>
  );
}

export default App;
