import React, { useState, useEffect } from 'react';
import { getNotas } from '../../funcoes';
import './NotasComponent.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

const NotasComponent = ({ onNotasLoad }) => {
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNotas = async () => {
            try {
                const data = await getNotas(false, 10);
                setNotas(data || []);
                console.log('ytguiu');
            } catch (error) {
                console.error("Erro ao buscar notas:", error);
            } finally {
                setLoading(false);
            }
        };
        loadNotas();
    }, [onNotasLoad]);
        
    

   

    if (loading) return <p>Carregando...</p>;

    return (
        <>
        <Carousel>
        {notas.map((nota, index) => (
            
            <Carousel.Item>
               <div className="notas-container">
                    <div className="nota3 nota"></div>
                    <div className="nota2 nota"></div>
                    <div className="nota1 nota">
                            <h1>Notas</h1>
                            {notas.length > 0 ? (
                                <ul>
                                   
                                        <li key={nota.id}>
                                            <p>{nota.conteudo}</p>
                                            <p>Usuário: {nota.usuario.nome}</p>
                                        </li>
                                 
                                </ul>
                            ) : (
                                <div className="nenhumaNota">
                                    <p>Nenhuma nota encontrada</p>
                                </div>
                            )}
                        
                                      </div>
                    <div className="pin"></div>
                    </div>
            </Carousel.Item>
        ))};
        </Carousel>
        </>

        
    );
};

export default NotasComponent;
