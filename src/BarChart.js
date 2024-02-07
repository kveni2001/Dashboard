import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line } from 'recharts';

export default function barChart({data}) {
  return (
    <div className="charts">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="product.p1" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="product.p2" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
  </ResponsiveContainer>
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="product.p1" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="product.p2" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
  </div>
  )
}
const mapStateToProps = state => ({
    data: state.data // Assuming 'data' is the key where the data is stored in the state
  });

  mapStateToProps()