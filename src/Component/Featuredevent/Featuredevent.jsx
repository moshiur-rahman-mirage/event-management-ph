import { useEffect, useState } from "react";
import Category from "../Category/Category";
import Featureimage from "../Featureimage/Featureimage";


const Featuredevent = () => {
    const [categories, setCategory] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
         .then(data=>setCategory(data))
        // .then(data=>console.log(data))
    },[])
    

    return (
        <div>
            <div className='min-h-[50vh]  max-w-7xl mx-auto'>
          
          <h2 className="md:text-4xl  text-3xl md:py-10 mx-auto  text-center">Our Recent Events</h2>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
          {
             categories.map((acategory)=>{
              return(
                  <Featureimage key={acategory.id} acategory={acategory}/>
              )
             })
          }
          </div>
          

      </div>
        </div>
    );
};

export default Featuredevent;