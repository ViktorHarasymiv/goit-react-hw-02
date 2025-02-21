import React from 'react'

function Feedback({review, totalValue}) {
  return (
    <div className='feedback'>
        <span>Good : {review.good}</span>
        <span>Neutral : {review.neutral}</span>
        <span>Bad : {review.bad}</span>
        <span>Total : {totalValue}</span>
        <span>Positive: { totalValue - review.neutral >= 1 ? Math.round((review.good / (review.good + review.bad) ) * 100) : '0'} %</span>
    </div>
  )
}

export default Feedback