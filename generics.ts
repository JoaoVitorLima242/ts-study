// S => state
// T => type
// K => key
// V => Value
// E => Element

type numOrString = number | string;

function useState<S extends numOrString = string> (){
    let state: S;

    function getState() {
        return state
    };

    function setState(newState: S) {
        state = newState;
    };

    return {getState, setState};
};

const newState = useState<string | number>()

newState.setState(123) //uma string
console.log(newState.getState())

newState.setState('foo')
console.log(newState.getState())