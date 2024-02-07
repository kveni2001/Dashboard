import React from 'react'
import { initialState } from './initialState';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart, Line } from 'recharts';

function Home (){
 const{ data } =initialState
  return (
    <main className='main-container animation-dark'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='main-cards'>
        <div className="card animation-bg">
        <div className='card-inner'>
          <h3>PRODUCTS</h3>
          <BsFillArchiveFill className='card_icon' />
        </div>
        <h1>2</h1>
        </div>
        <div className="card animation-bg">
        <div className='card-inner'>
          <h3>CATEGORIES</h3>
          <BsFillGrid3X3GapFill  className='card_icon' />
        </div>
        <h1>2</h1>
        </div>
        
        <div className="card animation-bg">
        <div className='card-inner'>
          <h3>CUSTOMERS</h3>
          <BsPeopleFill className='card_icon' />
        </div>
        <h1>{data[data.length-1].cos}</h1>
        </div>
        <div className="card animation-bg">
        <div className='card-inner'>
          <h3>ALERTS</h3>
          <BsFillBellFill className='card_icon' />
        </div>
        <h1>42</h1>
        </div>
      </div>
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
    </main>
  )

        }
    
 export default Home;