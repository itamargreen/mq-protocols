/*
 * This function transforms the scores:ranking message from the fllscoring service
 * To a message that can be accepted by the table module in the displaySystem service.
 */
"use strict";
exports.__esModule = true;
var mhub_1 = require("mhub");
var RANK = "Rank";
var NUMBER = "No.";
var NAME = "Name";
var TOP = "Best";
function roundsArray(rounds) {
    var arr = [];
    for (var i = 0; i < rounds; i++) {
        arr.push((i + 1).toString());
    }
    return arr;
}
function default_1(msg) {
    var rounds = roundsArray(msg.data.stage.rounds);
    var data = {
        header: [RANK, NUMBER, NAME, TOP].concat(rounds),
        data: msg.data.ranking.map(function (rank) {
            return [rank.rank, rank.team.number, rank.team.name, rank.highest].concat(rank.scores);
        })
    };
    return new mhub_1.Message('table:setData', data);
}
exports["default"] = default_1;
