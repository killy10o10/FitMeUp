import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar, Menu, MenuItem, useProSidebar,
} from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

const Sidebars = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const userArray = useSelector((state) => state.users);
  const token = useSelector((state) => state.currentuser.token);

  return (
    <div className={`d-flex z-1 h-100 position-absolute ${collapsed ? '' : ' shadow'}`}>
      <Sidebar className="sidebar" backgroundColor="#96bf02c9" defaultCollapsed transitionDuration={100} collapsedWidth="0px">
        <Menu className="pt-5">
          <MenuItem component={<Link to="/" />} onClick={() => collapseSidebar()}> Home</MenuItem>
          {userArray.length === 0 ? '' : (
            <>
              <MenuItem component={<Link to="/appointment" />} onClick={() => collapseSidebar()}> Appoinment</MenuItem>
              <MenuItem component={<Link to="/specilatiy" />} onClick={() => collapseSidebar()}> Specilatiy</MenuItem>
              <MenuItem component={<Link to="/trainer" />} onClick={() => collapseSidebar()}> Trainer</MenuItem>
            </>
          ) }
          <MenuItem
            component={token ? <Link to="/" />
              : <Link to="/login" />}
            onClick={() => collapseSidebar()}
          >
            {token ? 'Sign Out' : 'Sign In'}
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="position-relative z-3">
        <button
          type="button"
          onClick={() => collapseSidebar()}
          className={`btn hamburger fs-3 ${collapsed ? '' : ' position-absolute sidebar-btn'}`}
        >
          <i className={`bi ${collapsed ? 'bi-list' : 'bi-x-lg'}`} />
        </button>
      </div>
    </div>
  );
};

export default Sidebars;
