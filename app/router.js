import { routes } from "./routes.js";
import defaultRoute from "./routes.js";

function route() {
    

    const { init } = Object.values(routes).find(
        ({ hash }) => window.location.hash.startsWith(hash)
    ) || defaultRoute;

    init();
     
}

window.onhashchange = route;

route();