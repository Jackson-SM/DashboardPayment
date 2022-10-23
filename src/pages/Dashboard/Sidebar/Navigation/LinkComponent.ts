import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkComponent = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  width: 100%;
  font-size: 14px;
`;