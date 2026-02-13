'use client';

import { useState, useRef, useEffect } from 'react';
import { Button, Input, Avatar } from 'antd';
import { MessageOutlined, CloseOutlined, SendOutlined, RobotOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons';
import styles from './Chatbot.module.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Pankaj's AI assistant. I can help you learn more about his experience, skills, and projects. Feel free to ask me anything!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses: { [key: string]: string } = {
    experience: "Pankaj has 2+ years of experience as a Full Stack Developer at Capsitech IT Services. He specializes in building scalable web applications using React, Next.js, Node.js, and microservices architecture. He's worked on projects serving 25,000+ users!",
    skills: "Pankaj is proficient in JavaScript, TypeScript, React, Next.js, Node.js, C#, ASP.NET, MongoDB, MySQL, Docker, AWS, and many more technologies. He's skilled in both frontend and backend development with expertise in microservices architecture.",
    projects: "Some of Pankaj's notable projects include:\n\n1. Hallmarking Management System - A comprehensive transaction and reporting system\n2. DevBook - A developer social platform with real-time chat\n3. BlogHost - An interactive blogging platform\n\nWould you like to know more about any specific project?",
    education: "Pankaj holds a Master of Computer Application from Vellore Institute of Technology (2021-2023) and a Bachelor of Computer Application from Lachoo Memorial College (2017-2020). He also has certifications from MongoDB University, Accenture, and NamasteDev.",
    contact: "You can reach Pankaj at:\n📧 Email: pankajshah2941999@gmail.com\n📱 Phone: (91) 6375957804\n💼 LinkedIn: linkedin.com/in/ps29/\n💬 WhatsApp: Click the green button below to chat!\n\nFeel free to use the contact form or WhatsApp to send him a message!",
    hello: "Hello! I'm here to help you learn more about Pankaj's skills and experience. What would you like to know?",
    hi: "Hi there! 👋 How can I assist you today?",
    help: "I can help you with information about:\n• Pankaj's work experience\n• Technical skills\n• Projects and achievements\n• Education and certifications\n• How to get in touch\n\nWhat would you like to know?",
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [key, response] of Object.entries(quickResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    if (lowerMessage.includes('hire') || lowerMessage.includes('available')) {
      return "Pankaj is currently working as a System Engineer at Capsitech IT Services and is open to new opportunities! Feel free to reach out to him via the contact form or email him directly at pankajshah2941999@gmail.com to discuss potential collaborations.";
    }

    if (lowerMessage.includes('thank')) {
      return "You're welcome! Feel free to ask if you have any other questions about Pankaj's work or experience. 😊";
    }

    return "That's a great question! While I can provide general information about Pankaj's experience, skills, projects, and education, for specific inquiries, I'd recommend reaching out to him directly using the contact form below. Is there anything else I can help you with?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '916375957804'; // Format: country code + number without spaces or special characters
    const message = encodeURIComponent('Hi Pankaj, I found your portfolio and would like to connect with you!');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerContent}>
              <RobotOutlined className={styles.headerIcon} />
              <div>
                <div className={styles.headerTitle}>AI Assistant</div>
                <div className={styles.headerSubtitle}>Ask me anything about Pankaj</div>
              </div>
            </div>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
            />
          </div>

          <div className={styles.chatMessages}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.botMessage}`}
              >
                <Avatar
                  icon={message.sender === 'bot' ? <RobotOutlined /> : <UserOutlined />}
                  className={styles.avatar}
                  style={{
                    background: message.sender === 'bot'
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : '#1890ff'
                  }}
                />
                <div className={styles.messageContent}>
                  <div className={styles.messageText}>{message.text}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className={`${styles.message} ${styles.botMessage}`}>
                <Avatar icon={<RobotOutlined />} className={styles.avatar} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }} />
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.chatInputArea}>
            <div className={styles.whatsappButton}>
              <Button
                type="default"
                icon={<WhatsAppOutlined />}
                onClick={handleWhatsAppContact}
                className={styles.whatsappBtn}
                block
              >
                Chat on WhatsApp
              </Button>
            </div>
            <Input
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className={styles.chatInput}
              suffix={
                <Button
                  type="primary"
                  icon={<SendOutlined />}
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className={styles.sendButton}
                />
              }
            />
          </div>
        </div>
      )}

      <Button
        type="primary"
        shape="circle"
        icon={isOpen ? <CloseOutlined /> : <MessageOutlined />}
        size="large"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.chatToggle}
      />
    </div>
  );
};

export default Chatbot;
