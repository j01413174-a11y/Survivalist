const os = require('os');

let spawnRate = 3000;

function adjustDifficulty(playersCount){
  if(playersCount > 10) spawnRate = 1000;
  else if(playersCount > 5) spawnRate = 2000;
  else spawnRate = 3000;

  return spawnRate;
}

function getServerLoad(){
  return {
    cpu: os.loadavg()[0],
    memory: process.memoryUsage().heapUsed
  };
}

module.exports = { adjustDifficulty, getServerLoad };