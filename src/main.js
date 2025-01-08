import { createProductsCards } from "./components/cards.js";
import { getAllProducts } from "./services/api/apiProducts.js"
import { renderAllProductCards } from "./utils/renders/allProductsCards.js";

const containerProducts = document.getElementById('products')


const products = await getAllProducts();

const cardHtmlProductsTemplate = createProductsCards(products)

renderAllProductCards(containerProducts, cardHtmlProductsTemplate)