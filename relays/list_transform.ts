/*
 * This function transforms the scores:ranking message from the fllscoring service
 * To a message that can be accepted by the list module in the displaySystem service.
 */
 "use strict";

import { Message } from "mhub";

export default function(msg: Message): void|Message|Message[]|Promise<Message> {
	let data = {
		header: msg.stage.name,
		data: msg.ranking.map((rank) => [rank.team.name, rank.team.number, rank.highest] )
	};

	return new Message('list:setArray', data);
}