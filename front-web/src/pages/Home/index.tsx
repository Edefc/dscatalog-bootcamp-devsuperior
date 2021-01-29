import React from 'react';
import { ReactComponent as MainImagem} from 'core/assets/images/main-image.svg';
import ButtonIcon from 'core/components/Buttonicon';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="row home-content card-base border-radius-20">
            <div className="col-6 home-text">
                <h1 className="text-title">Conheça o melhor <br/> catálogo de produtos</h1>
                <p className="text-subtitle">
                    Ajudaremos você a encontrar os melhores <br/> produtos disponíveis no mercado.
            </p>
            <Link to="/products">
            <ButtonIcon text="Inicie agora sua busca" />
            </Link>
            </div>
            <div className="col-6">
                <MainImagem className="main-image" /> 
            </div>
        </div>
    </div>
);

export default Home;