import { useState } from 'react';
import { dataMakeup } from './dataMakeup';
import ButtonsMU from './ButtonsMU';



function Permanent (){

const [makeUp, setMakeUp] = useState(dataMakeup);
const [makeLarge, setMakeLarge] = useState("false");

const makeLargeClick = (item)=>{
    item.isActive = !item.isActive ;
    setMakeLarge(!makeLarge)
}

const filterByCategory = (category)=>{
    const myCategory = dataMakeup.filter( elem=> elem.category === category);
    setMakeUp(myCategory);
}


    return (
    <div>
    <div className='title'>
        <h2>Перманентный макияж</h2>
    </div>
    <ButtonsMU chosenCategory={filterByCategory} />
    <div className='lashContainer'>
        {
            makeUp.map((item=>{
                const {id, image, category, isActive} = item;
                return (
                    <div key={id} className={isActive ? "clicked" : null}>
                        <img onClick={()=> makeLargeClick(item)} className='lashContainer__image' src={image} alt='makeup'/>
                    </div>
                )
            }))
        }
    </div>

    </div>
    )
    };
    
    export default Permanent;