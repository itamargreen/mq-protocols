/*
 * This function transforms the scores:ranking message from the fllscoring service
 * To a message that can be accepted by the list module in the displaySystem service.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mhub_1 = require("mhub");
function default_1(msg) {
    let data = {
        header: msg.stage.name,
        data: msg.ranking.map((rank) => [rank.team.name, rank.team.number, rank.highest])
    };
    return new mhub_1.Message('list:setArray', data);
}
exports.default = default_1;
//# sourceMappingURL=list_transform.js.map