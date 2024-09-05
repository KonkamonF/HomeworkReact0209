import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from './context/productContext'

export default function ProductList() {
  const {products,setProducts} = useContext(ProductContext)
    // const fetchProducts = async ()=>{
    //     const res = await fetch('https://dummyjson.com/products')
    //     const result = await res.json()
    //     console.log(result.products)
    //     setProducts(result.products)
    // }
    
 
  return (
    <div>
        {products.map((product)=>{
          // console.log(product);  
          return (
            
            <li>{product.title} | {product.price}</li>
          )
        })}
    </div>
  )
}
 //? at <li> is ternary check undefine

 // arr.forEach()
 // arr.map(arrMap())
 // arr.map((item) => { return})
 