import "./App.css";
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
    </div>
  );
}

export default App;
