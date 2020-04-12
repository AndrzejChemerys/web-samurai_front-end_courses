import { showInConsole, showInDOM } from "./components/show.js";
import bike from './components/product.js';

showInConsole(bike.name);
showInDOM(bike.price, 'h1');
showInDOM(bike.age);
