// start your server here
const server = require("./api/server.js");

const PORT = 9000;

server.listen(PORT, () => {
  console.log(`server is on Natalie PORTman's #${PORT}`);
});
