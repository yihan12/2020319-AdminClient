// 应用根组件
import React from "react";
import { Button, message } from "antd";

export default class App extends React.Component {
  // 点击
  handleClick = () => {
    message.success("成功了。。。");
  };

  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        学习
      </Button>
    );
  }
}
