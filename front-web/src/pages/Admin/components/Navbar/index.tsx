import React from 'react';
import './styles.scss';

const Navbar = () => (
    <nav className="admin-nav-container">
        <ul>
            <li>
                <a href="limk" className="admin-nav-item active">Meus produtos</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="link" className="admin-nav-item">Minhas categorias</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="link" className="admin-nav-item">Meus usuários</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;