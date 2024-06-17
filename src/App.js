import Navbar from "./components/Navbar";
import { CityProvider } from "./context/CityContextProvider";

import Home from "./pages/Home";


function App() {
  return (
    <div className="App max-h-screen flex flex-col items-center mx-auto bg-sky-50">
      <CityProvider>
        <Navbar />
        <Home />
      </CityProvider>
      
    </div>
  );
}

export default App;
