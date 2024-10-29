import React, {useState} from 'react'
export default function Cliente() {
    let showPass = false
    function toggleShowPass(){
        if(showPass){
            setCurrentVisibilityState('password')
            setShowPassIcon("./src/assets/offshowpass.png")
        } else {
            setCurrentVisibilityState('text')
            setShowPassIcon("./src/assets/onshowpass.png")
        }
        
        showPass = !showPass
    }

    const [showPassIcon, setShowPassIcon] = useState("./src/assets/offshowpass.png");
    const [currentVisibilityState, setCurrentVisibilityState] = useState('password');

    return(
    <div className="inputFieldContainer">
        <div><p>Nome</p><input type="text" /></div>
        <div><p>E-mail</p><input type="text" /></div>
        <div><p>Senha</p>
        <input type={currentVisibilityState} /> 
                <img id="showPassIcon" onClick={toggleShowPass} src={showPassIcon}/>
        </div>
        <div>
            <p>Confirmar senha</p>
            <input type={currentVisibilityState}/>
                <img id="showPassIcon" onClick={toggleShowPass} src={showPassIcon}/>
                </div>
        <div><p>Data de nascimento</p><input type="date" /></div>
        <div><p>Foto</p><input type="file" /></div>
        <div><p>CPF</p><input type="number" /></div>
        <div><p>CRP</p><input type="number" /></div>
    </div>)
    
}