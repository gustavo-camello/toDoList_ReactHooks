import React, {useState} from "react";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

function TodoForm (props) {
    const [value, handleChange, reset] = useInputState("");

    return (
        <Paper>
            <form onSubmit={ e => {
                e.preventDefault();
                props.addTodo(value);
                reset();
            }}>
                <TextField value={value} onChange={handleChange}/>
            </form>
        </Paper>
    )
}

export default TodoForm;