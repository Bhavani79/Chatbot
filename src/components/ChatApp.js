// ChatApp.js
import React, { useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import './ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (messageText) => {
    let response;

    if (messageText.toLowerCase().includes('height')) {
      response = "My height is 5 feet 8 inches.";
    } else if (messageText.toLowerCase().includes('age')) {
      response = "I am 22 years old.";
    } else if (messageText.toLowerCase().includes('date of birth')) {
      response = "My date of birth is JULY 23, 2002.";
    } else if (messageText.toLowerCase().includes('cgpa')) {
      response = "My B.Tech CGPA is 8.71.";
    } else if (messageText.toLowerCase().includes('certifications')) {
      response = "AZ-900,AWS-CP,ServiceNow";
    } else if (messageText.toLowerCase().includes('projects')) {
      response = "I have worked on several projects including AWS,AZURE,.NET,SystemDevelopment,React.js.";
    } else if (messageText.toLowerCase().includes('hobbies')) {
      response = "Travel Photography.";
    } else if (messageText.toLowerCase().includes('tools')){
      response="Github,jenkin,Docker,kubernetes.";
    } else if (messageText.toLowerCase().includes('favouret food')){
      response="Gongura Pickle";
    } else if (messageText.toLowerCase().includes('internships')){
      response="Intern at Juniper Networks,Intern at BluePrism";
    } else if (messageText.toLowerCase().includes('skills')){
      response="Prompt Engineering,Visual Programming,Agile,Scrum,SystemDevelopment,AWS,Azure.";
    } else if (messageText.toLowerCase().includes('name')){
      response="Yarlagadda Bhavani Chowdary";
    } else if (messageText.toLowerCase().includes('hometown')){
      response="REPALLE/Bapatla District/Andhra Pradesh";
    } else if (messageText.toLowerCase().includes('father')){
      response="Yarlagadda Venkateswara Rao";
    } else if (messageText.toLowerCase().includes('mother')){
      response="Yarlagadda Sree Latha.";
    } else if (messageText.toLowerCase().includes('mobile number')){
      response="9441173726";
    } else if (messageText.toLowerCase().includes('instagram')){
      response="@the.d_clan";
    } else if (messageText.toLowerCase().includes('linkedin')){
      response="@bhavanichowdary";
    } else if (messageText.toLowerCase().includes('whatsapp')){
      response="9441173726";
    } else if (messageText.toLowerCase().includes('email')){
      response="ybchowdary77@gmail.com";
    } else if (messageText.toLowerCase().includes('engineering college')){
      response="KL University at Vijayawada";
    
    } else {
      response = "I'm sorry, I don't understand.";
    }

    const userMessage = { text: messageText, sender: 'user' };
    const botMessage = { text: response, sender: 'bot' };

    setMessages([...messages, userMessage]);
    setMessages([...messages, botMessage]);
  };

  const handleReset = () => {
    setMessages([]);
  };

  return (
    <div className="chat-container">
      <div className="navbar">
        <div className="title">My Chat Bot Assistant</div>
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
      <div className="message-area">
        <div className="messages">
          {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
        </div>
        <MessageInput onSubmit={handleMessageSubmit} />
      </div>
    </div>
  );
};

export default ChatApp;
