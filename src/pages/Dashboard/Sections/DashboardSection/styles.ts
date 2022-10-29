import styled from 'styled-components';
import { Line } from 'react-chartjs-2'
import { transparentize } from 'polished';

export const DashboardSectionContainer = styled.div`
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 270px);

  gap: 10px;
`;

export const ProgressContainer = styled.div`
  display: flex;
`;

export const CircularContainer = styled.div`
  position: relative;

  width: 150px;
  height: 150px;
`;

export const AmountProgressContainer = styled.div`
  position: absolute;

  color: white;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const GraphicContainer = styled.div`
  width: auto;
  height: auto;

  border-radius: 10px;

  display: flex;

  gap: 10px;
`;

export const GraphicStyleContainer = styled.div`
  background: ${props => transparentize(0.95, props.theme.colors.tertiary)};

  padding: 10px;

  border-radius: 5px;
`;