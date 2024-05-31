// React
import {
  useEffect,
  useState
} from 'react';
// React Router Dom
import {
  useLocation,
  useNavigate
} from 'react-router-dom';


export const Sidebar = () => {
  
  const location = useLocation();
  const navigate = useNavigate();

  const [ path, setPath ] = useState( '/' );

  const handleNavigate = ( path = '' ) => {
    navigate( path );
  }

  useEffect( () => {
    const setPathState = () => {
      setPath( location.pathname )
    }

    setPathState();
  }, [] );

  return (
      <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">
          <a className="sidebar-brand d-flex align-items-center justify-content-center">
              <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink"></i>
              </div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li
            className={ `nav-item ${ ( path === '/' ) ? 'active' : '' }` }
          >
            <a
              className="cursor-pointer nav-link"
              onClick={ () => handleNavigate( '/' ) }
            >
            <i className="fas fa-home"></i>
                  <span>Inicio</span></a>
          </li>

          <li
            className={ `nav-item ${ ( path === '/storage' ) ? 'active' : '' }` }
            onClick={ () => handleNavigate( 'storage' ) }
          >
            <a
              className="cursor-pointer nav-link"
              onClick={ () => handleNavigate( 'storage' ) }
            >
                  <i className="fas fa-warehouse"></i>
                  <span>Bodega</span></a>
          </li>

          <li
            className={ `nav-item ${ (  path === '/users' ) ? 'active' : '' }` }
          >
            <a
              className="cursor-pointer nav-link"
              onClick={ () => handleNavigate( '/users' ) }
            >
            <i className="fas fa-home"></i>
                  <span>Usuarios</span></a>
          </li>

          <li
            className={ `nav-item ${ ( path === '/headquarters' ) ? 'active' : '' }` }
          >
            <a
              className="cursor-pointer nav-link"
            onClick={ () => handleNavigate( '/headquarters' ) }
            >
            <i className="fas fa-home"></i>
                  <span>Sedes</span></a>
          </li>


          <li
            className={ `nav-item ${ ( path === '/alliances' ) ? 'active' : '' }` }
          >
            <a
              className="cursor-pointer nav-link"
              onClick={ () => handleNavigate( '/alliances' ) }
            >
                  <i className="fas fa-handshake"></i>
                  <span>Alianza</span></a>
          </li>

          <hr className="sidebar-divider my-0" />

          <li
            className={ `nav-item ${ ( path === '/auth/login' ) ? 'active' : '' }` }
          >
            <a
              className="cursor-pointer nav-link"
              onClick={ () => handleNavigate( '/auth/login' ) }
            >
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Cerrar Sesión</span></a>
          </li>
      </ul>
  )
}
