import React from 'react'
import { BsBank2, BsGraphUp, BsPersonFill } from 'react-icons/bs'

import { CardContainer, GraphicContainer, GraphicStyleContainer } from './styles'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from 'chart.js';
import { Chart, Doughnut, Pie } from 'react-chartjs-2';
import { transparentize } from 'polished';
import { useTheme } from '../../../../hooks/useTheme';
import { ProfitCard } from './Components/ProfitCard';
import { Breadcrumb } from '../Components/Breadcrumb';
import { DoughnutOptions, LineOptions } from '../ChartsConfig';

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
    Filler,
    ArcElement
  );

  const labelCreate = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const dataCreate = {
    facture: [
      10,13,24,46,65,70,93
    ],
    desorder: [
      20,93,33,45,5,55,5
    ]
  }

  const data = {
    labels: labelCreate,
    datasets: [
      {
        label: 'Profit Monetary',
        data: dataCreate.facture,
        borderColor: `${transparentize(0.1, theme.colors.primary)}`,
        backgroundColor: `${transparentize(0.9, theme.colors.primary)}`,
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Profit Monetary',
        data: dataCreate.desorder,
        borderColor: `${transparentize(0.1, 'orange')}`,
        backgroundColor: `${transparentize(0.9, 'orange')}`,
        borderWidth: 1,
        fill: true,
      },
    ],
  }

  const optionsProfit = {
    prefix: true,
    prefix_string: 'U$',
    type: "money",

    percentage: '2,86',
    description: 'a last month',
    profit: 25671,
  }

  return (
    <>
      <Breadcrumb />
      <CardContainer>
        <ProfitCard options={{
          prefix_string: 'U$',
      
          percentage: '9,23',
          description: 'Total users',
          profit: 12901,
        }} title="Users" icon={<BsPersonFill />} />

        <ProfitCard options={{
          prefix: true,
          prefix_string: 'R$',
          type: "money",
      
          percentage: '2,86',
          description: 'Profit in last month',
          profit: 125871,
        }} title="Profit Monetary" icon={<BsBank2 />} />

        <ProfitCard options={{
          type: "percentage",
      
          percentage: '1,33',
          description: 'a last month',
          profit: 34,
        }} title="Profit Month" icon={<BsGraphUp />} />

      </CardContainer>
      <GraphicContainer>
        <GraphicStyleContainer style={{ width: '550px' }}>
          <Chart type="line" options={LineOptions} data={data} />
        </GraphicStyleContainer>
        <GraphicStyleContainer style={{ width: '270px' }}>
          <Doughnut height={200} width={200} options={DoughnutOptions} data={data} />
        </GraphicStyleContainer>
      </GraphicContainer>
    </>
  )
}
