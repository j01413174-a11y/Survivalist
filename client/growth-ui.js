// Viral UI + leaderboard + share hooks

function showLegendaryDrop(){
  const el = document.createElement("div");
  el.innerText = "🔥 LEGENDARY DROP 🔥";
  el.style.position = "fixed";
  el.style.top = "40%";
  el.style.left = "25%";
  el.style.fontSize = "40px";
  el.style.color = "gold";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),1500);
}

function updateLeaderboardUI(list){
  let div = document.getElementById("leaderboard");
  if(!div){
    div = document.createElement("div");
    div.id = "leaderboard";
    div.style.position = "fixed";
    div.style.top = "10px";
    div.style.right = "10px";
    div.style.background = "rgba(0,0,0,0.6)";
    div.style.padding = "10px";
    document.body.appendChild(div);
  }

  div.innerHTML = "<b>Top Players</b><br>" + list.slice(0,5).map(p=>p.gold).join("<br>");
}

function shareClip(text){
  console.log("Share this:", text);
}

module.exports = { showLegendaryDrop, updateLeaderboardUI, shareClip };