import * as React from 'react';
import { PriceData } from './interfaces'


interface Status {
  threshold: number;
  data: Array<PriceData>
  as: string;
}

const Status = ( props : Status ) => {
  let threshold = props.threshold;
  
  const getStatus = () => {
    let date = new Date()
    let currentHour = date.getHours()

    let current = props.data.find((elem) => {
      return elem.hour == currentHour + ':00'
    })
    if (current && parseFloat(current.price) > threshold)
      return 'Not a good idea to go to sauna.'
    else
      return 'It definitely is sauna time.' 
  }
  const statusText = getStatus()
  
  if (statusText) {
    return React.createElement(
      props.as,
      null,
      statusText
    )
  } else {
    return null
  } 
  
} 

export default Status;
