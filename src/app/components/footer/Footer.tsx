"use client"
import { Divider, List, Row, Col } from "antd"
import style from "./footer.module.css"

const data = [
    'D가 20개면 스무디~',
    '베를린에서 음식을 함부로 먹으면 안되는 이유는? 독 일수도',
    '항상 화나있는 숫자는? 에잇!',
    '3월에 대학생을 건들면 안되는 이유는? 개강하니까 ~',
];

export default function Footer() {
      
    return (
        <div className={style.footerBox}>
            <Row>
                <Col span={6} className={style.footerText}>Liverpool</Col>
                <Col span={6} className={style.footerText}>Manchester City</Col>
                <Col span={6} className={style.footerText}>Chelsea</Col>
                <Col span={6} className={style.footerText}>Tottenham Hotspur</Col>
            </Row>
            <div>
                <Divider orientation="left">호스팅</Divider>
                <List
                size="small"
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </div>
        </div>
       
    )
}