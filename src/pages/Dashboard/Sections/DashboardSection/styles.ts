import styled from 'styled-components';

export const DashboardSectionContainer = styled.div`
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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