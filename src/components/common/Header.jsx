import React from "react";
import { Menu } from "antd";

function AppHeader() {
    return (
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <i className="fa-solid fa-meteor"></i>
            <a href="http://www.google.com">Robin</a>
          </div>
          <Menu mode="horizontal" multiple="true" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="features">Features</Menu.Item>
            <Menu.Item key="howitworks">How it works</Menu.Item>
            <Menu.Item key="faq">Faq</Menu.Item>
            <Menu.Item key="pricing">Pricing</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
          </Menu>
        </div>
      </div>
    );
}

export default AppHeader;