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
          <MenuItem component={<Link to="/" />} onClick={() => collapseSidebar()}> Trainer</MenuItem>
          <MenuItem component={<Link to="/date" />} onClick={() => collapseSidebar()}> Book</MenuItem>
          <MenuItem component={<Link to="/appointment" />} onClick={() => collapseSidebar()}> Appoinment</MenuItem>
        </Menu>
      </Sidebar>
      <div className="position-relative">
        <button
          type="button"
          onClick={() => collapseSidebar()}
          className={`btn fs-3 ${collapsed ? '' : ' position-absolute z-3 sidebar-btn'}`}
        >
          <i className={`bi ${collapsed ? 'bi-list' : 'bi-x-lg'}`} />
        </button>
      </div>
    </div>
  );
};

export default Sidebars;
