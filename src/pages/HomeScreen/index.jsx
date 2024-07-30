
import { ScrollUp } from '@/Common'
import React from 'react'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Video from '../sections/Video'
import Testimonials from '@/pages/sections/Testimonial'
import ContactPage from '../contact'
import Contact from '@/components/Contact'


const HomeScreen = () => {
  return (
    <div>
      <ScrollUp/>
      <Hero/>
      <Features/>
  <Video/>
  <Testimonials/>
<Contact/>
    </div>
  )
}

export default HomeScreen
