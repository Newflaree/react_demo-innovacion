// React Router Dom
import {
  Navigate,
  Routes,
  Route
} from 'react-router-dom';
// Pages
import {
  AlliancesPage,
  ContactPage,
  HeadQueartersPage,
  HomePage,
  StoragePage,
  UsersPage,

} from '../pages';


export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/storage' element={ <StoragePage /> } />
      <Route path='/users' element={ <UsersPage /> } />
      <Route path='/headquarters' element={ <HeadQueartersPage /> } />
      <Route path='/alliances' element={ <AlliancesPage /> } />
      <Route path='/contact' element={ <ContactPage /> } />

      <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  );
}
