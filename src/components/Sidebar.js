/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import {
  Sidebar, Menu, MenuItem, useProSidebar,
} from 'react-pro-sidebar';

const Sidebars = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div className={`d-flex h-100 position-absolute ${collapsed ? '' : ' shadow'}`}>
      <Sidebar className="sidebar" backgroundColor="transparent" defaultCollapsed transitionDuration={100} collapsedWidth="0px">
        <Menu className="pt-5">
          <MenuItem component={<Link to="/" />}> Trainer</MenuItem>
          <MenuItem component={<Link to="/" />}> User</MenuItem>
          <MenuItem component={<Link to="/appointment" />}> Appoinment</MenuItem>
        </Menu>
      </Sidebar>
      <div className="position-relative">
        <button
          type="button"
          onClick={() => collapseSidebar()}
          className={`btn hamburger fs-3 ${collapsed ? '' : ' position-absolute z-3 sidebar-btn'}`}
        >
          <i className={`bi ${collapsed ? 'bi-list' : 'bi-x-lg'}`} />
        </button>
      </div>
    </div>
  );
};

export default Sidebars;
