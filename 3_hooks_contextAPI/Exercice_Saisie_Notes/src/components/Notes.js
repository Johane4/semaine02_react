const Notes = ({notes}) => {
    return (
        <ul className="notes">
            {notes.map((note, i) => <li key={i}>{note}/20</li>)}
        </ul>
    )
}

export default Notes;