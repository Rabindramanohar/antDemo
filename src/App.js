import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import AppHeader from './components/common/Header';
import { Layout } from "antd";
import AppHome from './views/home';
const { Header, Content } = Layout;


function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}


export default App;
