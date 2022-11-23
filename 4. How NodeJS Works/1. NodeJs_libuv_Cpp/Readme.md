## Node consist of :
- V8 Javascript engine (C++) : this is how node.js understands javascript. It converts JS code into machine code that a computer can understand.
- libuv (C): async I/O operations. It has mechanisms to handle services like File System, DNS, network, child processes, pipes, signal handling, polling, and streaming.
    - Event Loop
    - Thread pool: To perform blocking operations that can’t be done asynchronously at OS level, libuv also includes a thread pool to distribute CPU loads.
    ### Thread Pool:
    - Libuv can assign computationally expensive tasks to a pool of worker threads. However, all callbacks that occur on task completion are executed on the main thread.libuv can decide to do expensive calculations outside of the event loop entirely.They make something called a thread pool that thread pool is a series of four threads that can be used for running computationally intensive tasks such as hashing functions.
    - After Node 10.5 worker threads can also be used to execute JavaScript in parallel. Libuv uses 4 threads by default, but can be changed using the UV_THREADPOOL_SIZE
      `process.env.UV_THREADPOOL_SIZE = 5`
  - What code will run on thread pool ?
    - https://nodejs.org/en/docs/guides/dont-block-the-event-loop/#what-code-runs-on-the-worker-pool


