import { formatPrice } from "../utils/normalize/priceFormat.js";


export const createProductsCards = (products) => {
    try {
        
        let templateHtml = ''

        products.forEach(product => {
            templateHtml += `
                <div class="card">
                    <div class="card__header">
                        <h3>${product.nombre}</h3>
                        <p>${product.id}</p>
                    </div>
                    <div class="card__body">
                        <p>${product.description}</p>
                        <p>Stock: ${product.stock}</p>
                        <p>${formatPrice(product.precio)}</p>
                    </div>
                </div>
            `;
        })

        return templateHtml
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}