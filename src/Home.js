import firstscreen from './assets/first-screen.png'
import vk from './assets/vk_icon.svg';
import insta from './assets/Instagram_4.svg';
import telegram from './assets/telegram.svg';
import whatsapp from './assets/whatsapp.svg';
import master from './assets/nadira-master.jpg';
import Service from './Service';
import Contact from './Contact';


function Home (){

return (
<div>

<div className="first-screen">
    <div className='first-screen__content'>
    <div className="first-screen__left">
        <img className='first-screen-img' src={firstscreen} alt="screen"/>
    </div>
    <div className="first-screen__right">
        <h2>
        Наращивание ресниц и перманентный макияж в Москве у мастера с многолетним опытом
        </h2>
        <div className="first-screen__right__links">
            <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://vk.com/nadiralashpm"><img className='icons' alt="icon" src={vk}/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://mail.ru/"><img className='icons' alt="icon" src={telegram}/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nadira.lash.pm/"><img className='icons' alt="icon" src={insta}/></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://wa.me/79259320924"><img className='icons' alt="icon" src={whatsapp}/></a></li>
            </ul>
        </div>
    </div>
    </div>
</div>

<hr></hr>

<div className='about'>
    <div className='title'>
        <h2>О мастере</h2>
    </div>
    <div className='about__row'>
        <p className='par'>
        Я дипломированный мастер по перманентному макияжу и наращиванию ресниц c более чем 5лет опытом. Принимаю в уютной студии.
        Стерильность 100%, одноразовые расходники и иглы.
        Никаких шаблонных работ!
        Все детали обговариваются с каждым клиентом индивидуально.
        Использую только премиум материалы 
        </p>
        <img className='row-img' src={master} alt="master"/>
    </div>
</div>

<hr></hr>

<Service/>

<hr></hr>

<Contact />



















</div>
)
}

export default Home;