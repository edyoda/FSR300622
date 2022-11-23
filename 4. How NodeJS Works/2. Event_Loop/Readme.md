https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/

## Event Loop:
- allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

- The callbacks for the asynchronous requests will also be executed on the Event Loop.
- The Event Loop will also fulfill the non-blocking asynchronous requests made by its callbacks, e.g., network I/O.
- In summary, the Event Loop executes the JavaScript callbacks registered for events, and is also responsible for fulfilling non-blocking asynchronous requests like network I/O.
- https://www.jsv9000.app/