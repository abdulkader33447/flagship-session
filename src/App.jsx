import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      
      <h1 class="text-3xl font-bold underline">Navbar</h1>
      <Outlet/>
      <h1 class="text-3xl font-bold underline">Footer</h1>
      
    </>
  );
}

export default App;
