class Forca {

  arrPalavra = [];
  arrLetra = [];
  vidas = 6;
  contador = 0;
  contador2 = 0;

  constructor(nome) {
    this.nome = nome;
  }

  mascararPalavra(nome, arrPalavra) {
    for(let i = 0; i <nome.length; i++) {
      arrPalavra[i] = "_"
    }
  }


  substituirPalavra(nome, arrPalavra, letra) {
    for(let i = 0; i<nome.length; i++) {
      if(nome[i] == letra) {
        arrPalavra[i] = letra;
        this.contador2++;
      }
    }
  }


  chutar(letra) {
    this.arrLetra.push(letra);

    if(this.contador == 0) {
      this.mascararPalavra(this.nome, this.arrPalavra)
      this.contador++
    }

    if(this.nome.indexOf(letra) >= 0 && !(this.arrPalavra.indexOf(letra) >= 0)) {
      this.substituirPalavra(this.nome, this.arrPalavra, letra);
    } else {
      this.vidas--;
    }
  }

  buscarEstado() {
    if(this.vidas === 0) {
      return "perdeu"
    } else if(this.contador2 === this.nome.length) {
      return "ganhou"
    }
   } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"


  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.arrLetra, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.arrPalavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

}
module.exports = Forca;
