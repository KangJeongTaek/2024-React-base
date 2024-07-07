import {createStore} from 'redux';
const divToggle = document.querySelector('.toggle');
const counter= document.querySelector('h1');
const btnIncraese = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');


const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = diffrence => ({type:INCREASE, diffrence});
const decrease = () =>({type:DECREASE});

const initialSate = {
    toggle: false,
    counter: 0
};

// state가 unbdefined 일 때는 initialState를 기본값으로 사용
function reducer(state = initialSate, action){
    //action.type에 따라 다른 작업을 처리함
    switch(action.type){
        case TOGGLE_SWITCH:
        return{
            ...state,
            toggle:!state.toggle
        };
        case INCREASE:
            return{
                ...state,
                counter:state.counter + action.diffrence
            }
        case DECREASE:
            return{
                ...state,
                counter:state.counter -1
            };
            default:
                return state;

        
    }
}

const store = createStore(reducer);

const render = () =>{
    const state = store.getState();
    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('active');
    }
    counter.innerText = state.counter;
}

render();

store.subscribe(render);

divToggle.onclick = () =>{
    store.dispatch(toggleSwitch());
};
btnIncraese.onclick = () =>{
    store.dispatch(increase(1));
}
btnDecrease.onclick = () =>{
    store.dispatch(decrease());
};