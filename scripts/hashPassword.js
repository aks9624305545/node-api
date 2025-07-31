const bcrypt = require('bcrypt');

const plainPassword = 'test123'; // 🔑 Change this to any password you want

bcrypt.hash(plainPassword, 10).then(hashed => {
  console.log(`Plain password: ${plainPassword}`);
  console.log(`Hashed password: ${hashed}`);
});
