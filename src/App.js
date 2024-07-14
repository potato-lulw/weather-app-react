import Navbar from "./components/Navbar";
import { CityProvider } from "./context/CityContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";


function App() {
  return (
    <div className="App  max-w-screen flex flex-col items-center mx-auto bg-sky-50">
      <CityProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details" element={<Details/>}/>
            
          </Routes>


        </BrowserRouter>
      </CityProvider>

    </div>
  );
}

export default App;
