// src/components/Chatbot.js
import React, { useState } from 'react';
import '../css/Home.css'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Cursive',
  headerBgColor: '#0d6efd',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0d6efd',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const Chatbot = () => {
  // Using state to ensure inputs and rendering are controlled properly
  const [steps] = useState([
    {
      id: '1',
      message: 'Welcome to the ticket booking system! How can I assist you today?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'bookTicket', label: 'Book a ticket', trigger: 'askName' },
        { value: 'checkTicket', label: 'Check ticket status', trigger: 'askTicketID' },
      ],
    },
    {
      id: 'askName',
      message: 'What is your name?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: 'askEmail',
    },
    {
      id: 'askEmail',
      message: 'What is your email address?',
      trigger: 'email',
    },
    {
      id: 'email',
      user: true,
      trigger: 'askMobileNumber',
    },
    {
      id: 'askMobileNumber',
      message: 'What is your mobile number?',
      trigger: 'mobileNumber',
    },
    {
      id: 'mobileNumber',
      user: true,
      trigger: 'confirmBooking',
    },
    {
      id: 'confirmBooking',
      message: 'Thank you for providing the details. Your booking is being processed.',
      end: true,
    },
    {
      id: 'askTicketID',
      message: 'Please enter your ticket ID to check the status.',
      trigger: 'ticketID',
    },
    {
      id: 'ticketID',
      user: true,
      trigger: 'statusCheck',
    },
    {
      id: 'statusCheck',
      message: 'Your ticket is being processed.',
      end: true,
    },
  ]);

  return (
    <div className="chatgpt">
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
    </div>
  );
};

export default Chatbot;