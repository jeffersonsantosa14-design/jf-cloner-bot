
const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

app.get("/", (req, res) => {
  res.send("JF Cloner: serviço iniciado. Verifique a conexão do bot.");
});

client.once("ready", () => {
  console.log(`JF Cloner conectado como ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN).catch((err) => {
  console.error("Não foi possível conectar o bot. Confira DISCORD_TOKEN.");
  console.error(err.message);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
