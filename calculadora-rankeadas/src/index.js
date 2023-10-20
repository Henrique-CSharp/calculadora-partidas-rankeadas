

function calcularSaldoRankeadas(vitorias, derrotas) {

   return vitorias - derrotas;

}

function classificarPontuacao(saldoRankeadas) {

 /* switch(saldoRankeadas) {

      case saldoRankeadas < 10:

          return 'Ferro';

          

      case saldoRankeadas >= 11 && saldoRankeadas < 20:

          return 'Broze';

          break;

      case saldoRankeadas >= 21 && saldoRankeadas < 50:

          return 'Prata';

          

      case saldoRankeadas >= 51 && saldoRankeadas < 80:
        
          return 'Ouro';

          

      case saldoRankeadas >= 81 && saldoRankeadas < 90:

          return 'Diamante';

          

      case saldoRankeadas >= 91 && saldoRankeadas < 100:

          return 'Lendário';

          

      case saldoRankeadas >= 101:

          return 'Imortal';
*/
          




  

if(saldoRankeadas < 10) {

    return 'Ferro';

}else if(saldoRankeadas >= 11 && saldoRankeadas < 20) {

    return "Broze";

}else if(saldoRankeadas >= 21 && saldoRankeadas < 50) {

    return 'Prata';

}else if(saldoRankeadas >= 51 && saldoRankeadas < 80) {

    return 'Ouro';

}else if(saldoRankeadas >= 81 && saldoRankeadas < 90) {

    return 'Diamante';

}else if(saldoRankeadas >= 91 && saldoRankeadas < 100) {

    return 'Lendário';

}else if(saldoRankeadas >= 101) {

    return 'Imortal';
} 


}



function main() {

    const vitorias = 100;
    const derrotas = 25;

    const saldoRankeadas = calcularSaldoRankeadas(vitorias, derrotas);

    console.log('O herói tem de saldo de vitórias', calcularSaldoRankeadas(vitorias, derrotas), 'e está no nível', classificarPontuacao(saldoRankeadas)); 

}

main();
