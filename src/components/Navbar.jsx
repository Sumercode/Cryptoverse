import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    // console.log(window.innerWidth)
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className='logo'>
          <NavLink to='/'>Cryptoverse</NavLink>
        </Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && ( <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}>
          <NavLink to='/'>Home</NavLink>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
          <NavLink to='/cryptocurrencies'>cryptocurrencies</NavLink>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
          <NavLink to='/exchanges'>Exchanges</NavLink>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
          <NavLink to='/news'>News</NavLink>
        </Menu.Item>
      </Menu>
      )}
    </div>
  )
}

export default Navbar
