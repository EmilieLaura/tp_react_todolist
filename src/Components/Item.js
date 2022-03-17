export default function Item(props) {

    return(
        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
            <div>
                <h5 className="p-2">{props.txt}</h5>
                <p className="p-2">{props.comment}</p>
            </div>

            <div>
                <button className="btn btn-primary p-2 m-2" onClick={() => props.change(props.id)}>Terminer</button>

                <button className="btn btn-danger p-2 m-2" onClick={() => props.delete(props.id)}>Supprimer</button>
            </div>
        </li>
    )
}
