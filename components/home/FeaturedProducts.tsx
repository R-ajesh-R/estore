import React from 'react'
import { fetchFeaturedProducts } from '@/utils/actions'
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';
async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  const dummy = await new Promise(resolve=>setTimeout(resolve,2000))
  if(products.length === 0) return <EmptyList />
  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid products={products} />
    </section>
  )
}

export default FeaturedProducts
