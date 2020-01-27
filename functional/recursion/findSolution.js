const findSolution = (_target) => {
  /** Find solution if _target possibly get multiply 3 or plus 5 */
  const find = (_current, _history) => {
    if (_current === _target) {
      return _history;
    } else if (_current > _target) {
      return null;
    } else {
      return find(_current + 5, `(${_history} + 5)`) ||
        find(_current * 3, `(${_history} * 3)`);
    }
  };
  return find(1, '1');
};

console.log(findSolution(24));
console.log(findSolution(9));
console.log(findSolution(6));
console.log(findSolution(5));
