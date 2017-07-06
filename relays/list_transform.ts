"use strict";

import { Message } from "mhub";

/**
 * @param msg Message just received on this binding.
 * @return Message(s), promise for message(s), or void
 */
export default function(msg: Message): void|Message|Message[]|Promise<Message> {
	if (msg.topic === "scores:ranking") {
		let result = msg.clone();
		let old_data = result.data;
		result.data = {};

		result.data.header = old_data.stage.name;
		result.data.data = old_data.ranking.map(function(rank) {
			return [rank.team.name, rank.team.number, rank.highest];
		});

		result.topic = 'list:setArray';

		return result;
	}
	// In all other cases, nothing is returned, basically discarding the
	// received message.
}