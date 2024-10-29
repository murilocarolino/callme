import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { postCliente } from '../funcoes';

const Cliente = forwardRef((props, ref) => {
    const [showPassIcon, setShowPassIcon] = useState("./src/assets/offshowpass.png");
    const [currentVisibilityState, setCurrentVisibilityState] = useState('');
    const [login, setLogin] = useState("");
    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [idAvatar, setIdAvatar] = useState(1);

    let showPass = false;
    function toggleShowPass() {
        if (showPass) {
            setCurrentVisibilityState('password');
            setShowPassIcon("./src/assets/offshowpass.png");
        } else {
            setCurrentVisibilityState('text');
            setShowPassIcon("./src/assets/onshowpass.png");
        }
        showPass = !showPass;
    }

    useImperativeHandle(ref, () => ({
        handleRegister
    }));

    const handleRegister = async () => {
        const dados = { nome, login, senha, nascimento, idAvatar };
        let validateStatus = true;

        if (validateStatus && senha !== confirmPassword) {
            validateStatus = false;
            alert("As senhas não coincidem!");
        }
        if (validateStatus && senha.length < 8) {
            validateStatus = false;
            alert("Senha muito curta");
        }
        if (validateStatus && senha.length > 64) {
            validateStatus = false;
            alert("Senha muito longa");
        }
        if (validateStatus && nascimento.length !== 10) {
            validateStatus = false;
            alert("Nascimento Indefinido");
        }
        if (validateStatus && isNaN(idAvatar)) {
            validateStatus = false;
            alert("Avatar Indefinido");
        }

        try {
            if (validateStatus) {
                let response = await postCliente(dados);
                if (response.success) {
                    alert("Cadastro realizado com sucesso!");
                    console.log(response);
                } else {
                    alert('Erro: Falha ao cadastrar.');
                }
            }
        } catch (error) {
            alert('Erro: Falha ao cadastrar.');
            console.error(error);
        }
    };

    return (
        <div className="inputFieldContainer">
            <div><p>Nome</p><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} /></div>
            <div><p>E-mail</p><input type="text" value={login} onChange={(e) => setLogin(e.target.value)} /></div>
            <div><p>Senha</p>
                <input type={currentVisibilityState} value={senha} onChange={(e) => setSenha(e.target.value)} />
                <img id="showPassIcon" onClick={toggleShowPass} src={showPassIcon} />
            </div>
            <div>
                <p>Confirmar senha</p>
                <input type={currentVisibilityState} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <img id="showPassIcon" onClick={toggleShowPass} src={showPassIcon} />
            </div>
            <div><p>Data de nascimento</p><input type="date" value={nascimento} onChange={(e) => setNascimento(e.target.value)} /></div>
            <div><p>Avatar</p></div>
        </div>
    );
});

export default Cliente;