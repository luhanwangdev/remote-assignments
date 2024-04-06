function count(input) {
  // your code here
  const object = {};
  const uniques = input.filter(
    (char, index, array) => index === array.indexOf(char)
  );

  uniques.forEach((unique) => {
    let count = 0;
    input.forEach((char) => {
      if (unique === char) {
        count++;
      }
    });
    object[`${unique}`] = count;
  });

  return object;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
//should print {a:3, b:1, c:2, x:1}
function groupByKey(input) {
  // your code here
  let keyList = [];

  input.forEach((object) => {
    for (let i = 0; i < object.value; i++) {
      keyList.push(object.key);
    }
  });

  return count(keyList);
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
