"use strict";
exports.__esModule = true;
/**
 * @param msg Message just received on this binding.
 * @return Message(s), promise for message(s), or void
 */
function default_1(msg) {
    if (msg.topic === "scores:ranking") {
        var modified = msg.clone();
        var old_data = delete msg.data;
        modified.topic = "list:setArray";
        return modified;
    }
    // In all other cases, nothing is returned, basically discarding the
    // received message.
}
exports["default"] = default_1;
