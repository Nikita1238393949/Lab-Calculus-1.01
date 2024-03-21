import React from "react";
import { Col, Divider, Typography } from "antd";
import { StyledRow, VerticalDivider } from "../components/StyledComponents";
const ReportView = () => {
  return (
    <StyledRow gutter={16}>
      <Col span={12}>
        <Typography.Title level={2}>
          Отчет по лабораторной работе № 1.01
        </Typography.Title>
        <Divider />
        <Typography.Title level={3}>1. Постановка задачи</Typography.Title>

        <Divider />
      </Col>
      <VerticalDivider type={"vertical"} />
    </StyledRow>
  );
};

export default ReportView;
