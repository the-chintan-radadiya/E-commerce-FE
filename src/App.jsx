import './App.css';
import { RouterProvider } from 'react-router';
import AppRoutes from './routes/routes';

function App() {

  return (
    <RouterProvider router={AppRoutes} />
  )
}

export default App
