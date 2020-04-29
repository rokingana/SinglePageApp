import { routing } from "./routes.js";
import { default as start } from "./routes.js";

function route() {
    
    window.location.hash = start.hash;
    start.init();
     
}

window.onhashchange = route;

route();