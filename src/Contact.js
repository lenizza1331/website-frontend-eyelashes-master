import vk from './assets/vk_icon.svg';
import insta from './assets/Instagram_4.svg';
import telegram from './assets/telegram.svg';
import whatsapp from './assets/whatsapp.svg';
import map from './assets/map.png';

function Contact (){
    return (
        <div className='contact'>
        <div className='title'>
            <h2>Контакты</h2>
        </div>
        <div className='service__content__row'>
            <div className='par'>
            <p>Кировоградская ул., 9 корпус 1, Москва, Россия</p>
            <p>ТЦ Акварель, 1й этаж, "Салон красоты"</p>
            </div>
            <ul className='links-row'>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://vk.com/nadiralashpm"><img className='icons' alt="icon" src={vk}/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://mail.ru/"><img className='icons' alt="icon" src={telegram}/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nadira.lash.pm/"><img className='icons' alt="icon" src={insta}/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://wa.me/79259320924"><img className='icons' alt="icon" src={whatsapp}/></a></li>
            </ul>
        </div>
        <div className='center'>
            <img src={map} alt='map' className='mapImage' />
        </div>
    </div>
    )
    };
    
    export default Contact;