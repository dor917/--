"use client"
import { Button, Input, Select, Space, Card} from 'antd';
import style from "./guest.module.css"
import { useEffect, useState } from 'react';
import {socket, sendSocketMessage } from '../socket/socket'


export default function guest() {
  const [message, setMessage] = useState('');
  // Input change event
  const changeMessage = (e : any) => {
    setMessage(e.target.value);
  };

  // 메시지 전송 이벤트
  function sendMessage() {
    if('' != message) {
      sendSocketMessage(message);
      setMessage('');
    }
  }
  return (
    <>
      <div className={style.guestMainBox}>
        <Card
          hoverable
          style={{ width: 500 }}
          cover={<img alt="poster" src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2017/11/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2017-11-06-%EC%98%A4%EC%A0%84-8.16.57.png" />}
        >
          <Space.Compact style={{ width: '100%' }}>
            <Input onChange={changeMessage} value={message} placeholder="send a message" />
            <Button onClick={sendMessage}>Submit</Button>
          </Space.Compact>
        </Card>
      
      </div>
    </>
   
  )
}
