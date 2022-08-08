const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  function getData(data) {
    let tempData = crypto.createHash("sha3-512").update(data).digest("hex");
    return tempData;
  }

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
      if (candidate) {
        if (typeof candidate !== "string") {
          candidate = JSON.stringify(candidate);
        }
      }
    } else {
      const data = JSON.stringify(event);
      candidate = getData(data);
      if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = getData(candidate);
      }
    }
  }
  return candidate ? candidate : TRIVIAL_PARTITION_KEY;
};
