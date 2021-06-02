const popupOverlay = document.querySelector('.popup-overlay')
let visible

function togglePopup(element) {
    visible = element.id
    const popup = document.querySelector('#' + visible+ '.popup')
    
    popup.style.display = 'block'
    popupOverlay.style.display = 'block'
}
function closePopup(element) {
    const popup = document.querySelector('#' + visible+ '.popup')
    
    popup.style.display = 'none'
    popupOverlay.style.display = 'none'
}
