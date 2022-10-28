import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import { lighten } from 'polished';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import BorderLinearProgress from './BorderLinearProgress';
import { CardLargeStyle } from './styles'
import graphic from '../../../../../../assets/graphic.svg'

export const CardLarge = () => {

  const amount = 456789;

  const NumberFormat = Intl.NumberFormat(['ban', 'id']);
  const amountFormat = NumberFormat.format(amount);
  console.log(amount.toFixed(2))

  return (
    <CardLargeStyle>
      <div className="content">
        <div className="info">
          <div className="amount-container">
            <span className="title">Ticket sold today</span>
            <span className="amount">{amountFormat}<span className="currency">U$</span></span>
          </div>
          <div className="graphic">
            <span>+{NumberFormat.format(2034)} pgg</span>
            <img src={graphic} alt="" />
          </div>
        </div>
        <div className="footer">
          <BorderLinearProgress
          variant="determinate"
          value={50} />
          <span className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
          <a href="" className="view-details">View details <BsArrowRight /></a>
        </div>
      </div>
    </CardLargeStyle>
  )
}
