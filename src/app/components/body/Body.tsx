import style from "./body.module.css"
import React, { ReactNode } from 'react';

interface BodyProps {
    children: ReactNode;
  }
  
export default function Body({ children }: BodyProps) {
      
    return (
        <div className={style.bodyBox}>
            {children}
        </div>
       
    )
}