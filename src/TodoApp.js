import React, {useState} from "react";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function TodoApp () {
    const initialTodos = [
        {id: 1, task: "Take the bin out", completed: false},
        {id: 2, task: "Wash car", completed: false},
        {id: 3, task: "Grow beard", completed: false},
    ]
    const [todos, setTodos] = useState(initialTodos);

    return (
        <Paper style={{
            padding: 0,
            maring: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </ToolBar>
            </AppBar>
            <TodoList todos={todos} />
        </Paper>
    )
}

export default TodoApp;