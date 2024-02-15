"use client"
import { Row, Col } from "antd"
import style from "./header.module.css"
import Link from "next/link"

export default function Header() {
    return (
        <Row className={style.titleBox}>
            <Col span={24}>
                <Link href='/'><h1 className={style.titleText}>ㅋㅋㅋ</h1></Link>
            </Col>
        </Row>
    )
}