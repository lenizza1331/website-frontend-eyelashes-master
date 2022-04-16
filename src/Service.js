
import { useState } from "react";
import {
    Link
} from "react-router-dom";
import { text } from './text';



function Service (){
    const [service, setService] = useState(text);
    const [showText, setShowText] = useState(false);

    const showTextClick= (elem)=> {
        elem.showMore = !elem.showMore ;
        setShowText(!showText)
    }

return (
<div>
<div className='service'>
    <div className='title'>
        <h2>Услуги</h2>
    </div>

    {
        service.map((elem=>{
            const {id, title, text, image, linkto, showMore} = elem;
            return(
                <div key={id} className='service__content' >
                    <h3>{title}</h3>
                    <div className='service__content__row'>
                        <div className='service__content__row__right'>
                            <div className='center'>
                                <p className='par'>
                                    {showMore ? text : text.substring(0,270)+"..."} <button className='readmore' onClick={()=> showTextClick(elem) }> { showMore ? "Скрыть текст..." :  "Читать дальше..."} </button>
                                </p>
                                <Link className='btn' to={linkto} title='На главную'>Посмотреть работы</Link>
                            </div>
                        </div>
                        <div className='service__content__row__left'>
                            <img className='service__image' src={image} alt="eyelash"/>
                        </div>
                    </div>
                </div>
            )
            
        }))
    }
    </div>
</div>
)
}

export default Service;