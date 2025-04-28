import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout/Layout"
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact/Contact";
import Pets from "./pages/Meet/Pets/Pets";
import NotFound from "./pages/NotFound/NotFound";
import PetDetails from "./pages/Meet/PetDetails/PetDetails";

function App() {

  const pets = [
    {
      id: 1,
      name: 'Michi',
      type: 'Gato',
      age: 1,
      race: 'Desconocida',
      shortDescription: 'Dulce y dormilona.',
      longDescription: 'Michi es una gatita muy dulce y dormilona, ideal para quienes buscan una compañera tranquila y cariñosa. Le encanta dormir en rincones soleados y recibir caricias.',
      weight: 3.2, // kg
      gender: 'Hembra',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAuQr8svvu1MbMWsR2m4Ewtpdj2qLHXWWhA&s'
    },
    {
      id: 2,
      name: 'Firulais',
      type: 'Perro',
      age: 1,
      race: 'Desconocida',
      shortDescription: 'Juguetón y muy leal.',
      longDescription: 'Firulais es un perrito lleno de energía y lealtad. Le encanta correr, jugar a la pelota y acompañar a su familia a todas partes. Perfecto para familias activas y aventureras.',
      weight: 8.5, // kg
      gender: 'Macho',
      img: 'https://www.lanacion.com.ar/resizer/v2/el-interrogante-requiere-de-un-nuevo-orden-FHNNVHNWPNHJXBGQMNPDEULCPU.jpg?auth=9ff82c664787a5ef88400b2131451663992638ce3463a45806be23b0f7a7dae7&width=880&height=586&quality=70&smart=true'
    },
    {
      id: 3,
      name: 'Bigotes',
      type: 'Gato',
      age: 5,
      race: 'Desconocida',
      shortDescription: 'Curioso y simpático.',
      longDescription: 'Bigotes es un gato muy curioso y simpático. Siempre busca explorar su entorno y recibir mimos. Es perfecto para hogares donde reciba atención y mucho cariño.',
      weight: 4.1, // kg
      gender: 'Macho',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4ViXIUoEDKW539EcxA19WNaGkiKuiFWu8A&s'
    },
    {
      id: 4,
      name: 'Rocky',
      type: 'Perro',
      age: 6,
      race: 'Desconocida',
      shortDescription: 'Energético y obediente.',
      longDescription: 'Rocky es un perro lleno de energía, muy obediente y siempre dispuesto a salir de paseo. Ideal para personas que disfrutan de la actividad al aire libre y buscan un compañero fiel.',
      weight: 18.7, // kg
      gender: 'Macho',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EiaCiydl3CZ863HK2J5D99ZnDpkY8P7pmA&s'
    }
  ];
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/meet" element={<Pets pets={pets}/>} />
        <Route 
        path="/pets/:id" 
        element={<PetDetails pets={pets} />}  
      />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
