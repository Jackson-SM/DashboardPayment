import React from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { CardStyle } from './styles'


type CardPropsCustom = {
  children?: React.ReactNode;
  title: string;
  icon: JSX.Element;
  numbers: number;
  last_increase: number;
}
type CardProps = React.ComponentProps<typeof CardStyle> & CardPropsCustom;

export const Card = ({ children, title, icon, numbers, last_increase,...rest }: CardProps) => {

  const NumberFormat = Intl.NumberFormat();
  const numbers_format = NumberFormat.format(numbers);
  const last_increase_format = NumberFormat.format(last_increase);

  const increase_negative = { color: '#2BFFAE' }
  const increase_positive = { color: '#FF2B64' }

  return (
    <CardStyle {...rest}>
      <div className="top">
        <div className="icon">
          {icon}
        </div>
        <span className="title">{title}</span>
      </div>
      <div className="info">
        <span className="numbers">{numbers_format}</span>
        <span className="last_mounth_increase" style={last_increase < 0 ? {...increase_positive} : { ...increase_negative }}>
          { last_increase < 0 ? <BsArrowDown /> : <BsArrowUp /> }
          {last_increase_format}
        </span>
      </div>
    </CardStyle>
  )
}
