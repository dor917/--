import { Row, Col } from "antd"
import style from "./header.module.css"
export default function Header() {
    return (
        <Row className={style.titleBox}>
            <Col span={24}>
                <h1 className={style.titleText}>MarryMe</h1>
            </Col>
        </Row>
    )
}