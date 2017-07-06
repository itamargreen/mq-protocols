"use strict";
exports.__esModule = true;
/**
 * @param msg Message just received on this binding.
 * @return Message(s), promise for message(s), or void
 */
var ROUND = "Round";
var NUMBER = "No.";
var NAME = "Name";
var TOP = "Highest";
function roundsArray(rounds) {
    var arr = [];
    for (var i = 0; i < rounds; i++) {
        arr.push(ROUND + ' ' + i);
    }
    return arr;
}
function default_1(msg) {
    if (msg.topic === "scores:ranking") {
        var result = msg.clone();
        var old_data = result.data;
        result.data = {};
        var rounds = roundsArray(old_data.stage.rounds);
        result.data.header = [NUMBER, NAME, TOP].concat(rounds);
        result.data.data = old_data.ranking.map(function (rank) {
            var scores = rank.scores.map(function (score) {
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
exports["default"] = default_1;
