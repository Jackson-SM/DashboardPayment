import React from 'react'
import { BsBagCheckFill, BsEyeFill, BsFillPersonFill } from 'react-icons/bs'

import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { Card } from './Components/Card/Card'
import { AmountProgressContainer, CardContainer, CircularContainer, DashboardSectionContainer, GraphicContainer } from './styles'
import { CardLarge } from './Components/CardLarge';
import { CardLargeContainer } from './Components/CardLarge/styles';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { transparentize } from 'polished';
import { useTheme } from '../../../../hooks/useTheme';

export const DashboardSection = () => {

  const { theme } = useTheme();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'start',
        labels: {
          font: {
            family: 'Noto Sans',
            size: 10
          }
        }
      },
    },
    scales: {
      y: {
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "Noto Sans",
          }
        },
        min: 0,
        max: 100
      },
      x: {
        grid: {
        },
        ticks: {
          font: {
            family: "Noto Sans",
          }
        }
      }
    },
    layout: {
      autoPadding: true,
    }
  };

  const labelCreate = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const dataCreate = {
    facture: [
      10,13,24,46,65,70,93
    ],
    desorder: [
      90,83,73,50,25,25,5
    ]
  }

  const data = {
    labels: labelCreate.map(data => data),
    datasets: [
      {
        label: 'Profit Monetary',
        data: dataCreate.facture.map(data => data),
        borderColor: `${transparentize(0.1, theme.colors.tertiary)}`,
        backgroundColor: `${transparentize(0.9, theme.colors.tertiary)}`,
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Profit Desorder',
        data: dataCreate.desorder.map(data => data),
        borderColor: `${transparentize(0.1, theme.colors.secundary)}`,
        backgroundColor: `${transparentize(0.9, theme.colors.secundary)}`,
        borderWidth: 1,
        fill: true,
      },
    ],
  }

  return (
    <>
      <CardLargeContainer>
        <CardLarge />
      </CardLargeContainer>
      <GraphicContainer>
        <Chart type="line" options={options} data={data} />
      </GraphicContainer>
    </>
  )
}
