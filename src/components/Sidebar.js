import { Link } from 'react-router-dom';
import {
  Sidebar, Menu, MenuItem, useProSidebar,
} from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import Socials from './Socials';
import logo from '../images/fitmeup-logo.svg';

const Sidebars = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const user = useSelector((state) => state.currentuser);

  const handleClick = () => {
    collapseSidebar();
  };

  return (
    <div
      className={`d-flex z-1 position-absolute ${
        collapsed ? '' : ' shadow'
      }`}
    >
      <Sidebar
        className="sidebar sidebar-component"
        backgroundColor="white"
        defaultCollapsed
        transitionDuration={100}
        collapsedWidth="0px"
      >
        <Menu className="pt-5">
          <header className="logo-header d-flex align-items-center justify-content-center">
            <img className="img-fluid sidebar-component-title" src={logo} alt="Fit Me UP" />
          </header>

          <MenuItem
            className="sidebar-component-item"
            component={<Link to="/" />}
            onClick={handleClick}
          >
            Home
          </MenuItem>
          <MenuItem
            className="sidebar-component-item"
            component={<Link to="/appointment" />}
            onClick={handleClick}
          >
            Appoinment
          </MenuItem>
          <MenuItem
            className="sidebar-component-item"
            component={<Link to="/appointment-details" />}
            onClick={handleClick}
          >
            Appoint. Details
          </MenuItem>
          {user.token && user.data.role === 'admin' ? (
            <>
              <MenuItem
                className="sidebar-component-item"
                component={<Link to="/specilatiy" />}
                onClick={handleClick}
              >
                Specilatiy
              </MenuItem>
              <MenuItem
                className="sidebar-component-item"
                component={<Link to="/trainer" />}
                onClick={handleClick}
              >
                Trainer
              </MenuItem>
            </>
          ) : null}
          <MenuItem
            component={user.token ? <Link to="/" />
              : <Link to="/login" />}
            className="sidebar-component-item"
            onClick={handleClick}
          >
            {user.token ? 'Sign Out' : 'Sign In'}
          </MenuItem>
        </Menu>
        <footer>
          <Socials />
        </footer>
      </Sidebar>
      <div className="position-relative z-3">
        <button
          type="button"
          onClick={handleClick}
          className={`btn hamburger fs-3 ${
            collapsed ? '' : ' position-absolute sidebar-btn'
          }`}
        >
          <i className={`bi ${collapsed ? 'bi-list' : 'bi-x-lg'}`} />
        </button>
      </div>
    </div>
  );
};

export default Sidebars;
