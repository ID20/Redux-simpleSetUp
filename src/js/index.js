//exporting store and actions as global varibale

import store from "../js/store/index";
import { addArticle } from "../js/Actions/index";

window.store = store;
window.addArticle = addArticle;
