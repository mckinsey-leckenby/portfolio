import React, {useState} from "react"
import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle"

const App = () => {
  const [dark, setDark] = useState(false)
return <div>
  <Toggle/>
  <Intro/>
  <About/>
  <Contact/>
  </div>;
};

export default App;