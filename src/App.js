import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MyProvider } from './context';
import React from 'react';
import { useSelector } from 'react-redux';
import PokemonInformation from './pages/pokemonInformation/PokemonInformation';
import Team from './pages/team/Team';
import Box from './pages/box/Box';
import Pokedex from './pages/pokedex/pokedex';
import ProtectedRoute from './utils/guards/ProtectedRoute';
import Home from './pages/home/Home';
import PkmnCatchArea from './pages/pkmnCatchArea/PkmnCatchArea';
import NotFound from './components/not-found/NotFound';


function App() {
  const store = useSelector(state => state.pkmnInformation.pkmnInformation)
   const basename = process.env.NODE_ENV === 'production' ? '/pokemon-react-app' : '/';
    return (
          <Router basename={basename}>
            <MyProvider>
              <div className='container-fluid p-0  h-100'>
                <div className='row g-0 h-100'>
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
                <Route path='*'  element={<NotFound />} />
              </Routes>
              </div>
              </div>
          </MyProvider>
        </Router>
  );
}

export default App;

//  "homepage": "https://francescobert97.github.io/pokemon-react-app/",
