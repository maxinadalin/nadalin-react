import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Contact from "./Pestañas/SobreNosotros.jsx"
// 1. Importamos los componentes de react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  let misEstilos = { backgroundColor: "rgb(158, 154, 154)",  };

  // 2. Contenemos nuestra App con el BrowserRouter
  // 3. Definimos nuestras Rutas con <Routes> y <Route>
  return (
    <div className="main" style={misEstilos}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Contacto" element={<ItemListContainer />} />
          <Route path="/compra/:itemID"element={<ItemDetailContainer />}></Route>
          <Route path="/SobreNosotros" element={< Contact/>} />

          <Route path="*" element={<h1>error 404 pagina no encontrada</h1>} />c
         
        </Routes>
        <Routes>

               </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
