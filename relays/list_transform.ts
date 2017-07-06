"use strict";

import { Message } from "mhub";

/**
 * @param msg Message just received on this binding.
 * @return Message(s), promise for message(s), or void
 */
export default function(msg: Message): void|Message|Message[]|Promise<Message> {
	if (msg.topic === "scores:ranking") {
		let modified = msg.clone();
		var old_data = delete msg.data;

		modified.topic = "list:setArray";

		return modified;
	}
	// In all other cases, nothing is returned, basically discarding the
	// received message.
}