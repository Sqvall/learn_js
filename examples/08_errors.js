class MultiplicatorUnitFailure extends Error {
}

const primitiveMultiply = (num1, num2) => {
  if (Math.random() < 0.2) {
    return num1 * num2;
  } else {
    throw new MultiplicatorUnitFailure();
  }
};

let errCount = 0;

const reliableMultiply1 = (num1, num2) => {
  try {
    return primitiveMultiply(num1, num2);
  } catch (e) {
    errCount += 1;
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply1(num1, num2);
    } else {
      throw e;
    }
  }
};

function reliableMultiply2 (num1, num2) {
  for (; ;) {
    try {
      return primitiveMultiply(num1, num2);
    } catch (e) {
      errCount += 1;
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
}

// console.log(reliableMultiply2(8, 8));
// console.log(reliableMultiply2(6, 6));

// console.log('Errors count: ' + errCount);

class Box {
  locked = true;

  unlock () {
    this.locked = false;
  }

  lock () {
    this.locked = true;
  }

  _content = ['Treasure map'];
  get content () {
    if (this.locked) throw new Error('Заперто!');
    return this._content;
  }
}

const box = new Box();
console.log(`Box status before start function: '${box.locked}'`);

const withBoxUnlocked = (func) => {
  box.unlock();
  console.log(`Function unlocked box, new status: '${box.locked}'`);
  try {
    console.log('Run function when receive as argument');
    func();
  } catch (e) {
    console.log(e);
  } finally {
    box.lock();
    console.log(`Function locked box, new status: '${box.locked}'`);
  }
};

withBoxUnlocked(() => console.log(box.content));

console.log();

withBoxUnlocked(() => {
  throw new Error('Pirates on the horizon! Abort!');
});
