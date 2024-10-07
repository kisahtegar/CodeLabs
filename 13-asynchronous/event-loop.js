/*! ********************************************************************************
Reference:
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop
- https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif
- https://www.youtube.com/watch?v=8aGhZQkoFbQ
- https://www.youtube.com/watch?v=cCOL7MC4Pl0
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Event Loop *
//
// The Event Loop is one of the most important aspects to understand about Node.js. Why is this
// so important? Because it explains how Node.js can be asynchronous and have non-blocking I/O,
// it explains the “killer feature” of Node.js, which made it this successful.
//
// The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact
// that a single JavaScript thread is used by default — by offloading operations to the system
// kernel whenever possible.
//
// Since most modern kernels are multi-threaded, they can handle multiple operations executing in
// the background. When one of these operations completes, the kernel tells Node.js so that the
// appropriate callback may be added to the poll queue to eventually be executed. We'll explain
// this in further detail later in this topic.
