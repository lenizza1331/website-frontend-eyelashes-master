import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import {useTransition, animated} from 'react-spring'
// import NavigationMenu from './NavigationMenu'
import React, { useState } from 'react'
import {
    Link
    } from "react-router-dom";


export default function Menu(params) {
    const [showMenu, setShowMenu] = useState(false);
    let menu
    let menuMask
    if(showMenu){
        menu = <div className='navbar__mobile__column'>
                    <Link className='nav__link' to="/eyelashes" title='На главную'>Наращивание ресниц</Link>
                    <Link className='nav__link' to="/permanent">Перманентный макияж</Link>
                    <Link className='nav__link' to="/price">Цены</Link>
                    <Link className='nav__link' to="/contact">Контакты</Link>
            </div>

        menuMask = <div
            className='menuMask'
            onClick={() => setShowMenu(false)}
            >

        </div>
    }

    




    return (
        <div className='navbar__mobile'>
            <span className='text-xl'>
            <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            { menuMask }
            { menu }
        </div>
    )
};
