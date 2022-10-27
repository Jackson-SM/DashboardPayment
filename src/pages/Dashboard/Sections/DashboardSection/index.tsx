import React from 'react'
import { BsBagCheckFill, BsEyeFill, BsFillPersonFill } from 'react-icons/bs'
import { Card } from './Components/Card/Card'
import { CardContainer, DashboardSectionContainer } from './styles'

export const DashboardSection = () => {
  return (
    <DashboardSectionContainer>
      <CardContainer>
        <Card title="Views" numbers={910239} last_increase={-1605}  icon={<BsEyeFill />} gradient="purple" />
        <Card title="Users" numbers={105239} last_increase={7130} icon={<BsFillPersonFill />} gradient="yellow" />
        <Card title="Purchases" numbers={1000582}  last_increase={-2302} icon={<BsBagCheckFill />} gradient="red" />
      </CardContainer>
    </DashboardSectionContainer>
  )
}
