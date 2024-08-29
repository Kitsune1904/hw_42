import classes from './NoteItem.module.css'

const NoteItem = (props) => {
    return (
        <li className={classes.item}>
            <span>{props.note.title}</span>
            <p>{props.note.text}</p>

            <button data-index={props.id} onClick={props.delete}>Delete note</button>
        </li>
    );
};

export default NoteItem;