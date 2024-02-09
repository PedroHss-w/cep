import React from "react";

export default function DisplatCEP(req) {
    const adress = req.adress.adressObj;

    function presentAdress(adress){
        var jsx = Object.getOwnPropertyNames(adress).map(item=>{
            let plaintext = item.charAt(0).toUpperCase() + item.slice(1);
            if (!adress[item]) return (<></>);
            return (
                <li key={item}>{`${plaintext}: ${adress[item]}`}</li>
            );
        });

        return jsx;
    }

    return (
        <ul id="DisplayCEP">
            {presentAdress(adress)}
        </ul>
    );
}