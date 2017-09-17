/*
 * This function transforms the scores:ranking message from the fllscoring service
 * To a message that can be accepted by the table module in the displaySystem service.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mhub_1 = require("mhub");
const RANK = "Rank";
const NUMBER = "No.";
const NAME = "Name";
const TOP = "Best";
function roundsArray(rounds) {
    let arr = [];
    for (let i = 0; i < rounds; i++) {
        arr.push((i + 1).toString());
    }
    return arr;
}
function default_1(msg) {
    let rounds = roundsArray(msg.data.stage.rounds);
    let data = {
        header: [RANK, NUMBER, NAME, TOP].concat(rounds),
        data: msg.data.ranking.map(function (rank) {
            var scores = rank.scores.map((score) => (score || { score: 0 }).score);
            return [rank.rank, rank.team.number, rank.team.name, rank.highest.score].concat(scores);
        })
    };
    return new mhub_1.Message('table:setData', data);
}
exports.default = default_1;
//# sourceMappingURL=table_transform.js.map