import React, { useEffect, useState,useContext } from 'react'
import ProductList from './Productlist'
import Test from './Test'
import { ProductContext } from './context/productContext'



export default function App() {

  const {products,setProducts} = useContext(ProductContext)
  const [page,SetPage] = useState(0)
  const [sum,setSum] = useState(0)
  const [text,setText] =useState('')


  const fetchProducts = async ()=>{
    // get all data and sum products length
    const res = await fetch('https://dummyjson.com/products?limit=0&skip=0&select=title,price')
    const allResult = await res.json()
    setSum(allResult.products.length)

    // get 10 items for first render
    const res1 = await fetch('https://dummyjson.com/products?limit=10&skip=0&select=title,price')
    const result = await res1.json()

    // console.log(result.products)
    SetPage(result.products[0]?.id)
    setProducts(result.products)
}

  useEffect(()=>{
    fetchProducts()
  },[])

const hdclick = (e) =>{
e.preventDefault()
const p = products.filter((e)=>((e.title).includes(text)))
setProducts(p)
}

const hdChange =(e)=>{
setText(e.target.value)
// console.log(e.target.value)
}  

  return (
    <div className='border rounded-md shadow-lg mx-auto text-center p-4 w-2/4 flex flex-col gap-2'>
      <h1>Product Search</h1>
      <div>
      <label>
        <input className='border rounded-md' value={text} onChange={hdChange}/>
        <button className='border'onClick={hdclick}>Search</button>
        <Test page={page} sum={sum} SetPage={SetPage}/>
        
      </label>
      </div>
      Product list
      <ProductList/>
    </div>
  )
}
