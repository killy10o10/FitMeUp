import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

const Sidebars = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div
      className={`d-flex z-1 h-100 position-absolute ${
        collapsed ? '' : ' shadow'
      }`}>
      <Sidebar
        className='sidebar sidebar-component'
        backgroundColor='white'
        defaultCollapsed
        transitionDuration={100}
        collapsedWidth='0px'>
        <Menu className='pt-5'>
          <header>
            <h1 className='sidebar-component-title'>logo</h1>
          </header>

          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/' />}
            onClick={() => collapseSidebar()}>
            {' '}
            Home
          </MenuItem>
          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/date' />}
            onClick={() => collapseSidebar()}>
            {' '}
            Book
          </MenuItem>
          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/appointment' />}
            onClick={() => collapseSidebar()}>
            {' '}
            Appoinment
          </MenuItem>
          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/specilatiy' />}
            onClick={() => collapseSidebar()}>
            {' '}
            Specilatiy
          </MenuItem>
          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/trainer' />}
            onClick={() => collapseSidebar()}>
            {' '}
            Trainer
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className='position-relative z-3'>
        <button
          type='button'
          onClick={() => collapseSidebar()}
          className={`btn hamburger fs-3 ${
            collapsed ? '' : ' position-absolute sidebar-btn'
          }`}>
          <i className={`bi ${collapsed ? 'bi-list' : 'bi-x-lg'}`} />
        </button>
      </div>
    </div>
  );
};

export default Sidebars;
