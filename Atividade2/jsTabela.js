var pessoas, index;

function cadPessoa(nome, telefone, email) {
    pessoas = document.getElementById("tbPessoas");    
    var qtdlLinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlLinhas);
    var linhaParam;

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellTelefone = linha.insertCell(2);
    var cellEmail = linha.insertCell(3);


    cellCodigo.innerHTML = qtdlLinhas;
    cellNome.innerHTML = nome;
    cellTelefone.innerHTML = telefone;
    cellEmail.innerHTML = email;
  
    preencheCamposForm();

    alert("Contato Salvo ")

}



function preencheCamposForm() {

    
    for(var i = 0; i < pessoas.rows.length; i++) 
    
    {
        pessoas.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = pessoas.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = pessoas.rows[index].cells[1].innerText;
            document.getElementById("txtTelefone").value = pessoas.rows[index].cells[2].innerText;
            document.getElementById("txtEmail").value = pessoas.rows[index].cells[3].innerText;
       
        }
    }

    
}

function delRegistro() {

    for(var i = 0; i < pessoas.rows.length; i++) 
    
    {
        if (index == i) {
            pessoas.deleteRow(index);
            alert("Contato Excluido ")

            return;
            

        }

    
    }
}