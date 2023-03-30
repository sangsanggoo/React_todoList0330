import { Global } from '@emotion/react';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Route, Routes } from 'react-router-dom';
import MainAside from './components/Aside/MainAside/MainAside';
import Home from './pages/Home/home';
import Todo from './pages/Todo/Todo';
import { reset } from './styles/Global/reset';


function App() {
  return (
    <>
      <Global styles={reset}/>
      <MainAside />
      <Routes>

        <Route path="/home" Component={Home} />
        <Route path="/todo" Component={Todo} />
      </Routes>
    </>
  );
}

export default App;