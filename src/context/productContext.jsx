import {createContext,useState} from 'react'

const ProductContext= createContext()

export default function ProductContextProvider(props) {
    const [products,setProducts] = useState([])
    const [user,setUser] = useState("")
  return (
    <ProductContext.Provider value={{products,setProducts,user,setUser}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export {ProductContext}
