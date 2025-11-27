function mostrarSenha(){
    let senha = document.getElementById('senha');
    let imgOlho = document.getElementById('vis_on');

    if(senha.type === 'password'){
        senha.type = 'text';
        imgOlho.src = 'assets/vis_off.svg'
    }
    else{
        senha.type = 'password';
        imgOlho.src = 'assets/vis_on.svg'
    }
}