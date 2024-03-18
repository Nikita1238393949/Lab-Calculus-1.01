import React, {useState} from "react";
import DarbouxSumsChart from "../../components/NumberMethod/DarbouxSumCharts";
import {Button, Card, Col, Collapse, Form, Input, Radio, Row, Typography} from "antd";
import RiemannSumsChart from "../../components/NumberMethod/RiemannSumsChart";
import {CheckOutlined} from "@ant-design/icons";


interface RiemannValues {
    Nvalue: number
    TypeOf: 'left' | 'right' | 'middle' | 'random';
}

const NMView = () => {
    const [darbouxDataState, setdarbouxDataState] = useState(5)
    const [riemannDataState, setRiemannDataState] = useState<RiemannValues>({Nvalue: 5, TypeOf: "random"});
    const [RiemanForm] = Form.useForm()
    return (
        <Row gutter={16}>
            <Col span={11}>
                <Typography.Title level={3}>Ступенчатые фигуры</Typography.Title>
                <Card>
                    <DarbouxSumsChart n={darbouxDataState}/>
                </Card>
                <Collapse style={{marginTop: "30px"}} items={[{
                    key: '1', label: "Try It Out", children:
                        <>
                            <Typography.Title style={{marginTop: "10px"}} level={4}>Текущее n
                                = {darbouxDataState}</Typography.Title>
                            <Input onChange={(e) => setdarbouxDataState(Number(e.target.value))}
                                   placeholder={"Введите N"} defaultValue={5}/>
                        </>
                }]}/>
            </Col>
            <Col span={11} style={{marginLeft: "25px"}}>
                <Typography.Title level={3}>Графики интегральных сумм</Typography.Title>
                <Card>
                    <RiemannSumsChart n={riemannDataState.Nvalue} method={riemannDataState.TypeOf}/>
                </Card>
                <Collapse style={{marginTop: "30px"}} items={[{
                    key: "2", label: "Try it Out", children:
                        <Form form={RiemanForm} onFinish={(values) => setRiemannDataState({
                            Nvalue: values.NValue,
                            TypeOf: values.TypeOf
                        })}>
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
                }]}/>
            </Col>
        </Row>
    )
}

export default NMView