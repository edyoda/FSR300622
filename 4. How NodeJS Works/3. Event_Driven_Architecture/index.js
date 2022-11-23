// https://www.geeksforgeeks.org/node-js-events/

const EventEmitter = require('events').EventEmitter;
const chatRoomEvents = new EventEmitter;

function userJoined(username){
  // Assuming we already have a function to alert all users.
  console.log('User ' + username + ' has joined the chat.');
}

// Run the userJoined function when a 'userJoined' event is triggered.
chatRoomEvents.on('userJoined', userJoined);

function login(username){
  console.log(username+" Logged in")
  chatRoomEvents.emit('userJoined', username);
}

chatRoomEvents.on('login', login);


// Emit Events:
chatRoomEvents.emit('login', 'John')
chatRoomEvents.emit('userJoined', 'Mike')


// Remove Listerners
// chatRoomEvents.removeListener('login', login)
// chatRoomEvents.removeAllListener('userJoined')



