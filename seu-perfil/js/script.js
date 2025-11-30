// Controle de Tamanho de Fonte
document.addEventListener('DOMContentLoaded', function() {
    const btnAumentarFonte = document.getElementById('aumentarFonte');
    const btnDiminuirFonte = document.getElementById('diminuirFonte');
    
    let tamanhoFonte = 16; // Tamanho base
    
    // Aumentar fonte
    if (btnAumentarFonte) {
        btnAumentarFonte.addEventListener('click', function() {
            tamanhoFonte += 2;
            if (tamanhoFonte > 24) tamanhoFonte = 24;
            document.body.style.fontSize = tamanhoFonte + 'px';
        });
    }
    
    // Diminuir fonte
    if (btnDiminuirFonte) {
        btnDiminuirFonte.addEventListener('click', function() {
            tamanhoFonte -= 2;
            if (tamanhoFonte < 12) tamanhoFonte = 12;
            document.body.style.fontSize = tamanhoFonte + 'px';
        });
    }
    
    // Filtro de Daltonismo - Toggle da caixinha
    const btnFiltroDaltonismo = document.getElementById('btnFiltroDaltonismo');
    const filtroDaltonismoBox = document.getElementById('filtroDaltonismo');
    
    if (btnFiltroDaltonismo && filtroDaltonismoBox) {
        // Função para toggle
        const toggleFiltro = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            const isAberto = filtroDaltonismoBox.classList.contains('aberto');
            
            if (isAberto) {
                filtroDaltonismoBox.classList.remove('aberto');
                btnFiltroDaltonismo.setAttribute('aria-expanded', 'false');
            } else {
                filtroDaltonismoBox.classList.add('aberto');
                btnFiltroDaltonismo.setAttribute('aria-expanded', 'true');
            }
        };
        
        // Adicionar múltiplos eventos para garantir que funcione em toda a área
        btnFiltroDaltonismo.addEventListener('click', toggleFiltro);
        btnFiltroDaltonismo.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });
        
        // Fechar ao clicar fora
        document.addEventListener('click', function(e) {
            if (filtroDaltonismoBox && !filtroDaltonismoBox.contains(e.target) && !btnFiltroDaltonismo.contains(e.target)) {
                filtroDaltonismoBox.classList.remove('aberto');
                btnFiltroDaltonismo.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Filtro de Daltonismo - Aplicar filtro
    const filtroSelect = document.querySelector('.filtro-select');
    if (filtroSelect) {
        filtroSelect.addEventListener('change', function() {
            const tipoFiltro = this.value;
            document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
            
            if (tipoFiltro !== 'Cores Padrão') {
                document.body.classList.add(tipoFiltro.toLowerCase());
            }
        });
    }
    
    // Menu Lateral
    const btnMenu = document.getElementById('btnMenu');
    const menuLateral = document.getElementById('menuLateral');
    const overlayMenu = document.getElementById('overlayMenu');
    const btnFecharMenu = document.getElementById('fecharMenu');

    const abrirMenu = () => {
        if (!menuLateral || !overlayMenu || !btnMenu) return;
        menuLateral.classList.add('aberto');
        overlayMenu.classList.add('ativo');
        menuLateral.setAttribute('aria-hidden', 'false');
        btnMenu.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const fecharMenu = () => {
        if (!menuLateral || !overlayMenu || !btnMenu) return;
        menuLateral.classList.remove('aberto');
        overlayMenu.classList.remove('ativo');
        menuLateral.setAttribute('aria-hidden', 'true');
        btnMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    btnMenu?.addEventListener('click', abrirMenu);
    btnFecharMenu?.addEventListener('click', fecharMenu);
    overlayMenu?.addEventListener('click', fecharMenu);
    
    // Fechar menu com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharMenu();
    });
    
    // Carrossel automático
    const carrossel = document.querySelector('#carrosselHero');
    if (carrossel) {
        new bootstrap.Carousel(carrossel, {
            interval: 5000,
            wrap: true,
            pause: 'hover'
        });
    }
    
    // Busca
    const inputBusca = document.querySelector('.cabecalho input[type="text"]');
    if (inputBusca) {
        inputBusca.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const termo = this.value.trim();
                if (termo) {
                    console.log('Buscando por:', termo);
                }
            }
        });
    }
});

// Mostrar Senha, Nova Senha e Confirmação de Senha
function mostrarSenha(){
    let senha = document.getElementById('input-dados-senha');
    let imgOlho = document.getElementById('vis-on');

    if(senha.type === 'password'){
        senha.type = 'text';
        imgOlho.src = 'img/vis_off.svg'
    }
    else{
        senha.type = 'password';
        imgOlho.src = 'img/vis_on.svg'
    }
}

function mostrarNovaSenha(){
    let novaSenha = document.getElementById('input-dados-nova-senha');
    let imgOlho2 = document.getElementById('vis-on-2');

    if(novaSenha.type === 'password'){
        novaSenha.type = 'text';
        imgOlho2.src = 'img/vis_off.svg'
    }
    else{
        novaSenha.type = 'password';
        imgOlho2.src = 'img/vis_on.svg'
    }
}

function mostrarConfSenha(){
    let confirmarSenha = document.getElementById('input-dados-conf-senha');    
    let imgOlho3 = document.getElementById('vis-on-3');

    if(confirmarSenha.type === 'password'){
        confirmarSenha.type = 'text';
        imgOlho3.src = 'img/vis_off.svg'
    }
    else{
        confirmarSenha.type = 'password';
        imgOlho3.src = 'img/vis_on.svg'
    }
}

// Editar Nome, Descrição e E-mail
let nome = document.getElementById('input-perfil-nome');
let desc = document.getElementById('perfil-textarea');
let email = document.getElementById('input-perfil-email');
function editarNome(){
    let botaoSalvar = document.getElementById('botao-salvar-nome');

    if(nome.readOnly === true){
        nome.readOnly = false;
        botaoSalvar.style.display = "block";
        botaoSalvar.style.textAlign = "center";
    }   
}
function salvarNome(){
    if(nome.value == 0)
        alert('Insira um nome válido!')
}

function editarDesc(){
    let botaoSalvar = document.getElementById('botao-salvar-desc');

    if(desc.readOnly === true){
        desc.readOnly = false;
        botaoSalvar.style.display = "block";
        botaoSalvar.style.textAlign = "center";
    }   
}
function salvarDesc(){
    if(desc.value == 0)
        alert('Insira uma descrição válida!')
}

function editarEmail(){
    let botaoSalvar = document.getElementById('botao-salvar-email');

    if(email.readOnly === true){
        email.readOnly = false;
        botaoSalvar.style.display = "block";
        botaoSalvar.style.textAlign = "center";
    }   
}
function salvarEmail(){
    if(email.value == 0)
        alert('Insira um e-mail válido!')
}
