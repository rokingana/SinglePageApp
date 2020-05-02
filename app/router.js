import routes from "./routes.js";
import defaultRoute from "./routes.js";

console.log('wahhhaaa');


function route() {

    

    const { init } = Object.values(routes).find(
        ({ hash }) => window.location.hash.startsWith(hash)
    ) || defaultRoute;

    console.log(routes);
    

    init();
}

window.onhashchange = route;

route();