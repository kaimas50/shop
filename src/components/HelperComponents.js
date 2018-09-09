import styled from 'styled-components';

export const PageBody = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  padding-top: 150px;
  box-sizing: border-box;
  z-index: -1;
`;

export const CenteringDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
CenteringDiv.displayName = 'CenteringDiv';

export const ExpandingDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const BigText = styled.span`
  font-size: 24px;
`;
