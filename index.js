const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

//totalBatteries: holds the sum of all of the battery amounts in the batteryBatches array.
const totalBatteries = batteryBatches.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
