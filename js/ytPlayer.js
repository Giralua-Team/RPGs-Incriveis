var players = [];
var currentPlayer = null;

function onYouTubeIframeAPIReady() {
  players.push(new YT.Player('player1', {
    height: '30%',
    width: '30%',
    videoId: 'ziI79PBQ5xA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));

  players.push(new YT.Player('player2', {
    height: '30%',
    width: '30%',
    videoId: 'aDAyalTdGtU',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));

  players.push(new YT.Player('player3', {
    height: '30%',
    width: '30%',
    videoId: 'Ghk1RFr51xo',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));

  players.push(new YT.Player('player4', {
    height: '30%',
    width: '30%',
    videoId: 'G0yo8BREgD0',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));

  players.push(new YT.Player('player5', {
    height: '30%',
    width: '30%',
    videoId: '8OtkXU4XD9A',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  }));
}

function onPlayerReady(event) {
  // Nada específico a ser feito quando o player estiver pronto
}

function onPlayerStateChange(event) {
  // Lógica para lidar com mudanças de estado, se necessário
}

function playVideo(playerId) {
  // Pausar o player atual, se houver um
  if (currentPlayer) {
    currentPlayer.pauseVideo();
  }

  // Encontrar o player correspondente ao ID fornecido
  var player = players.find(p => p.getIframe().id === playerId);

  // Iniciar a reprodução do novo player
  player.playVideo();

  // Atualizar o player atual
  currentPlayer = player;
}
