// BARRA DE PESQUISA 

 const btnBusca = document.getElementById('btn-busca');
  const barra = document.getElementById('barra-pesquisa');
  const inputBusca = barra.querySelector('input');

  // Ao clicar na lupa
  btnBusca.addEventListener('click', (e) => {
    e.stopPropagation();
    barra.classList.toggle('ativa');

   // Se estiver visível agora, dá foco no input
    if (barra.classList.contains('ativa')) {
      setTimeout(() => inputBusca.focus(), 200); // espera para animação
    }
  });

  // Impede que clique dentro da barra feche ela
  barra.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Fecha ao clicar fora
  document.addEventListener('click', () => {
    barra.classList.remove('ativa');
  });





