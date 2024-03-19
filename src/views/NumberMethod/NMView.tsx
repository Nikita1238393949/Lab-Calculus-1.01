import React, { useState } from "react";
import DarbouxSumsChart from "../../components/NumberMethod/DarbouxSumCharts";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Radio,
  Row,
  Typography,
} from "antd";
import RiemannSumsChart from "../../components/NumberMethod/RiemannSumsChart";
import { CheckOutlined } from "@ant-design/icons";

interface RiemannDataValues {
  RiemannN: number;
  TypeOf: "left" | "right" | "middle" | "random";
  from: number;
  to: number;
}

interface RiemannFormValues {
  RiemannN: number;
  interval: string;
  TypeOf: "left" | "right" | "middle" | "random";
}

interface DarbouxFormValues {
  DarbouxN: number;
  interval: string;
}

const NMView = () => {
  const [darbouxDataState, setdarbouxDataState] = useState({
    NValueDarboux: 5,
    from: 0,
    to: 0,
  });
  const [riemannDataState, setRiemannDataState] = useState<RiemannDataValues>({
    RiemannN: 5,
    TypeOf: "left",
    from: 0,
    to: 0,
  });
  const [RiemanForm] = Form.useForm();
  const [DarbouxForm] = Form.useForm();

  const onFinishRiemann = (values: RiemannFormValues) => {
    const from = Number(values.interval[1]);
    const to = Number(values.interval[3]);
    setRiemannDataState({
      RiemannN: values.RiemannN,
      TypeOf: values.TypeOf,
      from: from,
      to: to,
    });
  };
  const onFinishDarboux = (values: DarbouxFormValues) => {
    const from = Number(values.interval[1]);
    const to = Number(values.interval[3]);
    setdarbouxDataState({
      NValueDarboux: values.DarbouxN,
      to: to,
      from: from,
    });
  };
  return (
    <Row
      gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}
      justify="center"
      align="top"
    >
      <Col span={10}>
        <Typography.Title level={3}>Ступенчатые фигуры</Typography.Title>
        <Card style={{ marginBottom: "20px" }}>
          <DarbouxSumsChart
            n={darbouxDataState.NValueDarboux}
            from={darbouxDataState.from}
            to={darbouxDataState.to}
          />
        </Card>
        <Form
          form={DarbouxForm}
          onFinish={onFinishDarboux}
          initialValues={{ DarbouxN: 5, interval: "[1,2]" }}
        >
          <Form.Item name={"DarbouxN"} label={"Количество разбиений"}>
            <Input />
          </Form.Item>
          <Form.Item name={"interval"} label={"Введите интервал:"}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              icon={<CheckOutlined />}
              type={"primary"}
              htmlType={"submit"}
            >
              Построить
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Divider
        type="vertical"
        style={{ height: "550px", marginRight: "30px", marginLeft: "30px" }}
      />
      <Col span={10}>
        <Typography.Title level={3}>Графики интегральных сумм</Typography.Title>
        <Card style={{ marginBottom: "20px" }}>
          <RiemannSumsChart
            n={riemannDataState.RiemannN}
            method={riemannDataState.TypeOf}
            from={riemannDataState.from}
            to={riemannDataState.to}
          />
        </Card>
        <Form
          form={RiemanForm}
          onFinish={onFinishRiemann}
          initialValues={{ RiemannN: 5, TypeOf: "left", interval: "[1,2]" }}
        >
          <Form.Item name={"RiemannN"} label={"Разбиения"}>
            <Input />
          </Form.Item>
          <Form.Item name={"TypeOf"} label={"Тип оснащения"}>
            <Radio.Group>
              <Radio value={"left"}>Левые</Radio>
              <Radio value={"right"}>Правые</Radio>
              <Radio value={"middle"}>Средние</Radio>
              <Radio value={"random"}>Случайные</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name={"interval"} label={"Введите интервал"}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              icon={<CheckOutlined />}
              type={"primary"}
              htmlType={"submit"}
            >
              Построить
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default NMView;
