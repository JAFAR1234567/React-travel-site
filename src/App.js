import "./App.css";
import { Destination } from "./componsents/Destination";
import { Hero } from "./componsents/Hero";
import { Navbar } from "./componsents/Navbar";
import { Search } from "./componsents/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Destination/>
      <Search/>
    </div>
  );
}

export default App;
