import React from 'react'
import '../css/Home.css'
import ChatBot from '../components/ChatBot'

const Home = () => {
  return (
    <div className='home-container'>
        <h1>Welcome to ChatBot Ticket System</h1>
        <ChatBot />
    </div>
  )
}

export default Home