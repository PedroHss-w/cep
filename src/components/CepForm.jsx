import React from "react";
import { useState } from "react";
import Popup from "./Popup.jsx";
import DisplatCEP from "./DisplayCEP.jsx";

export default function CepForm(){
    const [ getAdress, setAdress ] = useState({});
    const [ openPopup, setOpenPopup ] = useState(false);

    async function getCep(){
        var cepElement = document.getElementById('cep');
        const cep = (cepElement.value).replace('-', '');
        var errorMessage = 'O Cep informado é inválido, reveja e tente novamente.';

        if (cep.length !== 8) {
            alert(errorMessage);
            return;
        }

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        await fetch(url).then((res)=> {
            res.json().then((data)=>{
                if (data.erro) {
                    alert(errorMessage);
                    return;
                } else {
                    setAdress(data);
                    setOpenPopup(true);
                }
            });
        });

    }

    return (
        <div id="cep-form" target="_parent">
            <h2>Insira um CEP valido:</h2>
            <input id="cep" name="cep" type="text" placeholder="00000000"></input>
            <button type="button" className="verificar" onClick={()=>getCep()}>Verificar</button>
            <Popup trigger={{
                    state: openPopup,
                    set: setOpenPopup
                }} title={'Endereço'}>
                    <DisplatCEP adress={{
                        adressObj: getAdress,
                        set: setAdress
                    }}/>
            </Popup>
        </div>
    )
}