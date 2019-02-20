import React from 'react';

const Status = (props) => {
  let threshold = props.threshold;
  
  const getStatus = () => {
    let date = new Date()
    let currentHour = date.getHours()

    let current = props.data.find((elem) => {
      return elem.hour == currentHour + ':00'
    })
    try {
      let price = parseFloat(current.price)
      if (price && price > threshold)
        return 'Not a good idea to go to sauna.'
      else
        return 'It definitely is sauna time.' 
    } catch (error) {
      // Ignore
    }
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
