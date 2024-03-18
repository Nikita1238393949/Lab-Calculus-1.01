import React, {useEffect, useState} from "react";
import DarbouxSumsChart from "../../components/NumberMethod/DarbouxSumCharts";
import {Button, Card, Col, Form, Input, Radio, Row, Typography} from "antd";
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
    useEffect(() => {
        RiemanForm.setFieldsValue({
            NValue: 5,
            TypeOf: "left"
        });
    }, []);
    return (
        <Row gutter={16}>
            <Col span={11}>
                <Typography.Title level={3}>Ступенчатые фигуры</Typography.Title>
                <Card>
                    <DarbouxSumsChart n={darbouxDataState}/>
                </Card>
                <Card style={{marginTop: "15px"}}>
                    <Form form={DarbouxForm} onFinish={(values) => setdarbouxDataState(values.DarbouxN)}>
                        <Form.Item name={"DarbouxN"} label={"Количество разбиений"}>
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Button icon={<CheckOutlined/>} type={"primary"} htmlType={"submit"}>
                                Построить
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
            <Col span={11} style={{marginLeft: "25px"}}>
                <Typography.Title level={3}>Графики интегральных сумм</Typography.Title>
                <Card>
                    <RiemannSumsChart n={riemannDataState.Nvalue} method={riemannDataState.TypeOf}/>
                </Card>
                <Card style={{marginTop: "15px"}}>
                    <Form form={RiemanForm} onFinish={(values) => {
                        setRiemannDataState({
                            Nvalue: values.NValue,
                            TypeOf: values.TypeOf
                        });
                    }}>
                        <Form.Item name={"NValue"} label={"Разбиения"}>
                            <Input defaultValue={5}/>
                        </Form.Item>
                        <Form.Item name={"TypeOf"} label={"Тип оснащения"}>
                            <Radio.Group defaultValue={"left"}>
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
                </Card>
            </Col>
        </Row>
    )
}

export default NMView