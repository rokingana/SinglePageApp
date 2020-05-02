import getChuck from './controller/wecome.js';
import { catChuck } from "./controller/wecome.js";
import { search } from "./controller/wecome.js";

export default {
    hash: "#randomChuck",
    init: getChuck
}

const routes = {
    category: {
        hash: "#categoryChuck",
        init: catChuck
    },
    search: {
        hash: "#searchChuck",
        init: search
    }
}


export { routes };

