import React from 'react'
import { ProfitCardStyle, ProfitContent, ProfitDescription, ProfitInfo, ProfitNumber, ProfitPercentage, ProfitTitle } from './styles'

interface ProfitOptions {
  prefix?: boolean;
  prefix_string?: string;

  profit: number;
  percentage?: string;
  description?: string;

  type?: "percentage" | "money" | string;
}

type ProfitCardProps = {
  options: ProfitOptions,
  title: string;
  icon?: JSX.Element;
}

export const ProfitCard = ({ options, title, icon,...props}: ProfitCardProps) => {

  const NumberFormat = Intl.NumberFormat();
  const profit_format = NumberFormat.format(options.profit);

  return (
    <ProfitCardStyle>
      <ProfitContent>
        <ProfitTitle>{icon}{title}</ProfitTitle>
        <ProfitInfo>
          <ProfitNumber>
            {options.type === 'money' && options.prefix && <span>{options.prefix_string}</span>}
            {profit_format}
            {options.type === 'percentage' && <span>%</span>}
          </ProfitNumber>
          <ProfitPercentage>{options.percentage}%</ProfitPercentage>
          <ProfitDescription>{options.description}</ProfitDescription>
        </ProfitInfo>
      </ProfitContent>
    </ProfitCardStyle>
  )
}
