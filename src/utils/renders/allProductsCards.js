export const renderAllProductCards = (container, cardHtmlTemplates) => {
    if(!container) {
        console.error('El contenedor no puede estar vacío');
        throw new Error("El contenedor no puede estar vacío");
    }

    if(!cardHtmlTemplates) {
        console.error('El template de las tarjetas no puede estar vacio');
        throw new Error('El templater de las tarjetas no puede estar vacío')
    }
    
    container.innerHTML = cardHtmlTemplates
}