import React from "react";

export default function Popup(req) {
    return (req.trigger.state) ? (
            <div className="popup-box" >

                <div className="subHeader">
                    <h2 className="subheader">{req.title}</h2>
                </div>

                {req.children}
                <button className="closeBttn" onClick={()=>{req.trigger.set(false)}}>
                    Fechar
                </button>
            </div>
    ) : "";
}