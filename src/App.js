import "./App.css";
import { Carasol } from "./componsents/Carasol";
import { Destination } from "./componsents/Destination";
import { Hero } from "./componsents/Hero";
import { Navbar } from "./componsents/Navbar";
import { Search } from "./componsents/Search";
import { Select } from "./componsents/Select";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Destination/>
      <Search/>
      <Select/>
      <Carasol/>
    </div>
  );
}

export default App;
