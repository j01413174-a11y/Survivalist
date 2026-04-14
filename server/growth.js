let referrals = {};

function createReferral(playerId){
  const code = playerId.slice(0,6);
  referrals[code] = { owner: playerId, uses: 0 };
  return code;
}

function useReferral(code, newPlayer){
  if(referrals[code]){
    referrals[code].uses++;
    return { bonus: 50, owner: referrals[code].owner };
  }
  return null;
}

function dailyReward(player){
  const now = Date.now();
  if(!player.lastLogin || now - player.lastLogin > 86400000){
    player.gold += 20;
    player.lastLogin = now;
    return true;
  }
  return false;
}

module.exports = { createReferral, useReferral, dailyReward };