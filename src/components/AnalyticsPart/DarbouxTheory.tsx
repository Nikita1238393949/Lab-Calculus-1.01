import React from "react";
import { Col, Divider, Typography } from "antd";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { StyledRow } from "../StyledComponents";

const DarbouxTheory = () => {
  return (
    <>
      <StyledRow gutter={16}>
        <Col span={11}>
          <Typography.Title level={2}>
            Построить верхнюю и нижнюю суммы Дарбу для равномерного разбиения на
            n частей.
          </Typography.Title>
          <Divider />
          <Typography.Title level={3}>
            Шаг 1: Определение размера подинтервала
          </Typography.Title>
          <Typography.Text>
            Интервал <InlineMath math={"[1,2]"} /> разбивается на n равных
            частей, так что каждый подинтервал имеет размер:{" "}
            <BlockMath
              math={
                "\\large\\Delta x = \\frac{b - a}{n} = \\frac{2 - 1}{n} = \\frac{1}{n}\n"
              }
            />
          </Typography.Text>
          <Divider />
          <Typography.Title level={3}>
            Шаг 2: Точки разбиения и значения функции
          </Typography.Title>
          <Typography.Text>
            Точки разбиения задаются как{" "}
            <BlockMath
              math={
                "\\large x_i = 1 + i \\cdot \\Delta x, \\ где \\ i = 0, 1, \\ldots, n"
              }
            />
          </Typography.Text>
          <Divider />
          <Typography.Title level={3}>
            Шаг 3: Нижняя и верхняя суммы Дарбу
          </Typography.Title>
          <Typography.Text>
            Для нижней суммы Дарбу <InlineMath math={"L(f,p)"} /> на каждом
            подинтервале берется минимальное значение функции, что для{" "}
            <InlineMath math={"f(x)=x^2"} /> на нашем интервале будет в начале
            каждого подинтервала. Таким образом{" "}
            <BlockMath math={"\\large m_i=f(x_{i-1})"} />
          </Typography.Text>
          <Typography.Text>
            Для верхней суммы Дарбу <InlineMath math={"U(f,p)"} /> что для{" "}
            <InlineMath math={"f(x)=x^2"} /> на нашем интервале будет в конце
            каждого подинтервала. Таким образом{" "}
            <BlockMath math={"\\large M_i=f(x_i)=x_i^2"} />
          </Typography.Text>
          <Divider />
          <Typography.Title level={3}>Шаг 4: Формулы для сумм</Typography.Title>
          <BlockMath
            math={
              "\\large L(f, P) = \\sum_{i=1}^{n} f(x_{i-1}) \\cdot \\Delta x = \\sum_{i=1}^{n} \\left(1 + (i-1)\\cdot\\frac{1}{n}\\right)^2 \\cdot \\frac{1}{n}\n"
            }
          />
          <BlockMath
            math={
              "\\large U(f, P) = \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x = \\sum_{i=1}^{n} \\left(1 + i\\cdot\\frac{1}{n}\\right)^2 \\cdot \\frac{1}{n}\n"
            }
          />
        </Col>
        <Divider
          type={"vertical"}
          style={{ height: "auto", marginRight: "20px" }}
        />
        <Col span={12}>
          <Typography.Title level={3}>
            Вычисления для <InlineMath math={"U(f,P)"} /> и{" "}
            <InlineMath math={"L(f,P)"} />
          </Typography.Title>

          <Typography.Title level={4}>
            Шаг 1: Подстановка и упрощение
          </Typography.Title>
          <BlockMath
            math={
              "\\large L(f, P) = \\frac{1}{n^3} \\sum_{i=1}^{n} \\left(n^2 + 2n(i-1) + (i-1)^2\\right)\n"
            }
          />
          <BlockMath
            math={
              "\\large U(f, P) = \\frac{1}{n^3} \\sum_{i=1}^{n} (n^2 + 2in + i^2)"
            }
          />
          <Typography.Title level={4}>
            Шаг 2: Разделение формулы
          </Typography.Title>
          <BlockMath
            math={
              "\\large L(f, P) = \\frac{1}{n^3} \\left(n^3 + 2n \\sum_{i=1}^{n} (i-1) + \\sum_{i=1}^{n} (i-1)^2\\right)"
            }
          />
          <BlockMath
            math={
              "\\large U(f, P) = \\frac{1}{n^3} \\left( \\sum_{i=1}^{n} n^2 + \\sum_{i=1}^{n} 2in + \\sum_{i=1}^{n} i^2 \\right)\n"
            }
          />
          <Typography.Title level={4}>
            Шаг 3: Использование известных формул сумм
          </Typography.Title>
          <Typography.Text>
            Заметим что{" "}
            <InlineMath
              math={"\\sum_{i=1}^{n} (i-1) = \\sum_{i=1}^{n} i - n"}
            />{" "}
            и{" "}
            <InlineMath
              math={
                "\\sum_{i=1}^{n} (i-1)^2 = \\sum_{i=1}^{n} i^2 - 2\\sum_{i=1}^{n} i + n\n"
              }
            />{" "}
            , тогда
          </Typography.Text>
          <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
            <BlockMath
              math={
                "\\large L(f, P) = \\frac{1}{n^3} \\left( n^3 + 2n \\cdot \\frac{n(n-1)}{2} + \\frac{n(n-1)(2n-1)}{6} \\right)"
              }
            />
          </div>
          <Typography.Text>
            Зная что <InlineMath math={"\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}"} />{" "}
            и <InlineMath math={"\\sum_{i=1}^{n}i^2=\\frac{n(n+1)(2n+1)}{6}"} />{" "}
            подставим их в выражение{" "}
          </Typography.Text>
          <div style={{ paddingTop: "15px" }}>
            <BlockMath
              math={
                "\\large U(f, P) = \\frac{1}{n^3} \\left( n^3 + 2n \\cdot \\frac{n(n+1)}{2} + \\frac{n(n+1)(2n+1)}{6} \\right)\n"
              }
            />
          </div>
          <Typography.Title level={4}>Шаг 4: Упрощение</Typography.Title>
          <Typography.Text>
            {" "}
            Приводя к общему знаменателю и упрощая, мы приходим к окончательному
            выражению верхней и нижней суммы Дарбу
          </Typography.Text>
          <BlockMath math={"\\large L(f,P)=\\frac{14n^2 - 9n + 1}{6n^2}"} />
          <BlockMath math={"\\large U(f,P)=\\frac{14n^2+9n+1}{6n^2}"} />
        </Col>
      </StyledRow>
    </>
  );
};

export default DarbouxTheory;
