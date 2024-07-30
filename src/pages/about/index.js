import { Breadcrumb } from '@/Common'
import { AboutSectionOne, AboutSectionTwo } from '@/components'
import React from 'react'

const About = () => {
    return (
        <section className=' relative xl:pt-[10px] pt-[60px] md:pb-[120px] md:pt-[150px] xl:padding-l wide:padding-r padding-b'>
       
        <Breadcrumb
        pageName="About Page"
        description=" A leading Payment Aggregator Company In Pakistan, operating since 2021"
      />
      <AboutSectionOne />
      <AboutSectionTwo />

        </section>
    )
}

export default About
