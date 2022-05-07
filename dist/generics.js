"use strict";
// S => state
// T => type
// K => key
// V => Value
// E => Element
function useState() {
    let state;
    function getState() {
        return state;
    }
    ;
    function setState(newState) {
        state = newState;
    }
    ;
    return { getState, setState };
}
;
const newState = useState();
newState.setState(123); //uma string
console.log(newState.getState());
newState.setState('foo');
console.log(newState.getState());
