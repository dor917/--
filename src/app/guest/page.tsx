"use client"
import { Button, Input, Select, Space, Card} from 'antd';
import style from "./guest.module.css"
export default function guest() {

  return (
    <>
      <div className={style.guestMainBox}>
        <Card
          hoverable
          style={{ width: 500 }}
          cover={<img alt="example" src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2017/11/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2017-11-06-%EC%98%A4%EC%A0%84-8.16.57.png" />}
        >
          <Space.Compact style={{ width: '100%' }}>
            <Input placeholder="send a message" />
            <Button>Submit</Button>
          </Space.Compact>
        </Card>
      
      </div>
    </>
   
  )
}
