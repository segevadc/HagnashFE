import {useState, useCallback} from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import {Link} from "react-router-dom";

export const Navbar = () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = useCallback((page) => {
        setActiveItem(page);
    }, []);

    return (
        <Menu pointing secondary>
            <Link to='/'>
            <Menu.Item
                name='bus'
            >
                    <Icon name='bus' size='large' color="red"/>
            </Menu.Item>
            </Link>

            <Link to='/'>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={() => handleItemClick('home')}
            />
            </Link>

            <Link to='/about'>
            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={() => handleItemClick('about')}
            />
            </Link>
        </Menu>

    )
}