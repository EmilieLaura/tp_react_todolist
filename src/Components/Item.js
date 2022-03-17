import React, {useState} from "react";

export default function Item(props) {

    const [toggle, setToggle] = useState(false);

    const changeState = () => {
        setToggle(!toggle);
    };

    return(
        <div className="d-flex justify-content-between align-items-center p-2 m-5" className={toggle ? 'status-finish' : 'status-todo'}>
            <div>
                <h5 className="p-2">{props.txt}</h5>
                <p className="p-2">{props.comment}</p>
            </div>

            <div className="d-flex">
                <div>
                    <button className="btn btn-primary p-2 m-2 " onClick={changeState}>Terminer</button>
                </div>

                <div>
                    <button className="btn btn-danger p-2 m-2" onClick={() => props.delete(props.id)}>Supprimer</button>
                </div>
            </div>
        </div>
    )
}
