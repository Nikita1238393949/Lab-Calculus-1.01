import React from "react";
import { Button, Card, Col, Layout, Row, Typography } from "antd";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BaseView = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ flex: 0 }}>
      <Layout.Content>
        <Row gutter={[17, 24]} style={{ margin: "50px" }}>
          <Col xs={24} lg={13} xxl={12}>
            <Card>
              <Typography.Title>Лабораторная работа 1.01</Typography.Title>
              <Typography.Title level={3}>Аналитическая часть</Typography.Title>
              <ol>
                <Typography.Text>
                  <li>
                    Построить верхнюю и нижнюю суммы Дарбу для равномерного
                    разбиения на n частей.
                  </li>
                  <li>Доказать, что функция интегрируема по Риману.</li>
                  <li>Найти пределы сумм Дарбу, найти значения интеграла.</li>
                  <li>
                    Сравнить со значением, полученным по формуле
                    Ньютона-Лейбница.
                  </li>
                </Typography.Text>
              </ol>
            </Card>
            <Card style={{ marginTop: "17px" }}>
              <Typography.Title level={3}>Численный метод</Typography.Title>
              <ol>
                <li>
                  Построить графики <InlineMath math={"f(x)"} /> и ступенчатые
                  фигуры,соответсвующие суммам Дарбу для некоторых значений{" "}
                  <InlineMath math={"n"} />. Добавить их значения в таблицу в
                  отчете. (см. Замечания)
                </li>
                <li>
                  Построить графики интегральных сумм со случайными оснащениями{" "}
                  <InlineMath math={"\\xi"} /> для тех же разбиений. Добавить их
                  зачения в таблицу в отчете.
                </li>
                <li>
                  По желанию написать программу,вычисляющую приближённое
                  значение интеграла для равномерного разбиения методом
                  трапеций. Нарисовать рисунок, сравнить результаты.
                </li>
              </ol>
              <Typography.Title level={4}>Замечания</Typography.Title>
              <ol>
                <li>
                  Входные данные программы: число точек,разбиения,способ выбора
                  оснащения (левые, правые, средние, случайные).
                </li>
                <li>
                  В таблицу добавить результаты минимум для 3 разных n. По
                  желанию можно графически показать для большего количества
                  различных n.
                </li>
              </ol>
            </Card>
          </Col>
          <Col xs={24} lg={11} xxl={10}>
            <Card>
              <Typography.Title level={3}>Требования к отчету</Typography.Title>
              <ol>
                <li>Постановка задачи</li>
                <li>Теория</li>
                <li>
                  Используемые програмные средства (можно включить ссылку на
                  github)
                </li>
                <li>Результаты</li>
                <li>Обсуждение (результатов)</li>
              </ol>
            </Card>
            <Card style={{ marginTop: "17px" }}>
              <Typography.Title level={3}> Вариант №1</Typography.Title>
              <Typography
                style={{
                  fontSize: "25px",
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                <InlineMath math={"f(x)=x^2 \\quad [1,2]"} />
              </Typography>
              <Button
                icon={<EditOutlined />}
                type={"primary"}
                onClick={() => navigate("/view")}
                style={{ minWidth: "250px" }}
              >
                Перейти к решению
              </Button>
            </Card>
            <Card style={{ marginTop: "17px" }}>
              <pre style={{ margin: "3.5px" }}>
                {`
                                      ___
             |\\__/,|   (\`\\        _.-|   |          |\\__/,|   (\`\\
             |o o  |__ _) )      {   |   |          |o o  |__ _) )
           _.( T   )  \`  /        "-.|___|        _.( T   )  \`  /
 n n._    ((_ \`^--' /_<  \\         .--'-\`-.     _((_ \`^--' /_<  \\
 <" _ }=- \`\` \`-'(((/  (((/       .+|______|__.-||__)\`-'(((/  (((/
      `}
              </pre>
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default BaseView;
