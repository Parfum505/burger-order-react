import React from "react";
import Logo from "../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideMenu.css";

const sideMenu = (props) => {
    return (
        <div className={`${classes.SideMenu}`}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavItems />
            </nav>
        </div>
    );
}
export default sideMenu;