import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
    const s1 = {
        title: "Crud oprator",
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                title: " Bussines Data",
            });
        },5000);
    };
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
};
export default NoteState;