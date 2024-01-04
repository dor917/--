import React, { ReactNode } from 'react';
import Rayout from './components/rayout/Rayout';
import MainButton from './components/button/MainButton';
import style from "./globals.module.css"


export default function Home() {
  return (
    <>
      <Rayout>
          <div className={style.mainBtnBox}>
            <MainButton btnText='Guest'/>
            <MainButton btnText='Hero'/>
          </div>
         
       
      </Rayout>
    </>
   
  )
}
