import React from "react";
import { Card, Tabs, TabsProps } from "antd";
import { AlignRightOutlined, ProjectOutlined } from "@ant-design/icons";
import DarbouxTheory from "../../components/AnalyticsPart/DarbouxTheory";
import ProveRimanTheory from "../../components/AnalyticsPart/ProveRimanTheory";

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
      children: <ProveRimanTheory />,
    },
    {
      key: "3",
      label: "228",
    },
    {
      key: "4",
      label: "228",
    },
  ];
  return (
    <Card style={{ marginTop: "10px" }}>
      <Tabs items={items} />
    </Card>
  );
};
export default APView;
