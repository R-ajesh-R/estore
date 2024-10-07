import React from 'react'
import { Carousel } from '../ui/carousel'
import HeroCarousel from './HeroCarousel'
import Link from 'next/link'
import { Button } from '../ui/button'

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eveniet numquam assumenda quae, ipsam non recusandae officia esse deserunt, commodi autem vitae! Accusamus tempore, distinctio consequuntur illum est nam ipsa.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}

export default Hero
