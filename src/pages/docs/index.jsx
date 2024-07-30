import { Breadcrumb } from '@/Common'
import { Table } from 'antd';
import React from 'react'
import DocsFeature from './DocsFeature';

const Docs = () => {
  
    return (
        <section
        id="docs"
        className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
      >
        <div className="container">
        <Breadcrumb
        pageName="Docs"
        description="Empowering students with comprehensive O and A level resources for academic excellence."
      />
  
          <div className='px-10'>
        <DocsFeature />
          </div>
        </div>
      </section>
    )
}

export default Docs
