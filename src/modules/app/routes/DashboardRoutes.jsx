// React Router Dom
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
// Pages
import {
  HomePage
} from '../pages';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
}
