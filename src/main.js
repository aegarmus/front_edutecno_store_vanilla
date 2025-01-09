import { createProductsCards } from "./components/cards.js";
import { createProductsModal } from "./components/modal.js";
import { getAllProducts, getProductById } from "./services/api/apiProducts.js"
import { registerUserControl } from "./utils/formControls/registerControl.js";
import { renderAllProductCards } from "./utils/renders/allProductsCards.js";
import { showModalDetail } from "./utils/renders/renderModal.js";

const containerProducts = document.getElementById('products')
const buttonRegister = document.getElementById('btn-registro')


const products = await getAllProducts();

const cardHtmlProductsTemplate = createProductsCards(products);

renderAllProductCards(containerProducts, cardHtmlProductsTemplate);

const attachDetailButtonsListeners = (container) => {
    const detailsButtons = container.querySelectorAll(".btn-detail");

    detailsButtons.forEach(button => {
        button.addEventListener('click', async(event) => {
            const productId = button.getAttribute("data-id");
            if(!productId) return;

            try {
                const product = await getProductById(productId);
                const modalHtmlTemplate = createProductsModal(product);
                const body = document.body;
                showModalDetail(body, modalHtmlTemplate);

            } catch (error) {
                console.error('Error al obtener el detalle del producto', error);
                throw new Error(error)
            }
        })
    })
}

attachDetailButtonsListeners(containerProducts);

buttonRegister.addEventListener('click', async(event) => {
    event.preventDefault()
    await registerUserControl()
})