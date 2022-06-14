import { client, bot, sendToDiscord } from "../../../index.js";
import { channelID, serverIP } from "../../resources/consts.js";
import cron from "node-cron";
import log4js from "log4js";
const logger = log4js.getLogger("Logs");

export default {
	name: "login",
	runOnce: true,
	async execute() {
		logger.info("The bot has logged in!");
		sendToDiscord(`**${bot.username}** has logged in to \`${serverIP}\` and is now ready!`);

		cron.schedule("0 * * * *", () => {
			client.channels.cache.get(channelID).send("Scheduled reboot in one minute... Bot will be back shortly thereafter!");
		});

		setInterval(function() {
			bot.chat("/chat g");
			bot.chat("/ac \u00a7");
		}, 3000000);

		setTimeout(function() {
			bot.chat("/ac \u00a7");
			bot.chat("/chat g");
			bot.chat("/g online");
		}, 3000);

		// setInterval(function() {
		// 	bot.chat("Event message here")
		// }, timeInMilliseconds)
	}
};