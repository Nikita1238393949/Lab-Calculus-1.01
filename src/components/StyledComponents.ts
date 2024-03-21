import styled from "styled-components";
import { Divider, Row } from "antd";

const StyledRow = styled(Row)`
  padding: 30px;
  padding-top: 0;
  padding-right: 0;
`;

const VerticalDivider = styled(Divider)`
  height: auto;
  margin-right: 20px;
`;

export { VerticalDivider, StyledRow };
