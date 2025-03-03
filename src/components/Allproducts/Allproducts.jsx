import { useEffect, useState } from "react";
import SingleProducts from "../SingleProducts/SingleProducts";

const Allproducts = () => {
    const [seletedProducts, setSelectedProducts]=useState([]);
    useEffect(()=>{
        fetch('/fake.json')
        .then(res => res.json())
        .then(data => setSelectedProducts(data))
    },[])
    console.log(seletedProducts);
    
    return (
        <div>
          <h2 className="text-2xl font-bold">This is a Allproducts</h2>  
         <div className="lg:grid grid-cols-3">
                {
                    seletedProducts.map(product => <SingleProducts product={product}></SingleProducts>)
                }
         </div>
        </div>
    );
};

export default Allproducts;