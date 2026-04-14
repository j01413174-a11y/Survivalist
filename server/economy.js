let totalGold = 0;

function rewardGold(player, amount){
  player.gold += amount;
  totalGold += amount;
}

function controlInflation(){
  if(totalGold > 100000){
    return 0.5; // reduce rewards
  }
  return 1;
}

module.exports = { rewardGold, controlInflation };