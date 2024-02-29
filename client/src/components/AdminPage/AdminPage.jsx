import {
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Người dùng", "users", <UserOutlined />),
  getItem("Phương tiện", "products", <AppstoreOutlined />),
  // getItem(
  //   <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //     Ant Design
  //   </a>,
  //   "link",
  //   <LinkOutlined />
  // ),
];
const AdminPage = () => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");
  const rootSubmenuKeys = ["user", "product"];
  const [openKeys, setOpenKeys] = useState(["user"]);
  const [keySelect, setKeyselect] = useState("");
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const handleOnclick = ({ key, item, keyPath, domEvent }) => {
    setKeyselect(key);
    console.log(keySelect);
  };
  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div>
        <Menu
          style={{
            width: 256,
            borderRadius: 10,
          }}
          onClick={handleOnclick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={"inline"}
          theme={"light"}
          items={items}
        />

        {/* <Switch onChange={changeMode} /> Mode
        <Divider type="vertical" />
        <Switch onChange={changeTheme} /> Style */}
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default AdminPage;
