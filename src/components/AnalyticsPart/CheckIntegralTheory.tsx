import React from "react";
import { Col, Divider, Typography } from "antd";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { StyledRow } from "../StyledComponents";
const CheckIntegralTheory = () => {
  return (
    <>
      <StyledRow gutter={16}>
        <Col span={12}>
          <Typography.Title level={2}>
            Сравнить со значением, полученным по формуле Ньютона-Лейбница.
          </Typography.Title>
          <Divider />
          <Typography.Title level={3}>Шаг 1: Первообразные</Typography.Title>
          <Typography.Text>Формула Ньютона-Лейбница гласит:</Typography.Text>
          <BlockMath math={"\\large \\int_{a}^{b} f(x) \\, dx = F(b) - F(a)"} />
          <Typography.Text>
            Найдем первообразную для <InlineMath math={"f(x) = x^2"} />.
            Первообразная для функции <InlineMath math={"x^2"} /> есть{" "}
            <InlineMath math={"\\frac{x^3}{3}"} />
            <br />
            При интегрировании мы получаем обратный процесс:
          </Typography.Text>
          <BlockMath
            math={"\\large F(x) = \\int x^2 \\, dx = \\frac{x^3}{3} + C"}
          />
        </Col>
        <Divider
          type="vertical"
          style={{ height: "auto", marginRight: "20px" }}
        />
        <Col span={11}>
          <Typography.Title level={3}>
            Шаг 2: Применим формулу Ньютона-Лейбница
          </Typography.Title>
          <Typography.Text>
            Подставим <InlineMath math={"F(x)=\\frac{x^3}{3}"} /> и пределы
            интегрирования 1 и 2
          </Typography.Text>
          <BlockMath
            math={
              "\\large \\int_{1}^{2} x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_1^2 = \\frac{2^3}{3} - \\frac{1^3}{3}"
            }
          />
          <Typography.Title level={5}>Выполним вычисления</Typography.Title>
          <BlockMath
            math={
              "\\large \\int_{1}^{2} x^2 \\, dx = \\frac{2^3}{3} - \\frac{1^3}{3} = \\frac{8}{3} - \\frac{1}{3} = \\frac{7}{3}"
            }
          />
          <Divider />
          <Typography.Title level={3}>Шаг 3: Вывод</Typography.Title>
          <Typography.Text>
            Следуя рассчетам интеграла сделанных через суммы Дарбу и через
            формулу Ньютона-Лейбница мы можем утверждать что рассчеты проведены
            верно
          </Typography.Text>
        </Col>
      </StyledRow>
    </>
  );
};

export default CheckIntegralTheory;
