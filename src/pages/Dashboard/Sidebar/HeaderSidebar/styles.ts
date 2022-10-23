import styled from 'styled-components';
import { lighten } from 'polished';

export const HeaderSidebarContainer = styled.div`
  background: ${props => lighten(0.1, props.theme.colors.background)};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  img {
    width: 50px;
    height: 50px;
  }
`;