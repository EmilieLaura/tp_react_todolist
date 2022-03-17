import {useState} from 'react';
import Item from './Item';

export default function Form() {

    const [dataList, setDataList] = useState([]);
    const [stateInput, setStateInput] = useState();
    const [stateComment, setStateComment] = useState();
    

    const addTodo = e => {
        e.preventDefault();
        const newList = [...dataList] // création d'un nouveau tableau avec tous les objets
        const newTodo = {}; // création d'un nouvel objet
        newTodo.txt = stateInput; // on lui ajoute les propriétés
        newTodo.comment = stateComment;
        // newTodo.status = stateStatus;
        // newTodo.id = '';

        newList.push(newTodo);
        setDataList(newList);
    }
 
    const linkedInput = e => {
        // console.log(e);
        setStateInput(e);
    }

    const linkedComment = e => {
        setStateComment(e);
    }

    const deleteItem = id => {
        // console.log(id);
        const filterState = dataList.filter(item => {
            return item.id !== id;
        })

        setDataList(filterState);
    }


    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Nouvelle tâche</label>
                <input onInput={e => linkedInput(e.target.value)} type="text" className="form-control" id="todo"/>

                <label htmlFor="comment" className="form-label mt-3">Commentaire</label>
                <textarea onInput={e => linkedComment(e.target.value)} type="text" className="form-control" id="comment"/>

                <button type="submit" className="mt-2 btn btn-primary d-block">Ajouter</button>
            </form>

            <h2 className="mt-5">Liste des tâches :</h2>

            <ul className="list-group">
                {dataList.map(item => {
                    return (
                        <div>
                            <Item
                            txt={item.txt}
                            comment={item.comment}
                            status={item.status}
                            key={item.id}
                            id={item.id}
                            delete={deleteItem}
                            />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
