import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip } from 'recharts';

const Chart = ({data}) => {

  if (data.length > 0) {
    return (
      <LineChart width={750} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
      </LineChart>
    )
  } else {
    return (
      <div>No data</div>
    )
  }

  
}

export default Chart;
