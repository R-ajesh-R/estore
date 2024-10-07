'use client';
import React from 'react'
import { Input } from '../ui/input';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';

function NavSearch() {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const [searchQuery,setSearchQuery] = useState(searchParams.get('search')?.toString()||'');
  const handleChange = useDebouncedCallback((val:string) => {
      const params = new URLSearchParams(searchParams);
      if(val){
        params.set('search',val)
      }else{
        params.delete('search');
      }
      replace(`/products?${params.toString()}`)
  },500);
  useEffect(()=>{
    if(!searchParams.get('search')){
      setSearchQuery('')
    }
  },[searchParams.get('search')])
  return (
    <Input 
    type='search' 
    placeholder='Search Product...' 
    className='max-w-xs dark:bg-muted' 
    value={searchQuery}
    onChange={(e)=>{
      setSearchQuery(e.target.value);
      handleChange(e.target.value)
    }}
    />
  )
}

export default NavSearch
