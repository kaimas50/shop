import styled from 'styled-components';

export const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
Layout.displayName = 'Layout';

export const PageBody = styled.div`
  overflow: auto;
  flex-grow: 1;
`;
PageBody.displayName = 'PageBody';

export const ExpandingDiv = styled.div`
  height: 100%;
  width: 100%;
`;

export const BigText = styled.span`
  font-size: 24px;
`;
