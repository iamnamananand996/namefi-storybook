import React from 'react'
import '../../../App.css'
// import { HomePageContent } from '@pages/home/content'
import { HomePageContent } from '../../../pages/home/content'
// import { PageLayout } from '@components/PageLayout'
import { PageLayout } from '../../../components/PageLayout'

function HomePage() {

  return (
    <div className='containers bg-[#111] relative pt-8'>
          <PageLayout includeSearchBar={false}>
            <HomePageContent />
          </PageLayout>
    </div>
  )
}

export default HomePage
