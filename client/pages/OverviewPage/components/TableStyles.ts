import styled from "styled-components";
import theme from "@client/theme";

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: ${theme.borderRadius};
  overflow: hidden;
  border: 2px solid ${theme.colors.black2};;
`;

export const HeaderRow = styled.tr`
  background-color: ${theme.colors.black5};
`;

interface IHeaderCell {
  width?: string;
}

export const HeaderCell = styled.th<IHeaderCell>`
  padding: 21px 30px;
  text-align: ${(props) => props.align};
  width: ${(props) => props?.width || "auto"};
  font-size: 10px;
  color: ${theme.colors.grayBlue};
  font-weight: ${theme.weight.normal};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${theme.colors.black2};
  }
`;

export const Cell = styled.td`
  padding: 21px 30px;
  text-align: ${(props) => props.align};
  font-weight: ${theme.weight.medium};
`;