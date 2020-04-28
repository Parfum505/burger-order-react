import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Meat', type: 'meat'}
];
const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    { controls.map((item, i) => (
            <BuildControl
                key={`ctrl-${item.label}`}
                label={item.label}
                add={() => props.addIngredients(item.type)}
                remove={() => props.removeIngredients(item.type)}
                disabled={props.disabled[item.type]}
            />
        ))
    }
  </div>
);

export default BuildControls;
