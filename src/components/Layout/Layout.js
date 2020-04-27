import React from "react";
import Auxil from "../../hoc/Auxiliary";
import classes from "./Layout.css";

const layout = (props) => (
    <Auxil>
        <div>Toolbar</div>
        <main className={classes.Content}>{props.children}</main>
    </Auxil>
)

export default layout;