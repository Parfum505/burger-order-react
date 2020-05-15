import React from "react";
import Logo from "../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideMenu.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxil from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";

const SideMenu = (props) => {
  return (
    <Auxil>
      <Backdrop
        addClass={["hideDesktop"]}
        show={props.show}
        clicked={props.closeMenu}
      />
      <div
        className={[classes.SideMenu, props.show ? classes.Open : null].join(
          " "
        )}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Auxil>
  );
};
SideMenu.propTypes = {
  show: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
export default React.memo(SideMenu);
