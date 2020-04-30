/**
 * The controller responds to the user input and performs interactions on the data model objects.
 * The controller receives the input, optionally validates it and then passes the input to the model.
 */
import { canvas } from "../view/hello-view.js"
import { fetchChuck } from "../service/api.js";

function hello() {
    const welcome = "welcome";
    console.log(welcome);
    canvas(welcome);
}

async function getChuck() {

    let chuck = await fetchChuck();
        if (!chuck){
            hello();
            throw new Error("something whent really wrong");
        }

    canvas(chuck);
}

export default hello;
export { getChuck };

