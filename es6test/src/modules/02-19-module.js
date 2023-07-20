let base = 10;
const add = (x) => base + x;
const multiply = (x) => base * x;

const getBase = () => base;

export {add, multiply};

export default getBase; // default로 export, import할 수 있는 요소는 단 하나.