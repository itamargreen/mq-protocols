/*
 * This function transforms the scores:ranking message from the fllscoring service
 * To a message that can be accepted by the table module in the displaySystem service.
 */
"use strict";

import { Message } from "mhub";

const RANK = "Rank";
const NUMBER = "No.";
const NAME = "Name";
const TOP = "Best";

function roundsArray(rounds: number): string[] {
	let arr = [];
	for (let i = 0; i < rounds; i++) {
		arr.push((i + 1).toString());
	}
	return arr;
}

export default function (msg: Message): void | Message | Message[] | Promise<Message> {
	let rounds = roundsArray(msg.data.stage.rounds);

	let data = {
		header: [RANK, NUMBER, NAME, TOP].concat(rounds),
		data: msg.data.ranking.map(function (rank) {
			return [rank.rank, rank.team.number, rank.team.name, rank.highest].concat(rank.scores);
		})
	};

	return new Message('table:setData', data);
}