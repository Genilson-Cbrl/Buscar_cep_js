const buscarCep = document.getElementById("Buscar");
const cepInput = document.getElementById("cep");
const ufRep = document.getElementById("estado");
const cidadeRep = document.getElementById("cidade");
const bairroRep = document.getElementById("bairro");
const logradouroRep = document.getElementById("logradouro");

async function buscarCepFn(cep) {
  try {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let data = await response.json();

    if (data.erro) {
      alert("CEP invelido!!!");
    } else {
      ufRep.innerText = `${data.uf}`;
      cidadeRep.innerText = `${data.localidade}`;
      bairroRep.innerText = `${data.bairro}`;
      logradouroRep.innerText = `${data.logradouro}`;
    }
  } catch (error) {}
}
buscarCep.addEventListener("click", (e) => {
  e.preventDefault();
  let cep = cepInput.value.trim();

  if (cep.length === 8 && !isNaN(cep)) {
    buscarCepFn(cep);
  } else {
    alert("Digite um Cep valido de 8 numeros!!");
  }
});
