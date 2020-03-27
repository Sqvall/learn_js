// TODO: Not END, don't see solution in web!!!!!!!!!

const testData = [11, 22, 33, 44];

const search = (lst, findingValue) => {
  if (lst.length === 0) {
    return false;
  } else if (lst.length === 1) {
    return lst[0];
  } else {
    const target = Math.floor((lst.length - 1) / 2);
    if (findingValue <= lst[target + 1]) {
      const newLst = lst.slice(0, target + 1);
      return search(newLst, findingValue);
    } else if (findingValue >= lst[target + 1]) {
      const newLst = lst.slice(target + 1, lst.length);
      return search(newLst, findingValue);
    }
  }
};

console.log(search(testData, 33));
