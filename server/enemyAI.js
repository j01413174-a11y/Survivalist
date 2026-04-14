function moveEnemies(enemies, players){
  Object.values(players).forEach(p => {
    enemies.forEach(e => {
      const dx = p.x - e.x;
      const dy = p.y - e.y;
      const dist = Math.hypot(dx, dy);

      if(dist < 200){
        e.x += dx / dist;
        e.y += dy / dist;
      }
    });
  });
}

module.exports = { moveEnemies };