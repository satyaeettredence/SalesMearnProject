

import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Provider } from 'react-redux';
import store from '../../ReduxState/store';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined, HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import './layout.css'; // Custom CSS for additional styling
// import UsersList from '';
import Sales from '../sales/sales';
import Inventory from '../inventory/Inventory';
import UserActivity from '../userActivity/userActivity';
import TestMock from '../test/test';



const { Header, Sider, Content, Footer } = Layout;


const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);


  const location = useLocation(); 
  const isSalesPage = location.pathname === '/sales';
  const isUserPage = location.pathname === '/user';
  const isInventoryPage = location.pathname === '/inventory';

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Provider store={store}>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        className="site-layout-background"
        width={200}
      >
        <div className="logo">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleSidebar}
            className="menu-toggle"
          />
          { !collapsed && <span>
            
            My App</span> }
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/sales">Sales Analytics</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/user">User Activities</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
          <Link to="/inventory">Inventory Status Status</Link>
          
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-content">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={toggleSidebar}
              className="menu-toggle"
            />
            <span className="header-title">My App</span>
          </div>
        </Header>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {/* Content goes here */}
            {isSalesPage &&  <Sales />}
        
            {isUserPage && <UserActivity />}
            {isInventoryPage && <Inventory />}
            <TestMock/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        Copyright ©2024 
        </Footer>
      </Layout>
    </Layout>
    </Provider>
  );
};

export default LayoutComponent;


