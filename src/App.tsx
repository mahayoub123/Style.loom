
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="bg-white dark:bg-dark-06  ">
      <div>
        <NavBar/>
      </div>

      <main>
        <Outlet />
      </main>

      <Footer/>
    </div>

  );
}

export default App;
