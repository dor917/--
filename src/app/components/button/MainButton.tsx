import { Button } from 'antd';
import style from "./button.module.css"
import Link from 'next/link';


interface MainButtonProps {
    btnText: string;
  }

export default function MainButton({ btnText }: MainButtonProps) {
    return (
        <Link href="/guest">
            <Button className={style.mainButton}>{btnText}</Button>
        </Link>
    )
}