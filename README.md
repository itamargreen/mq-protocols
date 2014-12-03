mq-protocols
============

Protocols
=========

In general
----------

- all messages should be in JSON format, UTF8 encoded

Blib protocol (public)
-------------

Blib is a provider broadcasting a counter message every second.

- Exchange: blib
- Payload: `{"body":<integer>}`

Clock protocol (public)
--------------

Control the [clock](../clock/readme.md)

- Exchange: clock
- Arm: `{"cmd":"arm","countdown":<sec>}` arm the clock with the provided number of seconds, defaults to 150 (2:30)
- Start: `{"cmd":"start","countdown":<sec>,"time":<stamp>}` start the clock and calculate the time as started on the timestamp. Will not start until timestamp. If no timestamp is provided, the clock start as soon as the message is received. Providing a timestamp is a way to beat network latency (provided systems are time synchronised)
- Stop: `{"cmd":"stop"}` stop the clock
- Color: `{"cmd":"color","color":"<color>"}` set the background color of the clock to a specified CSS compatible value. Useful for adjustments in the chromakey. Defaults to #FF00FF
- Nudge: `{"cmd":"nudge","direction":"<x|y>","amount":<number>}` nudge the clock position by the given amount
- Size: `{"cmd":"size","amount":<number>}` resize the clock font

SMS protocol (restricted)
--------------------------

Send [sms messages](../sms/readme.md).

    {"body":"sms text","destination":"31651777566"}

Announcement protocol
--------------------------

Send [announcements](../announcer/readme.md).

    {"msg":"<message>"}

The maximum announcement length is 100 characters (limited by the google speech api)
