"use strict";

import { Message } from "mhub";

/**
 * @param msg Message just received on this binding.
 * @return Message(s), promise for message(s), or void
 */
let ROUND = "Round";
let NUMBER = "No.";
let NAME = "Name";
let TOP = "Highest";

function roundsArray(rounds: number): string[] {
	let arr = [];
	for(let i = 0; i < rounds; i++) {
		arr.push(ROUND + ' ' + i);
	}
	return arr;
}

export default function(msg: Message): void|Message|Message[]|Promise<Message> {
	if (msg.topic === "scores:ranking") {
		let result = msg.clone();
		let old_data = result.data;
		result.data = {};

		let rounds = roundsArray(old_data.stage.rounds);
		result.data.header = [NUMBER, NAME, TOP].concat(rounds);
		result.data.data = old_data.ranking.map(function(rank) {
			var scores = rank.scores.map(function(score) {
				return score || 0;
			});
			return [rank.team.number, rank.team.name, rank.highest].concat(scores);
		});

		result.topic = "table:setData";

		return result;
	}
	// In all other cases, nothing is returned, basically discarding the
	// received message.
}