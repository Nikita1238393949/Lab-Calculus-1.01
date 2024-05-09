import React from "react";
import { Col, Divider, Flex, Row, Typography } from "antd";
import { StyledRow, VerticalDivider } from "../components/StyledComponents";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { ReportDarbouxCharts } from "../components/NumberMethod/DarbouxSumCharts";
const ReportView = () => {
  return (
    <>
      <StyledRow gutter={16}>
        <Col span={12}>
          <Typography.Title level={2}>
            Отчет по лабораторной работе № 1.01
          </Typography.Title>
          <Divider />
          <Typography.Title level={3}>1. Постановка задачи</Typography.Title>
          <Typography.Text>
            Цель работы - изучить определённый интеграл функции методами
            аналитического вычисления и численного анализа, включая визуализацию
            и сравнение результатов.
          </Typography.Text>
          <Divider />
          <Typography.Title style={{ marginBottom: "20px" }} level={3}>
            2. Теория
          </Typography.Title>
          <Row>
            <Col span={11}>
              <Typography.Title level={5} style={{ marginTop: 0 }}>
                Суммы Дарбу
              </Typography.Title>
              <br />
              <InlineMath
                math={
                  "\\large L(f, P) = \\sum_{i=1}^{n} f(x_{i-1}) \\cdot \\Delta x"
                }
              />
              <br /> <br />
              <InlineMath
                math={
                  "\\large U(f, P) = \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x"
                }
              />
            </Col>
            <VerticalDivider type={"vertical"} />
            <Col span={11}>
              <Typography.Title level={5} style={{ marginTop: 0 }}>
                Интегралы
              </Typography.Title>
              <br />
              <InlineMath
                math={"\\large \\int_{a}^{b} f(x) \\, dx = F(b) - F(a)"}
              />
              <br />
              <br />
              <InlineMath math={"\\large F(x) = \\int f(x) \\, dx + C"} />
            </Col>
          </Row>
        </Col>
        <VerticalDivider type={"vertical"} />
        <Col span={11}>
          <Typography.Title level={3}>
            4. Используемые программные средства
          </Typography.Title>
          <ol>
            <Typography.Text>
              <li>React TypeScript - основной инструмент разработки</li>
              <li>
                Ant Design - библиотека для легковесного дизайна для страниц
              </li>
              <li>React Router Dom - инструмент для настройки роутинга</li>
              <li>React ChartJS - библиотека для визуализации графиков</li>
              <li>React KaTex - инструмент для визуализации TeX разметки</li>
              <li>
                Styled Components - инструмент для облегчения понимания стилей
              </li>
            </Typography.Text>
          </ol>
          <Divider />
          <Typography.Title level={3}>5. Результаты</Typography.Title>
          <Typography.Title level={5}>Аналитическая часть</Typography.Title>
          <ol>
            <Typography.Text>
              <li>
                Для функции
                <InlineMath math={"f(x)"} /> на интервале
                <InlineMath math={"[1;2]"} /> были построены верхние и нижние
                суммы Дарбу при равномерном разбиении отрезка на n частей. Это
                позволило оценить интеграл с верхней и нижней стороны,
                демонстрируя изменение приближения с увеличением количества
                разбиений.
              </li>
              <li>
                Доказательство интегрируемости по Риману показало, что разность
                между верхней и нижней суммами Дарбу стремится к нулю при{" "}
                <InlineMath math={"n\\to\\infty"} /> что доказывает
                интегрируемость функции на данном интервале по Риману.
              </li>
              <li>
                Были найдены точные пределы верхних и нижних сумм Дарбу,
                совпадающие между собой и с аналитически вычисленным значением
                интеграла, что подтвердило корректность расчетов.
              </li>
              <li>
                Значение интеграла, полученное аналитически, полностью совпало с
                результатом, вычисленным по формуле Ньютона-Лейбница,
                подтверждая теоретические предположения.
              </li>
            </Typography.Text>
          </ol>
          <Typography.Title level={5}>Численный метод</Typography.Title>
          <ol>
            <Typography.Text>
              <li>
                Были построены графики функции и соответствующие ступенчатые
                фигуры, отражающие суммы Дарбу. Эти визуализации иллюстрируют
                уточнение приближения интеграла с увеличением числа разбиений.
              </li>
              <li>
                Были построены и сравнены графики интегральных сумм для разных n
                с использованием случайных оснащений, что показало влияние
                выбора точек на точность приближения.
              </li>
            </Typography.Text>
          </ol>
          <Divider />
          <Typography.Title level={4}>
            Credits : Архипов Никита Глебович N3149
          </Typography.Title>
        </Col>
      </StyledRow>
      <Divider />
      <Flex vertical gap={"middle"}>
      <Typography.Title level={3}>
        3. Графики сумм Дарбу для n= 5, 10 , 35
      </Typography.Title>
      <ReportDarbouxCharts />
      </Flex>
    </>
  );
};

export default ReportView;
