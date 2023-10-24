const form = document.getElementById('formValor');

function validarFormulario(bancoA, bancoB) {
    return bancoB > bancoA
}
form.addEventListener("submit", function (e) {
    let formValor 
    e.preventDefault();

    const bancoA = document.getElementById("bancoA").value;
    const bancoB = document.getElementById("bancoB").value;
    const mensagem = `é valido, o bancoB: ${bancoB}, é maior que o bancoA: ${bancoA}`;

    formValor = validarFormulario(bancoA, bancoB)
    if (formValor) {
        alert(mensagem);
        bancoA.value = '';
        bancoB.value = '';
    }
    else if (bancoB == bancoA) {
        alert("Nao e valido B é igual A");
    }

    else {
        alert('nao e valido A é maior que B');
    }
})
console.log(form)