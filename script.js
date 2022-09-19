const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

type="text/javascript">
        /*Função de mudar o celular*/
        function imgSlider(e){
            document.querySelector('#phone').src = e;
        }