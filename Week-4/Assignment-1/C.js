async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  function delayedResultPromise(n1, n2, delayTime) {
    return new Promise((resolve) => {
      const result = n1 + n2;
      setTimeout(resolve, delayTime, result);
    });
  }

  const show = await delayedResultPromise(4, 5, 3000);
  console.log(show);
}
main(); // result will be shown in the console after <delayTime> seconds
