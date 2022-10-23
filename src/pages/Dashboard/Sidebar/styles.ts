import styled from 'styled-components';
import { lighten } from 'polished';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${props => lighten(0.05, props.theme.colors.background)};

  height: 100vh;
  width: 200px;
`;