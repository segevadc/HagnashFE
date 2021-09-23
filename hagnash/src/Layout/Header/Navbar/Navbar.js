import {useState, useCallback} from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import LOGO from "../../../assets/hagnash_logo.png"

export const Navbar = () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = useCallback((page) => {
        setActiveItem(page);
    }, []);

    return (
        <Menu pointing secondary>
            <Link to='/'>
                <Menu.Item position="right">
                    <div id="logo">
                        Hagnash<span id="dot-com">.com</span>
                    </div>
                </Menu.Item>
            </Link>
        </Menu>

    )
}