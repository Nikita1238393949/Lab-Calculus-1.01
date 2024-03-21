import React from "react";
import "katex/dist/katex.min.css";
import { Col, Divider, Typography } from "antd";

import { BlockMath, InlineMath } from "react-katex";
import { StyledRow } from "../NumberMethod/MathFunctions";
const ProveRimannTheory = () => {
  return (
    <StyledRow gutter={16}>
      <Col span={11}>
        <Typography.Title level={2}>
          Доказать, что функция интегрируема по Риману.
        </Typography.Title>
        <Divider />
        <Typography.Title level={3}>
          Шаг 1: Непрерывность функции
        </Typography.Title>
        <Typography.Text>
          Функция <InlineMath math={"f(x) = x^2"} /> вляется непрерывной
          функцией на всей числовой прямой, включая отрезок{" "}
          <InlineMath math={"[1,2]"} />
          <br />
          По теореме о непрерывных функциях, непрерывные функции на замкнутом
          отрезке интегрируемы по Риману.
        </Typography.Text>
        <Divider />
        <Typography.Title level={3}>Шаг 2: Суммы Дарбу</Typography.Title>
        <Typography.Text>
          Чтобы доказать интегрируемость по Риману, нужно показать, что разность
          между верхней и нижней суммами Дарбу стремится к нулю при увеличении
          числа разбиений n, то есть при{" "}
          <InlineMath math={"n\\rightarrow\\infty"} />
        </Typography.Text>
        <BlockMath
          math={
            "\\large U(f,P)-L(f,P)=\\frac{14n^2+9n+1}{6n^2}-\\frac{14n^2 - 9n + 1}{6n^2} = \\frac{3}{n}"
          }
        />
        <Typography.Title level={4}>Предел разности</Typography.Title>
        <BlockMath math={"\\large \\lim_{n\\to\\infty} \\frac{3}{n} = 0"} />
        <Typography.Text>
          Увидим, что разность между верхней и нижней суммами Дарбу может быть
          сделана сколь угодно малой, и следовательно, функция{" "}
          <InlineMath math={"f(x)=x^2"} /> интегрируема по Риману на отрезке{" "}
          <InlineMath math={"[1,2]"} />
        </Typography.Text>
      </Col>
      <Divider
        type={"vertical"}
        style={{ height: "auto", marginRight: "20px" }}
      />
      <Col span={11}>
        <Typography.Title level={2}>
          Найти пределы сумм Дарбу, найти значения интеграла.
        </Typography.Title>
        <Divider />
        <Typography.Title level={3} style={{ marginBottom: "20px" }}>
          Шаг 1: Пределы сумм Дарбу
        </Typography.Title>
        <BlockMath
          math={
            "\\large \\lim_{n\\to\\infty}U(f,P)= \\lim_{n\\to\\infty}\\frac{14n^2+9n+1}{6n^2} = \\frac{1}{6}\\cdot\\lim_{n\\to\\infty}(14+\\frac{9}{x}+\\frac{1}{x^2})=\\frac{7}{3}"
          }
        />
        <BlockMath
          math={
            "\\large \\lim_{n\\to\\infty}L(f,P) = \\lim_{n\\to\\infty}\\frac{14n^2 - 9n + 1}{6n^2}=\\frac{1}{6}\\cdot\\lim_{n\\to\\infty}(14-\\frac{9}{x}+\\frac{1}{x^2})=\\frac{7}{3}"
          }
        />
        <Divider style={{ marginTop: "30px" }} />
        <Typography.Title level={3}>
          Шаг 2: Найти значение интеграла
        </Typography.Title>
        <Typography.Text>
          Так как пределы сумм Дарбу совпадают - мы можем утверждать что
          значение определенного интеграла равно
        </Typography.Text>
        <BlockMath math={"\\int_{1}^{2} x^2 \\, dx = \\frac{7}{3}"} />
        <Divider />
        <pre style={{ textAlign: "center" }}>
          {"   |\\_._/|        |,\\__/|        |\\__/,|        |\\_._/|\n" +
            "   | o o |        |  o o|        |o o  |        | 0 0 |\n" +
            "   (  T  )        (   T )        ( T   )        (  T  )\n" +
            "  .^`-^-'^.      .^`--^'^.      .^`^--'^.      .^`-^-'^.\n" +
            "  `.  ;  .'      `.  ;  .'      `.  ;  .'      `.  ;  .'\n" +
            "  | | | | |      | | | | |      | | | | |      | | | | |\n" +
            " ((_((|))_))    ((_((|))_))    ((_((|))_))    ((_((|))_))\n"}
        </pre>
      </Col>
    </StyledRow>
  );
};

export default ProveRimannTheory;
