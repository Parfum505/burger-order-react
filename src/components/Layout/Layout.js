import React, { Component } from "react";
import Auxil from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideMenu from "../Navigation/SideMenu/SideMenu";

class Layout extends Component {
    state = {
        showMobileMenu: false
    }
    closeMobileMenuHandler = () => {
        this.setState({showMobileMenu: false})
    }
    openMobileMenuHandler = () => {
        this.setState({showMobileMenu: true})
    }
    render() {
        return (
            <Auxil>
                <Toolbar openMenu={this.openMobileMenuHandler}/>
                <SideMenu show={this.state.showMobileMenu}
                          closeMenu={this.closeMobileMenuHandler}/>
                <main className={classes.Content}>{this.props.children}</main>
            </Auxil>
        );
    }
}

export default Layout;