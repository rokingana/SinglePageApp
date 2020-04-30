import hello from "../app/controller/hello-ctr.js";
import { getChuck } from "../app/controller/hello-ctr.js";

export default {
    hash: "#hello",
    init: hello    
}

const routes = {
    chuck: {
        hash: "#chuck",
        init: getChuck
    }
}


/*function routing() {
    console.log('ahhhahahahha from routes routing');
    getChuck();
}*/



//export default DEFAULT;
export { routes };