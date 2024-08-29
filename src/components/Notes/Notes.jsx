import {useCallback, useState} from "react";
import NoteItem from "./NoteItem/NoteItem.jsx";
import {NoteList} from "./NoteList/NoteList.jsx";
import {addNote, deleteNote as deleteNoteAction, useAppDispatch, useAppSelector} from "../../store.tsx";
import {UserForm} from "../Form/Form.jsx";

export function Notes() {
    const [inputTitle, setInputTitle] = useState("");
    const [inputText, setInputText] = useState("");

    const notesArr = useAppSelector((state) => state.notes);
    const dispatch = useAppDispatch();

    const handleOnSubmit = (values) => {
        dispatch(addNote(values));
    };

    /*    const inputHandler = useCallback((event) => {
            const inputNote = event.target.value;
            setInputVal(inputNote);
        }, []);*/

    const deleteNote = useCallback((index) => {
            dispatch(deleteNoteAction(index));
        },
        [dispatch]
    );

    return (
        <>
            <UserForm handleOnSubmit={handleOnSubmit}/>
            {/*            <div className="inputHolder">

                <input
                    type="text"
                    maxLength={20}
                    value={inputVal}
                    onChange={inputHandler}
                ></input>
                <button onClick={clickHandler}>Add note</button>
            </div>*/}
            <div className="notesListHolder">
                {notesArr.length === 0 ? (
                    <p>Notes list is empty</p>
                ) : (
                    <NoteList>
                        {notesArr.map((note, index) => (
                            <NoteItem
                                key={index}
                                note={note}
                                id={index}
                                delete={() => deleteNote(index)}
                            />
                        ))}
                    </NoteList>
                )}
            </div>
        </>
    );
}