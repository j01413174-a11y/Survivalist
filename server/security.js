const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const limiter = rateLimit({ windowMs: 60000, max: 100 });

function validateMessage(data){
  if(typeof data.x !== 'number' || typeof data.y !== 'number') return false;
  if(data.x < 0 || data.y < 0 || data.x > 5000 || data.y > 5000) return false;
  return true;
}

module.exports = { limiter, helmet, validateMessage };