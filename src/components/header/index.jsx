import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import './index.css';

const Header = () => (
    <Menu fixed="top" inverted stackable>
        <Container>
            <Menu.Item as="a" header href="https://creatureoftech.com">
                <div>
                    <div>
                        <Image className="logo-cot" size="mini" src="weather.png" />
                    </div>
                    <div>
                        <span className="title">
                        Creature of Tech&nbsp;
                        </span>
                        <span className="sub-title">
                        adventures in bits and bytes
                        </span>
                    </div>
                </div>
            </Menu.Item>
        </Container>
    </Menu>
);

export default Header;