import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import informacion from "./components/ItemDetail/informacion";
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
          {/* 5. Definimos un segmento para nuestra URL de detalle */}
          <Route
            path="/compra/:itemID"
            element={<ItemDetailContainer />}
          ></Route>
         
        </Routes>
        <Routes>
        <Route
            path="/Descripcion/"
            element={<informacion/>}
          ></Route>
               </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
