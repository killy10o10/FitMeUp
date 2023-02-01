/* eslint-disable */
const getSequence = (startIndex, totalTrainers) => {
  let start = startIndex;
  const sequenceArray = [];
  while (start < totalTrainers) {
    sequenceArray.push(start);
    start += 4;
  }
  return sequenceArray;
};

const getBackgroundColor = (totalTrainers) => {
  const colorIndices = {
    '#add8e6': getSequence(0, totalTrainers),
    '#90ee90': getSequence(1, totalTrainers),
    '#d3d3d3': getSequence(2, totalTrainers),
    '#ffb6c1': getSequence(3, totalTrainers),
  };

  const result = {};

  for (let i = 0; i < totalTrainers; i += 1) {
    for (const [key, value] of Object.entries(colorIndices)) {
      if (value.includes(i)) {
        result[`${i}`] = key;
      }
    }
  }

  return result;
};

export default getBackgroundColor;
