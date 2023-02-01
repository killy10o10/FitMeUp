import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { useAuth } from '../auth/Provider';

const Sidebars = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const { token, onLogout } = useAuth();
  const handleClick = () => {
    collapseSidebar();
  };

  return (
    <div
      className={`d-flex z-1 h-100 position-absolute sidebar-component  ${
        collapsed ? '' : ' shadow'
      }`}>
      <Sidebar
        className='sidebar'
        defaultCollapsed
        transitionDuration={100}
        collapsedWidth='0px'>
        <header>
          <h1 className='sidebar-component-title'>logo</h1>
        </header>
        <Menu className='pt-5'>
          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/' />}
            onClick={handleClick}>
            {' '}
            Home
          </MenuItem>
          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/appointment' />}
            onClick={handleClick}>
            {' '}
            Appoinment
          </MenuItem>
          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/specilatiy' />}
            onClick={handleClick}>
            {' '}
            Specilatiy
          </MenuItem>
          <MenuItem
            className='sidebar-component-item'
            component={<Link to='/trainer' />}
            onClick={handleClick}>
            {' '}
            Trainer
          </MenuItem>
          <MenuItem
            className='sidebar-component-item'
            component={
              token ? <Link to='/' onClick={onLogout} /> : <Link to='/login' />
            }
            onClick={handleClick}>
            {token ? 'Sign Out' : 'Sign In'}
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className='position-relative z-3'>
        <button
          type='button'
          onClick={handleClick}
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
