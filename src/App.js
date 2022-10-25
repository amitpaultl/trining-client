import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './Component/AllRoutes/Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <RouterProvider router={route}>
      <Toaster></Toaster>
    </RouterProvider>
  );
}

export default App;
