import { Fragment } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

// Context
import { AppContextProvider, useAppContext } from './context';

// Pages
import SideNav from './components/SideNav';

function App() {

  const appContext = useAppContext();

  return (
    <Fragment>
      <AppContextProvider value={appContext}>
        <BrowserRouter>
        <div>
        <SideNav />
          </div>
          <Routes>
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </Fragment>
  );
}

export default App;
