//import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Button from './components/Button.jsx'
import WhatsDifferentList from './components/WhatsDifferentList.jsx'
import CarouselMobile from './components/CarouselMobile.jsx'
import CarouselDesktop from './components/CarouselDesktop.jsx'
import Footer from './components/Footer.jsx'
import Credits from './components/Credits.jsx'

function App() {

  return (
    <>
    <header className=''>
      <Navbar />
    </header>

    <main className="pt-28 md:pt-32 lg:pt-44">

      <section className='px-8 md:px-20 lg:px-32 flex flex-col items-center text-center lg:text-left lg:grid lg:grid-cols-2'>
        <img className='lg:order-last' src="/images/illustration-intro.svg" alt="Illustration of teamwork"/>
        <div className='lg:max-w-md lg:mr-8'>
          <h1 className='font-bold text-4xl lg:text-5xl my-3 lg:mt-0 lg:mb-6 text-DarkBlue'>Bring everyone together to build better products.</h1>
          <p className='mb-6 lg:mb-8 lg:max-w-sm text-DarkGrayishBlue leading-7'>
            Manage makes it simple for software teams to plan day-to-day 
            tasks while keeping the larger team goals in view.
          </p>
          <Button 
            textButton="Get Started"
            variant="orange"
          />
        </div>
      </section>

      <section className='mt-20 mb-16 lg:mt-28 lg:grid lg:grid-cols-2 lg:px-32 lg:gap-x-8'>
        <div className='px-8 md:px-20 lg:px-0 flex flex-col items-center text-center lg:items-start lg:text-left'>
          <h2 className='font-bold text-3xl lg:text-4xl mb-4 text-DarkBlue'>What’s different about Manage?</h2>
          <p className='text-DarkGrayishBlue leading-7 lg:max-w-[22rem] '>
            Manage provides all the functionality your team needs, without 
            the complexity. Our software is tailor-made for modern digital 
            product teams. 
          </p>
        </div>
        <div className='pl-4 mt-12 lg:mt-0 lg:pl-0'>
          <WhatsDifferentList />
        </div>
      </section>

      <section className='mb-10 lg:mb-36 flex flex-col items-center text-center'>
        <h4 className='font-bold text-3xl mb-4 text-DarkBlue'>What they’ve said</h4>
        <div className='mt-16 mb-10 lg:hidden'>
          <CarouselMobile />
        </div>
        <div className='mt-16 mb-16 hidden lg:block xl:pl-6'>
          <CarouselDesktop />
        </div>
        <Button 
          textButton="Get Started"
          variant="orange"
        />
      </section>

      <section className='simplifySection bg-BrightRed py-24 px-10 md:px-36 lg:px-32 flex flex-col items-center text-center
      lg:flex-row lg:justify-between lg:py-14 lg:text-left'>
        <h5 className='font-semibold text-4xl mb-7 text-white lg:max-w-md'>Simplify how your team works today.</h5>
        <Button 
          textButton="Get Started"
          variant="white"
        />
      </section>
    </main>

    <footer className='bg-VeryDarkBlue pt-10 pb-6 px-8 md:px-40 lg:px-32 lg:pt-16 lg:pb-6'>
      <Footer />
      <Credits />
    </footer>
    </>
  )
}

export default App
