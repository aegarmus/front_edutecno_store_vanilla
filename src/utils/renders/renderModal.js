export const removeModalDetail = (overlay) => {
    if(overlay) overlay.remove()
}


export const showModalDetail = (container, modalHtmlTemplate) => {
    container.insertAdjacentHTML('beforeend', modalHtmlTemplate)

    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById("modal-close");

    closeBtn.addEventListener('click', () => removeModalDetail(overlay));
    overlay.addEventListener('click', (event) => {
        if(event.target === overlay) removeModalDetail();
    })
}