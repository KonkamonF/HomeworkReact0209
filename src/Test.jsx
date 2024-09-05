import { useContext } from 'react';
import { ProductContext } from './context/productContext'
import TestA from './TestA';

export default function Test({page,sum,SetPage}) {
    const {setProducts} = useContext(ProductContext)
    //   const [count,setCount] = useState(page)
      const pageProducts = async (sentPage)=>{
        console.log(sentPage,"params");
        const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${sentPage*10}&select=title,price`)
        const result = await res.json()
        console.log(result,"In Test");
        SetPage(sentPage)
        setProducts(result.products)
        
    }
    
    return <div className="w-48 flex justify-between items-center">
        <button className="border p-2 rounded-xl" onClick={()=>pageProducts(page-1)}>prev</button>
        <p className="border w-10">{page}</p>
        <button className="border p-2 rounded-xl" onClick={()=>pageProducts(page+1)}>next</button>
    <div>
    <p></p>
    <p>{sum}</p>
    </div>
    </div>
}