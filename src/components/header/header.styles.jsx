import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderItemStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  margin-bottom: 25px;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const HeaderItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
