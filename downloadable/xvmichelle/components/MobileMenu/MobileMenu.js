
import React, { useState } from 'react';
import ListItem from "@mui/material/ListItem";
import { Link as ScrollLink } from "react-scroll";

const menus = [
    {
        id: 1,
        title: 'Presentación',
        link: 'couple',
        offset: -150,
    },
    {
        id: 2,
        title: 'Galería',
        link: 'gallery',
        offset: -50,
    },
    {
        id: 3,
        title: 'Eventos',
        link: 'event',
        offset: -50,
    },
    {
        id: 4,
        title: 'Detalles importantes',
        link: 'detalles',
        offset: -50,
    },
    {
        id: 5,
        title: 'Asistencia',
        link: 'RSVP',
        offset: -50,
    },
];

const MobileMenu = () => {

    const [menuActive, setMenuState] = useState(false);

    const CloseMenu = () => {
        setMenuState(false);
    };

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div
                        className="clox"
                        onClick={CloseMenu}
                    >
                        <i className="ti-close"></i>
                    </div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item) => (
                        <ListItem key={item.id}>
                            <ScrollLink
                                activeClass="active"
                                to={item.link}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={item.offset}
                                onClick={CloseMenu}
                            >
                                {item.title}
                            </ScrollLink>
                        </ListItem>
                    ))}
                </ul>
            </div>

            <div
                className="showmenu"
                onClick={() => setMenuState(!menuActive)}
            >
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;
