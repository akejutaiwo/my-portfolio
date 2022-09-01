
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Service from './Components/Services/Service';
// import Intro from './Components/Intro/intro';


function App() {
  return (
    <div className="App">
      <Header />
     <Intro />
     <About />
     <Service />
     
    </div>
  );
}

export default App;