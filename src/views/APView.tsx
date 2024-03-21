import React from "react";
import { Card, Tabs, TabsProps } from "antd";
import {
  AlignRightOutlined,
  ProductOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import DarbouxTheory from "../components/AnalyticsPart/DarbouxTheory";
import ProveRimannTheory from "../components/AnalyticsPart/ProveRimanTheory";
import CheckIntegralTheory from "../components/AnalyticsPart/CheckIntegralTheory";

const APView = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Суммы Дарбу",
      icon: <ProjectOutlined />,
      children: <DarbouxTheory />,
    },
    {
      key: "2",
      label: "Доказательство интегрируемости",
      icon: <AlignRightOutlined />,
      children: <ProveRimannTheory />,
    },
    {
      key: "3",
      label: "Проверка интеграла",
      icon: <ProductOutlined />,
      children: <CheckIntegralTheory />,
    },
  ];
  return (
    <Card style={{ marginTop: "10px" }}>
      <Tabs items={items} />
    </Card>
  );
};
export default APView;
