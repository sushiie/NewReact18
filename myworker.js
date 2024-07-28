this.onmessage = (e) => {
  console.log("Received message from main script", e);

  const result = simultateHeavyTask();

  this.postMessage(`message from web worker ${result}`);
};

const simultateHeavyTask = () => {
  let res = 0;
  for (let i = 0; i < 1000000000; i++) {
    res += i;
  }
  return res;
};
