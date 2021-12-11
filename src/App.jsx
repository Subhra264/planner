import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import Registration from './components/Registration/Registration';
// import useAuth from './hooks/useAuth';

function App() {
  // const { currentUser } = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Registration />} />
        <Route element={<PrivateRouter />}>
          <Route element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
