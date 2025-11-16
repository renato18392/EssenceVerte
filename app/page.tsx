'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Quiz from '@/components/quiz'
import Products from '@/components/products'
import Feedback from '@/components/feedback'
import FloatingContact from '@/components/floating-contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Quiz />
      <Products />
      <Feedback />
      <FloatingContact />
      <Footer />
    </div>
  )
}
