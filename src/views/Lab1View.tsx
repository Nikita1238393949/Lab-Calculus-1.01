import React from "react";
import { Card, Tabs, TabsProps, Typography } from "antd";
import {
  BookOutlined,
  FieldNumberOutlined,
  FunctionOutlined,
} from "@ant-design/icons";
import NMView from "./NMView";
import APView from "./APView";
import ReportView from "./ReportView";

const Lab1View = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Аналитическая часть",
      icon: <FunctionOutlined />,
      children: <APView />,
    },
    {
      key: "2",
      label: "Численный метод",
      icon: <FieldNumberOutlined />,
      children: <NMView />,
    },
    {
      key: "3",
      label: "Отчет",
      icon: <BookOutlined />,
      children: <ReportView />,
    },
  ];
  return (
    <div style={{ margin: "50px" }}>
      <Typography.Title>Определённый интеграл Римана ∫∫∫</Typography.Title>
      <Card>
        <Tabs items={items} />
      </Card>
    </div>
  );
};

export default Lab1View;
