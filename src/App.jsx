import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/layout/navbar/Header.jsx";
import { ProductsList } from "./components/pages/itemListContainer/productsList";


function App() {

  let saludo = "Bienvenidos"
  
  return (
    <div>
      <Header/>
      <ProductsList saludo= {saludo}/>
    </div>
    
  );
}

export default App;
