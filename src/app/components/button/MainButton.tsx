import { Button } from 'antd';
import style from "./button.module.css"
import Link from 'next/link';


interface MainButtonProps {
    btnText: string;
    hrefUrl: string;
  }

export default function MainButton({ btnText, hrefUrl }: MainButtonProps) {
    return (
        <Link href={hrefUrl}>
            <Button className={style.mainButton}>{btnText}</Button>
        </Link>
    )
}