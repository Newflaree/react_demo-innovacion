// React
import { Fragment } from 'react';
// React Router Dom
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
// Routes
import { DashboardRoutes } from '../modules';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={ <DashboardRoutes /> } />
    </Routes>
  );
}
