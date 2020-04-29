import hello from "../app/controller/hello-ctr.js";

const DEFAULT = {
    hash: "#hello",
    init: hello    
} 


function routing() {
    console.log('ahhhahahahha');
    hello();
}



export default DEFAULT;
export { routing };