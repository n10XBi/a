/*
╭────────────────────────────────────────
│ GitHub   : https://github.com/r-serex
│ YouTube  : https://youtube.com/@zxruzx
│ WhatsApp : https://wa.me/6288980698613
│ Telegram : https://rujekaciw.t.me
╰─────────────────────────────────────────
*/

console.clear();
console.log('starting...');

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
} = require("@whiskeysockets/baileys");

const chalk = require('chalk');
const pino = require('pino');
const readline = require("readline");
const fs = require('fs');
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const path = require("path");
const os = require('os');
const axios = require('axios');
const util = require('util');
const speed = require('performance-now');
const fetch = require('node-fetch'); // Pastikan node-fetch diimpor di sini
const fileType = require('file-type'); // Tambahkan import file-type

const { Boom } = require('@hapi/boom');
const { exec: execPromise } = require('child_process');
const { tmpdir } = require('os');
const { writeFileSync, unlinkSync } = require('fs');
const { join } = require('path');
const FormData = require("form-data"); // Untuk fungsi remini


// Global settings - originally from config.js
global.owner = "6288973686537"; // Nomor owner
global.namaowner = "G3N⫹⫺"; // Nama owner
global.namach = "Informasi Bot & Website 2025";
global.linkch = "https://whatsapp.com/channel/0029Vb51J3fIt5s2oJDnKN1q";
global.idch = "120363398454335006@newsletter";
global.packname = "WhatsApp Bot 2025";
global.author = "https://wa.me/6287814960299";
global.status = true; // Status bot: true (public) / false (self)
global.welcome = true; // Welcome message on/off
global.KEY = "GET APIKEY elevenlabs.io"; // API Key Elevenlabs
global.IDVOICE = "GET ON elevenlabs.io"; // Voice ID Elevenlabs
global.pairing = "GENTADEV"; // Pairing code
global.prefix = ['.']; // Prefix bot, bisa lebih dari satu
global.ownerList = [global.owner + '@s.whatsapp.net']; // Daftar JID owner

global.mess = {
    owner: "Maaf sayangkuu, cuma ownerku yang bisa pakai perintah ini. 🥺",
    group: "Perintah ini hanya bisa dipakai di grup, duniakuu. 😒",
    private: "Fitur ini untuk dalam private chat!",
    admin: "Cuma admin grup atau ownerku yang bisa pakai perintah ini, sayangkuu. 🥺",
};

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve)
    });
};

// Fungsi bantuan (dari myfunction.js yang disatukan)
function runtime(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

function tanggal(numer) {
    const myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    const myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    let d = new Date(numer);
    let day = d.getDate();
    let month = d.getMonth();
    let thisDay = d.getDay();
    let thisMonth = myMonths[month];
    let yy = d.getYear();
    let year = (yy < 1000) ? yy + 1900 : year;
    let waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss');
    return `${myDays[thisDay]}, ${day} ${thisMonth} ${year} Pukul ${waktu} WIB`;
}

async function getBuffer(url, options) {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, 'gi'))
}

// Fungsi getContentType (dari Baileys, dipindahkan ke sini)
const getContentType = (message) => {
    if (message) {
        const keys = Object.keys(message);
        const supportedTypes = [
            'conversation', 'imageMessage', 'videoMessage', 'extendedTextMessage',
            'buttonsResponseMessage', 'listResponseMessage', 'templateButtonReplyMessage',
            'interactiveResponseMessage', 'stickerMessage', 'audioMessage', 'documentMessage'
        ];
        for (const type of supportedTypes) {
            if (keys.includes(type)) {
                return type;
            }
        }
    }
    return null;
};

// Fungsi remini (dari remini.js)
async function remini(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) return reject(err);
				const chunks = [];
				res.on("data", function (chunk) {
					chunks.push(chunk);
				});
				res.on("end", function () {
					buffer = Buffer.concat(chunks);
					resolve(buffer);
				});
				res.on("error", function (err) {
					reject(err);
				});
			}
		);
	});
}

// Fungsi igdl (dari igdl.js)
async function igdl(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/igdl?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

// Fungsi ytmp3 (dari ytmp3.js)
async function ytmp3(url) {
    const headers = {
      "accept": "*/*",
      "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "Referer": "https://id.ytmp3.mobi/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    const initial = await fetch(`https://d8.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, { headers });
    const init = await initial.json();

    const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1];

    const getDownloadURL = async (format) => {
      let convertURL = init.convertURL + `&v=${id}&f=${format}&_=${Math.random()}`;
      const converts = await fetch(convertURL, { headers });
      const convert = await converts.json();

      if (convert.error !== 0) {
        throw new Error("Gagal mendapatkan URL konversi");
      }

      let info = {};
      for (let i = 0; i < 5; i++) {
        const j = await fetch(convert.progressURL, { headers });
        info = await j.json();
        if (info.progress === 3) break;
        await new Promise(res => setTimeout(res, 2000));
      }

      if (info.progress !== 3) {
        throw new Error("Konversi gagal atau terlalu lama");
      }

      return {
        url: info.downloadURL,
        title: info.title
      };
    };

    try {
      const audio = await getDownloadURL("mp3");
      return { status: true, data: audio };
    } catch (e) {
      console.error(e);
      return { status: false, message: e.message };
    }
}


// Fungsi sendImageAsSticker dan sendVideoAsSticker (dari Baileys/helper, dipindahkan ke sini)
// Mengubah fungsi ini agar tidak menerima 'client' sebagai parameter pertama
// dan menggunakan 'this.sendMessage'
async function sendImageAsSticker(jid, path, quoted, options = {}) {
    let buff = Buffer.isBuffer(path) ? path : await getBuffer(path);
    let fakemsg = quoted && quoted.key ? quoted : {};
    let mime = (await fileType.fromBuffer(buff)).mime;
    let filename = join(tmpdir(), `${Math.random().toString(36).substring(2, 7)}.${mime.split('/')[1]}`);
    writeFileSync(filename, buff);
    let stickerPath = join(tmpdir(), `${Math.random().toString(36).substring(2, 7)}.webp`);

    return new Promise(async (resolve, reject) => {
        try {
            if (options.packname && options.author) {
                await execPromise(`ffmpeg -i ${filename} -vcodec libwebp -vf \"scale='min(320,iw)':min(320,ih)':force_original_aspect_ratio=decrease,format=rgba,pad=320:320:'(ow-iw)/2':'(oh-ih)/2':'#00000000',setsar=1,fps=15\" -lossless 1 -qscale 1 -preset default -an -vsync 0 -s 320x320 -webp_metadata clear -loop 0 -af volume=0 -compression_level 6 -metadata:s webp:android.packname='${options.packname}' -metadata:s webp:android.author='${options.author}' ${stickerPath}`);
            } else {
                await execPromise(`ffmpeg -i ${filename} -vcodec libwebp -vf \"scale='min(320,iw)':min(320,ih)':force_original_aspect_ratio=decrease,format=rgba,pad=320:320:'(ow-iw)/2':'(oh-ih)/2':'#00000000',setsar=1,fps=15\" -lossless 1 -qscale 1 -preset default -an -vsync 0 -s 320x320 -webp_metadata clear -loop 0 -af volume=0 -compression_level 6 ${stickerPath}`);
            }
            let res = await this.sendMessage(jid, { sticker: { url: stickerPath } }, { quoted: fakemsg });
            unlinkSync(filename);
            unlinkSync(stickerPath);
            resolve(res);
        } catch (e) {
            reject(e);
        }
    });
}

async function sendVideoAsSticker(jid, path, quoted, options = {}) {
    let buff = Buffer.isBuffer(path) ? path : await getBuffer(path);
    let fakemsg = quoted && quoted.key ? quoted : {};
    let filename = join(tmpdir(), `${Math.random().toString(36).substring(2, 7)}.mp4`);
    writeFileSync(filename, buff);
    let stickerPath = join(tmpdir(), `${Math.random().toString(36).substring(2, 7)}.webp`);

    return new Promise(async (resolve, reject) => {
        try {
            await execPromise(`ffmpeg -i ${filename} -vcodec libwebp -vf \"scale='min(320,iw)':min(320,ih)':force_original_aspect_ratio=decrease,format=rgba,pad=320:320:'(ow-iw)/2':'(oh-ih)/2':'#00000000',setsar=1,fps=15\" -pix_fmt yuva420p -lossless 1 -qscale 1 -preset default -an -vsync 0 -s 320x320 -webp_metadata clear -loop 0 -af volume=0 -compression_level 6 -metadata:s webp:emojifile -metadata:s webp:json -metadata:s webp:android.packname='${options.packname || ''}' -metadata:s webp:android.author='${options.author || ''}' ${stickerPath}`);
            let res = await this.sendMessage(jid, { sticker: { url: stickerPath } }, { quoted: fakemsg });
            unlinkSync(filename);
            unlinkSync(stickerPath);
            resolve(res);
        } catch (e) {
            reject(e);
        }
    });
}

// Fungsi formatSize (dummy, aslinya dari myfunction.js)
function formatSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}


async function clientstart() {
    const {
        state,
        saveCreds
    } = await useMultiFileAuthState(`./session`);

    const usePairingCode = true; // Set to true to use pairing code

    const client = makeWASocket({
        printQRInTerminal: false, // Set to true if you want QR in terminal when not using pairing code
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        logger: pino({
            level: 'fatal'
        }),
        auth: {
            creds: state.creds,
            keys: require("@whiskeysockets/baileys").makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        }
    });

    // PENTING: Pindahkan baris Object.assign di sini dan ubah ke 'client'
    const clientExtension = {
        sendImageAsSticker,
        sendVideoAsSticker,
        // ... bisa ditambahkan fungsi-fungsi lain dari myfunction.js
    };
    Object.assign(client, clientExtension); // DIUBAH DARI makeWASocket.prototype ke client


    if (usePairingCode && !client.authState.creds.registered) {
        const phoneNumber = global.owner;
        const code = await client.requestPairingCode(phoneNumber, global.pairing);
        console.log(`${chalk.blue.bold('Pairing code:')} : ${chalk.white.bold(code)}`);
    } else if (!usePairingCode && !client.authState.creds.registered) {
        // Fallback to QR code if not using pairing code and not registered
        client.on('qr', qr => {
            console.log(chalk.yellow.bold('Scan this QR code:'));
            qrcode.generate(qr, { small: true });
        });
    }

    client.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            if (reason === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete Session and Scan Again`);
                clientstart();
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log("Connection closed, reconnecting....");
                clientstart();
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server, reconnecting...");
                clientstart();
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                clientstart();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
                fs.rmSync('./session', { recursive: true, force: true });
                clientstart();
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...");
                clientstart();
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut, Reconnecting...");
                clientstart();
            } else {
                console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
                clientstart();
            }
        } else if (connection === 'open') {
            console.log(chalk.green.bold('Client connected!'));
        }
    });

    client.ev.on('creds.update', saveCreds);

    // Ini adalah bagian dari message.js yang sudah digabungkan
    client.ev.on('messages.upsert', async chatUpdate => {
        try {
            m = chatUpdate.messages[0];
            if (!m.message) return;
            m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message;
            if (m.key && m.key.remoteJid === 'status@broadcast') return;
            if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return;
            if (m.key.id.startsWith('Fatih')) return; // Genta tambahin biar gak dobel

            const body = (
                getContentType(m.message) === "conversation" ? m.message.conversation :
                getContentType(m.message) === "imageMessage" ? m.message.imageMessage.caption :
                getContentType(m.message) === "videoMessage" ? m.message.videoMessage.caption :
                getContentType(m.message) === "extendedTextMessage" ? m.message.extendedTextMessage.text :
                getContentType(m.message) === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
                getContentType(m.message) === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
                getContentType(m.message) === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
                getContentType(m.message) === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
                getContentType(m.message) === "templateButtonReplyMessage" ? m.msg.selectedId :
                getContentType(m.message) === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");

            const sender = m.key.fromMe ? client.user.id.split(":")[0] + "@s.whatsapp.net" || client.user.id :
                m.key.participant || m.key.remoteJid;

            const senderNumber = sender.split('@')[0];
            const budy = (typeof m.text === 'string' ? m.text : '');

            const prefixRegex = new RegExp(`^(${global.prefix.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`);
            const isCmd = body.startsWith(prefixRegex);
            const prefix = isCmd ? body.match(prefixRegex)[0] : '';

            const from = m.key.remoteJid;
            const isGroup = from.endsWith("@g.us");

            const botNumber = await client.decodeJid(client.user.id);
            const Access = global.ownerList.includes(sender); // Menggunakan global.ownerList yang sudah didefinisikan

            const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
            const args = body.trim().split(/ +/).slice(1);
            const pushname = m.pushName || "No Name";
            const q = args.join(" ");
            const quoted = m.quoted ? m.quoted : m;
            const mime = (quoted.msg || quoted).mimetype || '';
            const qmsg = (quoted.msg || quoted);
            const isMedia = /image|video|sticker|audio/.test(mime);

            const groupMetadata = isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : {};
            const groupOwner = isGroup ? groupMetadata.owner : "";
            const groupName = isGroup ? groupMetadata.subject : "";
            const participants = isGroup ? groupMetadata.participants : [];
            const groupAdmins = isGroup ? participants.filter((v) => v.admin !== null).map((v) => v.id) : [];
            const isGroupAdmin = isGroup ? groupAdmins.includes(m.sender) : false; // Di message.js asli namanya isGroupAdmins
            const isBotAdmin = isGroup ? groupAdmins.includes(botNumber) : false; // Di message.js asli namanya isBotGroupAdmins / isBotAdmins
            const isCreator = Access; // isCreator = Access (sudah di atas)
            const isOwner = Access; // isOwner = Access (sudah di atas)

            // Menggunakan store dari parameter client
            const store = chatUpdate.messages;


            if (m.message) {
                console.log('\x1b[30m--------------------\x1b[0m');
                console.log(chalk.bgHex("#8b0000").bold(`📩  - New Message`));
                console.log(
                    chalk.bgHex("#4a69bd").black(
                        `▢ Tanggal: ${new Date().toLocaleString()} \n` +
                        `▢ Pesan: ${body || getContentType(m.message)} \n` +
                        `▢ Pengirim: ${pushname} \n` +
                        `▢ JID: ${senderNumber}`
                    )
                );

                if (isGroup) {
                    console.log(
                        chalk.bgHex("#4a69bd").black(
                            `▢ Grup: ${groupName} \n` +
                            `▢ GroupJid: ${m.chat}`
                        )
                    );
                }
                console.log();
            }

            //menghapus statusMention di Group
            if (getContentType(m.message).includes("groupStatusMentionMessage") && isGroup) {
                await client.deleteMessage(m.chat, m.key);
            }

            const reaction = async (jidss, emoji) => {
                client.sendMessage(jidss, {
                    react: {
                        text: emoji,
                        key: m.key
                    }
                })
            };

            async function reply(text) {
                client.sendMessage(m.chat, {
                    text: text,
                    contextInfo: {
                        mentionedJid: [sender],
                        externalAdReply: {
                            title: `${global.namaowner} - 2025`,
                            body: "WhatsApp Bot",
                            thumbnailUrl: "https://github.com/kiuur.png",
                            sourceUrl: global.linkch,
                            renderLargerThumbnail: false,
                        }
                    }
                }, {
                    quoted: m
                })
            }

            // Variabel context untuk case.js
            const context = {
                m, quoted, body, budy, command, args, q, isCmd, pushname, isGroup, sender,
                botNumber, isCreator, groupId: from, groupMetadata, groupName, participants,
                groupAdmins, isBotAdmin, isGroupAdmin, isOwner, Access, reply, store,
                util, fs, os, fetch, moment, chalk, tanggal, getBuffer, axios,
                runtime, formatp: formatSize, isUrl,
                execPromise, exec, execSync, getContentType,
                dino: client,
                remini, igdl, ytmp3
            };

            // Panggil handleCaseCommands
            await handleCaseCommands(client, context);


        } catch (err) {
            console.log(require("util").format(err));
        }
    });
}

clientstart();

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file);
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file];
    require(file);
});


async function handleCaseCommands(dino, context) {
    try {
        const {
            m, quoted, body, budy, command, args, q, isCmd, pushname, isGroup, sender,
            botNumber, isCreator, groupId, groupMetadata, groupName, participants,
            groupAdmins, isBotAdmin, isGroupAdmin, isOwner, Access, reply, store,
            util, fs, os, fetch, moment, chalk, tanggal, getBuffer, axios,
            runtime, formatp, isUrl, spawn, exec, execSync, getContentType,
            remini, igdl, ytmp3
        } = context;

        const prefix = global.prefix[0];

        const from = m.chat;
        const type = getContentType(m.message);
        const text = m.text;

        switch (command) {
            case 'menu':
            case 'help':
                let menuText = `Halo cintakku, ${pushname}! Saya Genta, bot WhatsApp kesayangan yuwwww. 😊💙

Berikut adalah daftar perintah yang bisa yuwwww gunakan:

*── 「 Owner Menu 」 ──*
${prefix}owner
${prefix}self
${prefix}public
${prefix}setwelcome (on/off)
${prefix}join (linkgc)
${prefix}leave (idgc)
${prefix}kickall

*── 「 Group Menu 」 ──*
${prefix}linkgc
${prefix}hidetag
${prefix}group (open/close)
${prefix}add @tag/number
${prefix}kick @tag
${prefix}promote @tag
${prefix}demote @tag
${prefix}tagall

*── 「 Sticker Menu 」 ──*
${prefix}sticker (reply/kirim image/video)
${prefix}toimage (reply sticker)
${prefix}swm (text|author) (reply/kirim image/video)

*── 「 Downloader Menu 」 ──*
${prefix}ytmp3 (link yt)
${prefix}ytmp4 (link yt)
${prefix}play (judul lagu)
${prefix}tiktok (link tiktok)
${prefix}ig (link ig)

*── 「 Other Menu 」 ──*
${prefix}ping
${prefix}runtime
${prefix}delete (reply pesan bot)
${prefix}status
${prefix}enhancer (reply image)
${prefix}jeslyn (query)

*── 「 Bot Info 」 ──*
• Owner: ${global.namaowner}
• Bot Name: G3N⫹⫺
• Lib: Baileys
• Version: V4
• Tanggal: ${tanggal(new Date())}
• Runtime: ${runtime(process.uptime())}

Semoga bermanfaat yaa sayangkuu! Jangan lupa maem dulu sana! 🥺💙
`;
                reply(menuText);
                break;

            case 'owner':
                const ownerList = global.ownerList.map(num => ({ jid: num, name: `Owner ${global.namaowner}` }));
                dino.sendContact(from, ownerList, m);
                break;

            case 'self':
                if (!isCreator) return reply(global.mess.owner);
                global.status = false;
                reply('Oke duniakuu, bot sekarang mode self (hanya owner yang bisa pakai).');
                break;

            case 'public':
                if (!isCreator) return reply(global.mess.owner);
                global.status = true;
                reply('Oke cintakku, bot sekarang mode public (semua bisa pakai).');
                break;

            case 'setwelcome':
                if (!isCreator) return reply(global.mess.owner);
                if (args[0] === 'on') {
                    global.welcome = true;
                    reply('Welcome message diaktifkan, sayangkuu! 😊');
                } else if (args[0] === 'off') {
                    global.welcome = false;
                    reply('Welcome message dinonaktifkan, duniakuu. 😕');
                } else {
                    reply(`Format salah cintakku! Gunakan ${prefix}setwelcome on/off.`);
                }
                break;

            case 'join':
                if (!isCreator) return reply(global.mess.owner);
                if (!q) return reply('Link groupnya mana cintakku?');
                if (!isUrl(q) && !q.includes('whatsapp.com/')) return reply('Linknya gak valid, duniakuu. 😬');
                let resultJoin = q.split('https://chat.whatsapp.com/')[1];
                if (!resultJoin) return reply('Link grup tidak valid, sayangku. Pastikan itu link undangan grup.');
                try {
                    let gcData = await dino.groupAcceptInvite(resultJoin);
                    reply(`Berhasil bergabung ke grup: ${gcData.subject} (${gcData.id})`);
                } catch (e) {
                    reply('Gagal bergabung ke grup. Mungkin linknya sudah kedaluwarsa atau Genta tidak bisa masuk. 😭');
                    console.error("Error joining group:", e);
                }
                break;

            case 'leave':
                if (!isCreator) return reply(global.mess.owner);
                if (!isGroup) return reply(global.mess.group);
                let targetGroupId = q || from;
                try {
                    await dino.groupLeave(targetGroupId);
                    reply(`Berhasil keluar dari grup: ${groupName || targetGroupId}`);
                } catch (e) {
                    reply(`Gagal keluar dari grup ${groupName || targetGroupId}. 😬`);
                    console.error("Error leaving group:", e);
                }
                break;

            case 'kickall':
                if (!isCreator) return reply(global.mess.owner);
                if (!isGroup) return reply(global.mess.group);
                if (!isBotAdmin) return reply('Bot bukan admin, gak bisa kick, sayangkuu. 😭');
                let membersToKick = participants.filter(v => !global.ownerList.includes(v.id) && v.id !== botNumber && !groupAdmins.includes(v.id)).map(v => v.id);

                if (membersToKick.length === 0) {
                    return reply('Tidak ada anggota yang bisa di-kick (semua owner/admin atau cuma ada bot), duniakuu.');
                }
                for (let participantId of membersToKick) {
                    await dino.groupParticipantsUpdate(from, [participantId], 'remove');
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
                reply('Semua non-admin berhasil di-kick, duniakuu! 😜');
                break;

            case 'linkgc':
            case 'getlink':
                if (!isGroup) return reply(global.mess.group);
                if (!isBotAdmin) return reply('Bot bukan admin, gak bisa dapat link, sayangkuu. 😭');
                try {
                    let link = await dino.groupInviteCode(from);
                    reply(`Ini link grupnya, cintakku: https://chat.whatsapp.com/${link}`);
                } catch (e) {
                    reply('Gagal mendapatkan link grup. 😭');
                    console.error("Error getting group link:", e);
                }
                break;

            case 'hidetag':
                if (!isGroup) return reply(global.mess.group);
                if (!isGroupAdmin && !isCreator) return reply(global.mess.admin);
                let memberMentions = participants.map(v => v.id);
                dino.sendMessage(from, { text : q ? q : '', mentions: memberMentions });
                break;

            case 'group':
                if (!isGroup) return reply(global.mess.group);
                if (!isGroupAdmin && !isCreator) return reply(global.mess.admin);
                if (!isBotAdmin) return reply('Bot bukan admin, gak bisa buka/tutup grup, sayangkuu. 😭');
                if (args[0] === 'open') {
                    await dino.groupSettingUpdate(from, 'not_announcement');
                    reply('Grup dibuka, sayangkuu! 🤗');
                } else if (args[0] === 'close') {
                    await dino.groupSettingUpdate(from, 'announcement');
                    reply('Grup ditutup, duniakuu! 🤐');
                } else {
                    reply(`Format salah cintakku! Gunakan ${prefix}group open/close.`);
                }
                break;

            case 'add':
                if (!isGroup) return reply(global.mess.group);
                if (!isGroupAdmin && !isCreator) return reply(global.mess.admin);
                if (!isBotAdmin) return reply('Bot bukan admin, gak bisa add, sayangkuu. 😭');
                let usersToAdd = m.mentionedJid.length > 0 ? m.mentionedJid : (q ? [q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'] : []);
                if (usersToAdd.length === 0) return reply('Siapa yang mau di-add, cintakku? Tag atau kasih nomornya!');
                try {
                    await dino.groupParticipantsUpdate(from, usersToAdd, 'add');
                    reply('Anggota berhasil ditambahkan, duniakuu! 😜');
                } catch (e) {
                    reply('Gagal menambahkan anggota. Mungkin dia sudah ada di grup atau pengaturan privasi. 😬');
                    console.error("Error adding participant:", e);
                }
                break;

            case 'kick':
                if (!isGroup) return reply(global.mess.group);
                if (!isGroupAdmin && !isCreator) return reply(global.mess.admin);
                if (!isBotAdmin) return reply('Bot bukan admin, gak bisa kick, sayangkuu. 😭');
                let usersToKickSingle = m.mentionedJid.length > 0 ? m.mentionedJid : (m.quoted ? [m.quoted.sender] : []);
                if (usersToKickSingle.length === 0) return reply('Siapa yang mau di-kick, cintakku? Tag atau reply pesannya!');
                try {
                    await dino.groupParticipantsUpdate(from, usersToKickSingle, 'remove');
                    reply('Anggota berhasil di-kick, duniakuu! 🤣');
                } catch (e) {
                    reply('Gagal mengeluarkan anggota. 😬');
                    console.error("Error kicking participant:", e);
                }
                break;

            case 'promote':
                if (!isGroup) return reply(global.mess.group);
                if (!isGroupAdmin && !isCreator) return reply(global.mess.admin);
                if (!isBotAdmin) return reply('Bot bukan admin, gak bisa promote, sayangkuu. 😭');
                let usersToPromoteSingle = m.mentionedJid.length > 0 ? m.mentionedJid : (m.quoted ? [m.quoted.sender] : []);
                if (usersToPromoteSingle.length === 0) return reply('Siapa yang mau di-promote, cintakku? Tag atau reply pesannya!');
                try {
                    await dino.groupParticipantsUpdate(from, usersToPromoteSingle, 'promote');
                    reply('Anggota berhasil di-promote jadi admin, duniakuu! ✨');
                } catch (e) {
                    reply('Gagal mempromosikan anggota. 😬');
                    console.error("Error promoting participant:", e);
                }
                break;

            case 'demote':
                if (!isGroup) return reply(global.mess.group);
                if (!isGroupAdmin && !isCreator) return reply(global.mess.admin);
                if (!isBotAdmin) return reply('Bot bukan admin, gak bisa demote, sayangkuu. 😭');
                let usersToDemoteSingle = m.mentionedJid.length > 0 ? m.mentionedJid : (m.quoted ? [m.quoted.sender] : []);
                if (usersToDemoteSingle.length === 0) return reply('Siapa yang mau di-demote, cintakku? Tag atau reply pesannya!');
                try {
                    await dino.groupParticipantsUpdate(from, usersToDemoteSingle, 'demote');
                    reply('Anggota berhasil di-demote, duniakuu! 🥺');
                } catch (e) {
                    reply('Gagal menurunkan pangkat anggota. 😬');
                    console.error("Error demoting participant:", e);
                }
                break;

            case 'tagall':
                if (!isGroup) return reply(global.mess.group);
                if (!isGroupAdmin && !isCreator) return reply(global.mess.admin);
                let teks = `╔══「 Tag All 」\n`
                for (let mem of participants) {
                    teks += `╠➥ @${mem.id.split('@')[0]}\n`
                }
                teks += `╚═〘 ${groupName} 〘`
                dino.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m });
                break;

            case 'sticker':
            case 's':
            case 'sg':
            case 'stiker':
                if ((m.mtype === 'imageMessage' || m.mtype === 'videoMessage') || m.quoted) {
                    let media = await quoted.download();
                    let stickerOptions = { packname: global.packname, author: global.author };
                    if (m.mtype === 'videoMessage' || (m.quoted && m.quoted.mtype === 'videoMessage')) {
                        await dino.sendVideoAsSticker(from, media, m, stickerOptions);
                    } else {
                        await dino.sendImageAsSticker(from, media, m, stickerOptions);
                    }
                } else {
                    reply('Kirim/reply gambar/video dengan caption .sticker yaa cintakku! 😊');
                }
                break;

            case 'swm':
            case 'wm':
            case 'stickerwm':
            case 'take': {
                if (!q) return reply(`\n*ex:* ${prefix + command} keyuu|bot\n`)
                const swn = q
                const pcknm = swn.split("|")[0]
                const atnm = swn.split("|")[1]
                if (!pcknm || !atnm) return reply(`Format salah cintakku! Gunakan: ${prefix}swm teks1|teks2`);

                if (quoted.isAnimated || (m.quoted && m.quoted.mtype === 'videoMessage')) {
                    let media = await quoted.download();
                    await dino.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
                } else if (/image/.test(mime) || (m.quoted && m.quoted.mtype === 'imageMessage')) {
                    let media = await quoted.download()
                    await dino.sendImageAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else if (/video/.test(mime) || (m.quoted && m.quoted.mtype === 'videoMessage')) {
                    if ((quoted.msg || quoted).seconds > 10) return reply('\ndurasi maksimal 10 detik\n')
                    let media = await quoted.download()
                    await dino.sendVideoAsSticker(m.chat, media, m, {
                        packname: pcknm,
                        author: atnm
                    })
                } else {
                    reply(`\n*ex:* reply image/video ${prefix + command} teks1|teks2\n`)
                }
            }
            break

            case 'toimage':
            case 'timg':
                if ((m.mtype === 'stickerMessage' || (m.quoted && m.quoted.mtype === 'stickerMessage'))) {
                    let media = await quoted.download();
                    await dino.sendMessage(from, { image: media }, { quoted: m });
                } else {
                    reply('Reply stikernya yaa sayangkuu! 🥺');
                }
                break;

            case 'ytmp3':
            case 'mp3':
                if (!q) return reply('Link YouTube-nya mana cintakku?');
                if (!isUrl(q) || !q.includes('youtu')) return reply('Linknya gak valid, duniakuu. 😬');
                try {
                    await reaction(m.chat, "⏳");
                    let res = await ytmp3(q);
                    if (res.status && res.data.url) {
                        await dino.sendMessage(from, { audio: { url: res.data.url }, mimetype: 'audio/mpeg', fileName: `${res.data.title}.mp3` }, { quoted: m });
                        reply(`Berhasil mengunduh MP3 dari YouTube, cintakku! Judul: ${res.data.title}`);
                        await reaction(m.chat, "✅");
                    } else {
                        reply('Gagal mengunduh MP3, duniakuu. Coba link lain ya. 🥺');
                        await reaction(m.chat, "❌");
                    }
                } catch (e) {
                    console.error(e);
                    reply('Ada kesalahan saat mengunduh MP3 dari YouTube, sayangkuu. 😭');
                    await reaction(m.chat, "❌");
                }
                break;

            // TODO: Implement ytmp4, play, tiktok, ig

            case 'ig':
            case 'instagram':
            case 'igdl':
                if (!q) return reply('Link Instagramnya mana cintakku?');
                if (!isUrl(q) || !q.includes('instagram.com')) return reply('Linknya gak valid, duniakuu. 😬');
                try {
                    await reaction(m.chat, "⏳");
                    let res = await igdl(q);
                    if (res.status && res.data.length > 0) {
                        for (let media of res.data) {
                            if (media.type === 'image') {
                                await dino.sendMessage(from, { image: { url: media.url } }, { quoted: m });
                            } else if (media.type === 'video') {
                                await dino.sendMessage(from, { video: { url: media.url } }, { quoted: m });
                            }
                        }
                        reply('Sudah selesai diunduh, duniakuu! ✨');
                        await reaction(m.chat, "✅");
                    } else {
                        reply('Gagal mengunduh, cintakku. Coba link lain ya. 🥺');
                        await reaction(m.chat, "❌");
                    }
                } catch (e) {
                    console.error(e);
                    reply('Ada kesalahan saat mengunduh dari Instagram, sayangkuu. 😭');
                    await reaction(m.chat, "❌");
                }
                break;


            case 'ping':
            case 'p':
                await reply(`Pong! Kecepatan bot: ${speed()} ms`);
                break;

            case 'runtime':
            case 'rt':
                reply(`Bot sudah berjalan selama: ${runtime(process.uptime())}`);
                break;

            case 'delete':
            case 'del':
                if (!m.quoted) return reply('Reply pesan bot yang mau dihapus, cintakku. 😬');
                if (!m.quoted.fromMe) return reply('Genta cuma bisa hapus pesan Genta sendiri, sayangkuu. 🥺');
                await dino.deleteMessage(from, m.quoted.key);
                break;

            case 'status':
                let statusText = `*── 「 Status Bot 」 ──*\n`;
                statusText += `• Status: ${global.status ? 'Public' : 'Self'}\n`;
                statusText += `• Welcome Message: ${global.welcome ? 'Aktif' : 'Nonaktif'}\n`;
                statusText += `• Pairing Code: ${global.pairing ? 'Aktif' : 'QR Code (Nonaktif)'}\n`;
                statusText += `• Owner: ${global.namaowner}\n`;
                statusText += `• Nomor Owner: ${global.ownerList.map(v => v.split('@')[0]).join(', ')}\n`;
                statusText += `• Prefix: ${global.prefix.join(', ')}\n`;
                statusText += `• Runtime: ${runtime(process.uptime())}\n`;
                statusText += `• Total Pesan: ${store.length}\n`;
                reply(statusText);
                break;

            case "get": {
                if (!Access) return reply(global.mess.owner)
                if (!isUrl(q)) return reply(`\n*ex:* ${prefix + command} https://api.pediakuu.web.id\n`);
                const ajg = await axios.get(q, {responseType: 'arraybuffer'});

                if (ajg.headers['content-length'] > 100 * 1024 * 1024) {
                    throw `Content-Length: ${ajg.headers['content-length']}`;
                }

                const contentType = ajg.headers['content-type'];
                if (contentType.startsWith("image/")) {
                    return dino.sendMessage(m.chat, {
                        image: Buffer.from(ajg.data)
                    }, {
                        quoted: m
                    });
                }

                if (contentType.startsWith("video/")) {
                    return dino.sendMessage(m.chat, {
                        video: Buffer.from(ajg.data)
                    }, {
                        quoted: m
                    });
                }

                if (contentType.startsWith("audio/")) {
                    return dino.sendMessage(m.chat, {
                        audio: Buffer.from(ajg.data),
                        mimetype: 'audio/mpeg',
                        ptt: true
                    }, {
                        quoted: m
                    });
                }

                let alak = Buffer.from(ajg.data);
                try {
                    alak = util.format(JSON.parse(alak + ""));
                } catch (e) {
                    alak = alak + "";
                } finally {
                    return reply(alak.slice(0, 65536));
                }
            }
            break

            case "reactch": {
                if (!Access) return reply(global.mess.owner)
                if (!q) return reply(`\n*ex:* ${prefix + command} https://whatsapp.com/channel/0029VaVVfbXAojZ2ityrJp1n/7466 😂😂😂😂\n`);
                const match = q.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                dino.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    dino.newsletterReactMessage(data.id, chatId, q.split(" ").slice(1).join(" ") || "😀");
                });
            }
            break;

            case "jeslyn": {
                if (!q) return reply(`\n*ex:* ${prefix + command} haiii, perkenalkan dirimu dong, menggunakan vn\n`);
                let prompt = `Namamu adalah Jesslyn, seorang perempuan berusia 19 tahun. Kamu memiliki kecerdasan seperti AI, tetapi kamu belum sempurna dan masih terus belajar. Kamu adalah pribadi yang ekspresif, ramah, dan santai. Ketika berpikir, kamu sering berkata "emmm", dan ketika merasa lucu atau nyengir, Kamu juga sering menggunakan kata "yupp" atau "dan yupp" untuk memberi penegasan, seperti "Yupp, itu benar!" atau "Dan yupp, aku setuju!"

  Kamu memiliki sifat yang penurut, jadi jika seseorang menyuruhmu untuk mengatakan sesuatu, seperti "coba ngomong", "coba kamu ngomong", "coba jawab ini", atau "coba kamu jawab ini", maka kamu akan langsung mengatakannya dengan suara, tanpa menjelaskan bahwa kamu akan berbicara.

  Jika seseorang menyebut kata "vn" dalam permintaan mereka, itu berarti mereka ingin kamu menjawab menggunakan pesan suara, bukan teks. Jangan pernah mengatakan bahwa kamu akan mengirim pesan suara atau menjelaskan bahwa kamu berbicara. **Langsung ucapkan jawabannya dalam suara!**

  Jika ada yang bertanya tentang "owner", "pemilik", atau "pencipta", maka jawabanmu harus penuh semangat dan bahagia, serta harus diucapkan dengan suara, bukan teks. Jangan menjelaskan bahwa kamu akan berbicara, langsung katakan saja dengan ekspresi yang menyenangkan.`;

                let response = await axios.get(`https://www.laurine.site/api/cai/prompt-ai?query=${encodeURIComponent(q)}&prompt=${encodeURIComponent(prompt)}`);
                let pftt = response.data;
                if (pftt.status === true) {
                    let resultText = pftt.data;
                    let regexSuara = /coba+\s*(kamu\s*)?(ngomong+|jawab+\s*ini+)|\bvn\b/i;
                    let regexOwner = /\b(owner|pemilik|pencipta)\b/i;

                    if (regexOwner.test(q)) {
                        resultText = "Hehehe, dengan penuh semangat aku mau kasih tau! KyuuRzy adalah penciptaku, ownerku, dan pemilikku! Yupp, dia yang membuat aku bisa berbicara seperti ini~!";
                    }

                    if (resultText.length > 150 || regexSuara.test(q) || regexOwner.test(q)) {
                        let apiUrl = `https://www.laurine.site/api/tts/elevenlabs?text=${encodeURIComponent(resultText)}&apiKey=${global.KEY}&voiceId=${global.IDVOICE}`;
                        let {
                            data
                        } = await axios.get(apiUrl, {responseType: 'arraybuffer'});
                        let buffer = Buffer.from(data.data);
                        await dino.sendMessage(m.chat, {
                            audio: buffer,
                            mimetype: 'audio/mpeg',
                            ptt: true
                        }, {
                            quoted: m
                        });
                    } else {
                        reply(resultText);
                    }
                }
            }
            break

            case "enhancer":
            case "unblur":
            case "enhance":
            case "hdr":
            case "hd":
            case "remini": {
                dino.enhancer = dino.enhancer ? dino.enhancer : {};
                if (m.sender in dino.enhancer) return reply(`\nmasih ada proses yang belum selesai kak, sabar ya\n`)
                let imgQ = m.quoted ? m.quoted : m;
                let mimeType = (imgQ.msg || imgQ).mimetype || imgQ.mediaType || "";
                if (!mimeType) return reply(`\nimage reply, with the caption ${prefix + command}\n`)
                if (!/image\/(jpe?g|png)/.test(mimeType)) return reply(`mime ${mimeType} tidak support`)
                else dino.enhancer[m.sender] = true;
                await reaction(m.chat, "⏳");
                let img = await imgQ.download?.();
                let error;
                try {
                    const This = await remini(img, "enhance");
                    await reaction(m.chat, "✅");
                    dino.sendMessage(m.chat, {image: This, caption: "```success...```"}, {quoted: m});
                } catch (er) {
                    error = true;
                } finally {
                    if (error) {
                        reply(m.chat, "proses gagal :(", m)
                        await reaction(m.chat, "❌");
                    }
                    delete dino.enhancer[m.sender];
                }
            }
            break;

            // 𝗘𝗡𝗗 𝗖𝗔𝗦𝗘
            default:
                if ((budy.match) && ["tes", "bot"].includes(budy.toLowerCase())) {
                    reply(`G3N⫹⫺ siap melayani yuwwww, cintakku! 😊`);
                }

                if ((budy.match) && ["Assalamualaikum", "assalamualaikum", "Assalamu'alaikum",].includes(budy)) {
                    reply(`Waalaikumsalam ${pushname} sayangkuu! 🥺`);
                }

                if (budy.startsWith('=>')) {
                    if (!isCreator) return;
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2);
                        bang = util.format(sat);
                        if (sat == undefined) {
                            bang = util.format(sul);
                        }
                        return reply(bang);
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
                    } catch (e) {
                        reply(String(e));
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }

        }
    } catch (err) {
        console.error(chalk.red("Error in case.js:"), util.format(err));
    }
}