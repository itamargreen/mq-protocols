"use strict";
exports.__esModule = true;
/**
 * @param msg Message just received on this binding.
 * @return Message(s), promise for message(s), or void
 */
function default_1(msg) {
    if (msg.topic === "scores:ranking") {
        var result = msg.clone();
        var old_data = result.data;
        result.data = {};
        result.data.header = old_data.stage.name;
        result.data.data = old_data.ranking.map(function (rank) {
            return [rank.team.name, rank.team.number, rank.highest];
        });
        result.topic = 'list:setArray';
        return result;
    }
    // In all other cases, nothing is returned, basically discarding the
    // received message.
}
exports["default"] = default_1;
