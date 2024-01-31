(function(){

    const modal = document.querySelector('.modal');
    const btnClose = document.querySelector('.btn-close');
    const btnOpen = document.querySelector('.btn-open');

    function openModal() {
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    btnOpen.addEventListener('click', openModal);

    btnClose.addEventListener('click', closeModal);

})(); // IIFE - Immediately Invoked Function Expression