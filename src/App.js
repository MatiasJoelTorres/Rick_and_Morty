import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
//import characters from './data.js';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Favorites from './components/Favorites/Favorites';




function App() {

   const {pathname} = useLocation(); 

   const navigate = useNavigate()

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false)

   const EMAIL = 'matias.jtor@gmail.com'
   const PASSWORD = '123456'

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {//esta función es para cerrar la ventana y que queden abiertas las que no se cierran
      setCharacters(
         characters.filter((characters) => {
            return characters.id !== Number(id)//esto es parsear, convertir el string id a numero. 
         })
      )
   }
   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch}/>}
         <Routes>
            <Route path={'/'} element={<Form login={login} />} />   
            <Route path={'/home'} element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path={'/abaut'} element={<About/>} />
            <Route path={'/detail/:id'} element={<Detail/>} />
            <Route path={'/favorites'} element={<Favorites/>} />
         </Routes>
      </div>
   );
}


export default App;
