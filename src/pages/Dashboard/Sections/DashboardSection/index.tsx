import React from 'react'
import { BsBagCheckFill, BsEyeFill, BsFillPersonFill } from 'react-icons/bs'

import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { Card } from './Components/Card/Card'
import { AmountProgressContainer, CardContainer, CircularContainer, DashboardSectionContainer } from './styles'
import { CardLarge } from './Components/CardLarge';
import { CardLargeContainer } from './Components/CardLarge/styles';

export const DashboardSection = () => {
  return (
    <DashboardSectionContainer>
      <CardLargeContainer>
        <CardLarge />
      </CardLargeContainer>
    </DashboardSectionContainer>
  )
}
