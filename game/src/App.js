import Main from './page/main/main';
import Game from './page/game/game';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
