const calcularMedia = (numeros) => {
    let soma = 0; // Inicializa a soma como 0
  
    // Soma todos os números no array
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
  
    // Calcula a média dividindo a soma total pelo número de elementos no array
    let media = soma / numeros.length;
  
    // Retorna o valor médio
    return media;
  };
  const numeros = [5, 10, 15, 20, 25];
  console.log(calcularMedia(numeros)); // Deverá imprimir a média dos números, que é 15
    