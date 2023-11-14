document.cookie = "a=b; expires=Wed, 01 Jan 2024 00:00:00 UTC; SameSite=None; Secure";


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
                'Perícia',
            ],
            cor: '#ff00ff',
        },

        'amarelo': 
        {
            palavras: 
            [
                'Mantra ',
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

        'azulbebe': {
            palavras: 
            [
                'Humanos'
            ],
            cor: '#4a86e8'
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
                'Classe Escolar',
            ],
            cor: '#ff9900',
        },

        'musgo':
        {
            palavras:
            [
                'Biodúnyas',
            ],
            cor: '#38761d',
        },

        'amarelodesfocado':
        {
            palavras:
            [
                'Crisoldúnyas',
                'Crisoldúnya',
            ],
            cor: '#f1c232',
        },

        'cinza':
        {
            palavras:
            [
                'Shivers',
                'Sevenie',
            ],
            cor: '#434343',
        },
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
