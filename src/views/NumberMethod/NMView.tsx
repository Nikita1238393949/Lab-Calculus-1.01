import React, {useState} from "react";
import DarbouxSumsChart from "../../components/NumberMethod/DarbouxSumCharts";
import {Button, Card, Col, Divider, Form, Input, Radio, Row, Typography} from "antd";
import RiemannSumsChart from "../../components/NumberMethod/RiemannSumsChart";
import {CheckOutlined} from "@ant-design/icons";

interface RiemannValues {
    Nvalue: number
    TypeOf: 'left' | 'right' | 'middle' | 'random';
}

const NMView = () => {
    const [darbouxDataState, setdarbouxDataState] = useState(5)
    const [riemannDataState, setRiemannDataState] = useState<RiemannValues>({Nvalue: 5, TypeOf: "left"});
    const [RiemanForm] = Form.useForm()
    const [DarbouxForm] = Form.useForm()
    return (
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]} justify="center" align="top">
            <Col span={10}>
                <Typography.Title level={3}>Ступенчатые фигуры</Typography.Title>
                <Card style={{marginBottom: "20px"}}>
                    <DarbouxSumsChart n={darbouxDataState}/>
                </Card>
                <Form form={DarbouxForm} onFinish={(values) => setdarbouxDataState(values.DarbouxN)} initialValues={{DarbouxN: 5}}>
                    <Form.Item name={"DarbouxN"} label={"Количество разбиений"}>
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Button icon={<CheckOutlined/>} type={"primary"} htmlType={"submit"}>
                            Построить
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
                <Divider type="vertical" style={{height:"550px", marginRight:"30px", marginLeft:"30px"}}/>
            <Col span={10}>
                <Typography.Title level={3}>Графики интегральных сумм</Typography.Title>
                <Card style={{marginBottom: "20px"}}>
                    <RiemannSumsChart n={riemannDataState.Nvalue} method={riemannDataState.TypeOf}/>
                </Card>
                <Form form={RiemanForm} onFinish={(values) => {
                    setRiemannDataState({
                        Nvalue: values.NValue,
                        TypeOf: values.TypeOf
                    });
                }} initialValues={{NValue: 5 , TypeOf : "left"}}>
                    <Form.Item name={"NValue"} label={"Разбиения"}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={"TypeOf"} label={"Тип оснащения"}>
                        <Radio.Group>
                            <Radio value={"left"}>Левые</Radio>
                            <Radio value={"right"}>Правые</Radio>
                            <Radio value={"middle"}>Средние</Radio>
                            <Radio value={"random"}>Случайные</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button icon={<CheckOutlined/>} type={"primary"} htmlType={"submit"}>
                            Построить
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default NMView