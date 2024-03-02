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
import User from "./UserPage/User";
import Vehicle from "./VehiclePage/Vehicle";
import { useSelector } from "react-redux";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Phương tiện", "vehicles", <AppstoreOutlined />),
  getItem("Người dùng", "users", <UserOutlined />),
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
  const user = useSelector((state) => state.user);
  const rootSubmenuKeys = ["user", "product"];
  const [openKeys, setOpenKeys] = useState(["user"]);
  const [keySelect, setKeyselect] = useState("vehicles");
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const handleOnclick = ({ key }) => {
    setKeyselect(key);
    console.log("kEY ĐÃ được select: ", keySelect);
  };
  let renderPage = () => {
    if (keySelect === "users") {
      return <User />;
    } else return <Vehicle />;
  };
  return user?.isAdmin ? (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Menu
        style={{
          width: 256,
          borderRadius: 10,
          height: "100vh",
        }}
        onClick={handleOnclick}
        defaultSelectedKeys={["vehicles"]}
        defaultOpenKeys={["vehicles"]}
        mode={"inline"}
        // theme={"light"}
        items={items}
      />

      {/* <Switch onChange={changeMode} /> Mode
        <Divider type="vertical" />
        <Switch onChange={changeTheme} /> Style */}
      <div style={{ flex: 1, padding: "15px 0 15px 15px" }}>{renderPage()}</div>
    </div>
  ) : (
    <div style={{ marginTop: "100px", padding: "100px", fontSize: "100px" }}>
      Bạn không có quyền truy cập trang web này trừ anh TOÀN đẹp trai
    </div>
  );
};

export default AdminPage;
