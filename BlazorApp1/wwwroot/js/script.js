window.initNavLinks = function () {
    const button = document.querySelector('.btn');
    const link = document.querySelector('.ww-linka');

    link.addEventListener('click', () => {
        button.classList.toggle('active'); 
    });
};
