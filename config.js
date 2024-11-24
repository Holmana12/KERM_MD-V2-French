//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2-French";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "94767015325";
global.sudo = process.env.SUDO || "94767015325";
global.owner = process.env.OWNER_NUMBER || "94767015325";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0o2aEgyVlV0aDVjNTh1WUpOaFZHQkE1NUtJRitaTEkxZHJ0eGthaWRrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0N5UmhNdUkwUXNCMjNSS2ZUVWpZZXdkQ3hKOHdOUTFxL2I4MEZiMUxUQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSm1janBjeSsrMWxTbjl0bmdIaUZpVzAybGsyN0dNcXgzQmxVZjRtSFhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZU50M2dabS9CeHc1eTFVS0RYOGVzTEFKTTliMGRtYzJDQTlRMFNBdGtzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMQWNoVFNYL0Q5RGVIMFRnWE9SakN5VzJJZ09IeFl4VCtOTS9lS1RyM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InoxODhrak1NdWg5dTloQU5jYnFOWDlhM1FzWXNIMjlDNXdlcTYyNGs5VzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5YS2Z1MlM0Z21EVThacW9xS2pDWnR2YVV1QXh0NzV3c0RwdENGQW8wWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHE4MjRmMDB0YU5zSTE5WG5vOUEydlNxOGRNTmxCRXZkaW9iRGZNR0VYUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYrV1hnUVVPaGN0ejRwQVM2UUZsQnhoeUtjdGpKQ2kwMlNudGRYU3dac3pXZ0hCb0xGS1I1cm9DMGw3UTRsSHhuQ2dYK3NEeXVpaGhOSWJwYlV1R2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJxdEFnak96YVVhenM3MzdMQjZSem04dHN1ckR0N1BlZ0VlSXpQK09MVXJRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGeFJkNlNjd1RkcXJTMWpZSmVpR3B3IiwicGhvbmVJZCI6ImNkYWYzNzkyLTMzMmQtNDllYS1iNjg1LTJiOGIxYjY4Mzc5MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSmhJN0NVNGZ4bnF2eEhnRVVreUErUEdaZDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3hOazEzYkJBRDhraTlKR2VTRUkvVUUwbTFRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNXSk5QRlBMIiwibWUiOnsiaWQiOiI5NDc2NzAxNTMyNTo0MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUE84b1BJRUVOdWVqYm9HR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVUpOM0o2ZVJvSmlnZ1JhYWRZdkcvRmtrbXBCVEhQU2g1RXppbXFRYWFYUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibGdiUzl3OVBiTGk4RmhaT2pvd1YxT0JndTRtdzVZc2pEMjdDMkY5aGUxSHB5VkhUVFBTVXBVL3BjZ0dRVnJtbmhBRlhjaENzY1dpdlQ2a2o4VDlGQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkFZVFBNTzM5bHRxczQ5R3FJRmRETTJBdmlRMU5SaEd2QmJrdmpuL3ZkT0dLNStId1hsV1YyTVFLaGczbS82b2JjakJia3pTcjNVRmg2cGNlaDN2WmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjcwMTUzMjU6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVkNUZHllbmthQ1lvSUVXbW5XTHh2eFpKSnFRVXh6MG9lUk00cHFrR21sMCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjQ2NDQ4OCwibXlBcHBTdGF0ZUtleUlkIjoiQUNZQUFLMncifQ=="
  process.env.SESSION_ID ||
  "MET TA SESSION ICI MAN"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`PRODUIT DE MARQUE DE ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "𝖪𝖾𝗋𝗆 𝖥𝗋𝖾𝗇𝖼𝗁",
  botname: process.env.BOT_NAME || "ᵏᵍ✫ҡε૨ɱ ѵ2 ƒ૨εɳ૮ɦ✫",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
