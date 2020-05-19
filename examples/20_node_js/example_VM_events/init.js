const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('anything', data => {
  console.log('ON: anything', data);
});

emitter.emit('anything', { a: 1 });
emitter.emit('anything', { b: 1 });

setTimeout(() => {
  emitter.emit('anything', { c: 3 });
}, 1500);

class Dispatcher extends EventEmitter {
  subscribe (eventName, callbackFunction) {
    console.log('[Subscribe...]');
    this.on(eventName, callbackFunction);
  }

  dispatch (eventName, data) {
    console.log('[Dispatching...]');
    this.emit(eventName, data);
  }
}

const dispatcherInstance = new Dispatcher();
dispatcherInstance.subscribe('concreteEventName', (data) => console.log('ON: concreteEventName', data));
dispatcherInstance.dispatch('concreteEventName', { d: 4 });
