import React, { useState, useEffect } from 'react';
import { getNotas } from '../../funcoes';
import './NotasComponent.css';

const NotasComponent = ({ onNotasLoad }) => {
    const [notas, setNotas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNotas = async () => {
            try {
                const data = await getNotas(false, 10);
                setNotas(data.dados || []);
                onNotasLoad(data.dados || []); // Passa as notas carregadas para o MenuScreen
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
        <div>
            <h1>Notas</h1>
            {notas.length > 0 ? (
                <ul>
                    {notas.map((nota) => (
                        <li key={nota.id}>
                            <p>{nota.conteudo}</p>
                            <p>Usuário: {nota.usuario.nome}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="nenhumaNota">
                    <p>Nenhuma nota encontrada</p>
                </div>
            )}
        </div>
    );
};

export default NotasComponent;
