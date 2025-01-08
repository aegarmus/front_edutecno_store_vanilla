
export const createProductsModal = (product) => {
    return `
        <div class="modal-overlay" id="modal-overlay">
            <div class="modal" id="modal-detail">
                <button class="modal__close" id="modal-close">X</button>
                <h3>Detalle de Producto</h3>
                <p><span>Nombre: </span>${product.nombre}</p>
                <p><span>ID:</span> ${product.id}</p>
                <p><span>Descripcion: </span>${product.description}</p>
                <p><span>Stock: </span>${product.stock}</p>
                <p><span>Precio: </span>${product.precio}</p>
            </div>
        </div>
    `;
}