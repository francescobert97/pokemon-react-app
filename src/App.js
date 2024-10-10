import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyProvider } from './context';
import React from 'react';
import Navbar from './layout/navbar/Navbar';
import { useSelector } from 'react-redux';
import PokemonInformation from './pages/pokemonInformation/PokemonInformation';
import Team from './pages/team/Team';
import Box from './pages/box/Box';
import Pokedex from './pages/pokedex/pokedex';
import ProtectedRoute from './utils/guards/ProtectedRoute';
import Home from './pages/home/Home';
import PkmnCatchArea from './pages/pkmnCatchArea/PkmnCatchArea';


function App() {
  const store = useSelector(state => state.pkmnInformation.pkmnInformation)
  console.log(store)
  return (
          <Router basename="/pokemon-react-app">
            <MyProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team/*" element={<Team />}/>                  
                <Route path="/box" element={<Box />}/>
                <Route path="/pokedex" element={<Pokedex />}/>
                <Route path="/pkmnCatchArea" element={<PkmnCatchArea />}/>
                <Route path="/information/:pkmn/*" element={
                  <ProtectedRoute condition={store.uniqueId}>
                    <PokemonInformation />
                  </ProtectedRoute> 
                }/>
              </Routes>
          </MyProvider>

        </Router>
  );
}

export default App;
