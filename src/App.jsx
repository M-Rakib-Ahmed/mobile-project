import { useState } from "react";
import Allproducts from "./components/Allproducts/Allproducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/Header/Navbar";


const App = () => {
  const [isActive, setActive]=useState(false);

  const handleIsActive =(active)=>{
    if(active== 'cart'){
      setActive(true)
    
      
    }
    else{
      
      setActive(false)
    }
    
  }
  console.log(isActive);
  
  return (
    <div>
     <Navbar></Navbar>
     <div className="flex justify-between items-center w-11/12 mx-auto">
        <Allproducts></Allproducts>
        <CartContainer isActive={isActive} handleIsActive={handleIsActive}></CartContainer>
     </div>
    </div>
  );
};

export default App;