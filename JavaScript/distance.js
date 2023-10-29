function contarFrequencia(frase) {
    // Converte a frase para minúsculas.
    fraseMinuscula = frase.toLowerCase();
  
    // Divide a frase em palavras.
    palavras = fraseMinuscula.split(" ");
  
    // Inicializa um objeto para armazenar a frequência de cada palavra.
    frequencia = {};
    for (palavra of palavras) {
      frequencia[palavra] = 0;
    }
  
    // Conta a ocorrência de cada palavra.
    for (palavra of palavras) {
      frequencia[palavra]++;
    }
  
    // Retorna o objeto de frequência.
    return frequencia;
  }
  
  function main() {
    // Lê uma frase do usuário.
    frase = prompt("Digite uma frase: ");
  
    // Conta a frequência de cada palavra.
    frequencia = contarFrequencia(frase);
  
    // Imprime a frequência de cada palavra.
    for (palavra, ocorrencia of frequencia) {
      console.log(palavra + ": " + ocorrencia);
    }
  }
  
  if (require.main === module) {
    main();
  }
  