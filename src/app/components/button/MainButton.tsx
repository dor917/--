import { Button } from 'antd';
import style from "./button.module.css"


interface MainButtonProps {
    btnText: string;
  }

export default function MainButton({ btnText }: MainButtonProps) {
    return (
        <Button className={style.mainButton}>{btnText}</Button>
    )
}