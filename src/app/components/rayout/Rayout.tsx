"use client"
import React, { ReactNode } from 'react';
import Header from '../header/Header'
import Body from '../body/Body'
import Footer from '../footer/Footer'

interface RayoutProps {
    children: ReactNode;
  }
  
export default function Rayout({ children }: RayoutProps) {
  return (
    <>
      <Header/>
      <Body>      
         {children}
      </Body>
      <Footer/>
    </>
   
  )
}
