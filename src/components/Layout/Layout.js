import React from "react";
import Auxil from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideMenu from "../Navigation/SideMenu/SideMenu";

const layout = (props) => (
    <Auxil>
        <Toolbar />
        <SideMenu />
        <main className={classes.Content}>{props.children}</main>
    </Auxil>
)

export default layout;