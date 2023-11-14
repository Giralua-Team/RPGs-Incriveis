
/*
// mudarCor.js
document.addEventListener("DOMContentLoaded", function() {
  // Crie um objeto de mapeamento entre palavras e cores
  var palavrasEcores = {
                  : '#9900ff',roxo5
              : '#ff0000',1
      'Shivers'         : '#434343',cinza escuro
                : '#351c75',2
      'Mantra'          : '#ffff00',amarelo3
      : '#0000ff',azul4
      'd20'             : '#ff0000',1
      '14'              : '#ff0000',1
                 : '#ff0000',1
             : '#9900ff',5
      'Biodúnyas'       : '#274e13',musgo
      'Crisoldúnya'     : '#f1c232',amarelodesfocado
              : '#ff0000',1
               : '#9900ff',5
      'Polus'           : '#ff9900',laranja
      'Micardya'        : '#ffff00',3
      'Lakrima'         : '#0000ff',4
      'amada'           : '#ffff00',3
               : '#9900ff',5
                : '#351c75',2
               : '#351c75',2 roxo escuro
                 : '#ff0000',vermei
            : '#ff0000',1
             : '#ff0000',1
                  : '#0000ff',
                  : '#0000ff',
                : '#0000ff',
                : '#0000ff',azul
            : '#ffff00',amarelo

  };

// Seleciona todos os elementos de texto no corpo da página
var elementosDeTexto = document.querySelectorAll('*:not(script)');

elementosDeTexto.forEach(function(elemento) {
    // Itera sobre o objeto de mapeamento e substitui as palavras pelas cores
    for (var palavra in palavrasEcores) {
        if (palavrasEcores.hasOwnProperty(palavra)) {
            var cor = palavrasEcores[palavra];
            var palavraEscapada = palavra.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            var regex = new RegExp(palavraEscapada, 'g');
            elemento.innerHTML = elemento.innerHTML.replace(regex, '<span style="color:' + cor + ';">' + palavra + '</span>');
        }
    }
    });
});
*/

// mudarCor.js
document.addEventListener("DOMContentLoaded", function() {
    // Mapeamento entre grupos de palavras e cores específicas
    var gruposEcores = {
        'rosa': 
        {
            palavras: 
            [
                'Purificação (Espírito)',
                'Conjuração (Espírito)',
                'Coragem (Mente/Corpo)',
                'Lidar com criaturas (Carisma)',
                'Medicina e Natureza (Mente)',
                'Encorajar (Carisma)',
                'Maldição (Espírito)',
                'Intimidação (Carisma/Corpo)',
                'Furtividade (Destreza)',
                'Persuasão (Carisma)',
                'Ilusão (Espírito/Carisma)',
                'Selo (Espírito)',
                'Prestidigitação (Destreza)',
                'Investigação (Mente)',
                'Instinto (Corpo)',
                'Acrobacia (Destreza)',
                'Atletismo (Corpo)',
            ],
            cor: '#ff00ff',
        },

        'amarelo': 
        {
            palavras: 
            [
                'Mantra',
                'Micardya',
            ],
            cor: '#ffff00'
        },

        'azul': {
            palavras: 
            [
                'Chiansyr Myamsar',
                'Susanoo',
                'Horus',
                'Netuno',
                'Odin',
                'Zeus',
                'Lakrima',
            ],
            cor: '#0000ff'
        },

        'ciano': {
           palavras:
           [
            ' Espírito',
           ],
           cor: '#00ffff' 
        },
        
        'roxo escuro':
        {
            palavras:
            [
                'Fobias',
                'Lemnis',
                'Norogai',
            ],
            cor: '#351c75'
        },

        'vermelho':
        {
            palavras:
            [
                'Vampiros',
                'Kýttaros',
                'Minus',
                'Carmesins',
                'carmesins',
                'carmesim',
                'agonia',
                'receio',
            ],
            cor: '#ff0000'
        },

        'roxo':
        {
            palavras:
            [
                'Gama',
                'Incrilith',
                'Galvans',
                'galvans',
            ],
            cor: '#9900ff',
        },

        'laranja':
        {
            palavras:
            [
                'Polus',
            ],
            cor: '#ff9900',
        }
    };

    // Seleciona todos os elementos de texto no corpo da página
    var elementosDeTexto = document.querySelectorAll('*:not(script)');

    elementosDeTexto.forEach(function(elemento) {
        // Itera sobre o objeto de mapeamento e substitui as palavras pelos grupos específicos
        for (var grupo in gruposEcores) {
            if (gruposEcores.hasOwnProperty(grupo)) {
                var configGrupo = gruposEcores[grupo];
                var cor = configGrupo.cor;

                configGrupo.palavras.forEach(function(palavra) {
                    var palavraEscapada = palavra.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    var regex = new RegExp(palavraEscapada, 'g');
                    elemento.innerHTML = elemento.innerHTML.replace(regex, '<span style="color:' + cor + ';">' + palavra + '</span>');
                });
            }
        }
    });
});
