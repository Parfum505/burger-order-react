import React from "react";
import Auxil from "../../hoc/Auxiliary";


const layout = (props) => (
    <Auxil>
        <div>Toolbar</div>
        <main>{props.children}</main>
    </Auxil>
)

export default layout;