import React from 'react'
import FilterSection from '../components/FilterSection'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'

function Product() {
  
  return (
    <div>
      
     <div className='px-[1rem] md:px-[5rem] lg:px-[10rem] py-[4rem] flex '>

      <div className='md:w-[30%]  '>
        <FilterSection/>
      </div>

      <div className='md:w-[70%]'>
      <Sort/>
        <ProductList/>
       
      </div>
      
     </div>

    </div>
  )
}

export default Product
