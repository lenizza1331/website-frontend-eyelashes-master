import { useState } from 'react';
import { dataLash } from './dataLash';

function Eyelashes (){
    const [allLash, setAllLash] = useState(dataLash);
    const [makeBig, setMakeBig ] = useState("false");

    const makeBigClick = (elem)=>{
        elem.isActive = !elem.isActive ;
        setMakeBig(!makeBig)
    }

return (
<div>
    <div className='title'>
        <h2>Наращивание ресниц</h2>
    </div>
    <div  className='lashContainer'>
    {
        allLash.map((elem=>{
            const {id, image , isActive} = elem;
            return(
                <div key={id} className={isActive ? "clicked" : null} >
                    <img onClick={()=> makeBigClick(elem)} className='lashContainer__image' src={image} alt='lashes'/>
                    </div>
            )
        }))
    }</div>
</div>
)
};

export default Eyelashes;