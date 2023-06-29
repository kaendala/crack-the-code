import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { items } from './MenuProps';
import { Menu } from 'antd';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={'/logo.svg'} />
      <Menu mode="horizontal" items={items} />
      <UserOutlined rev className="login" />
    </header>
  );
};

export default Header;
