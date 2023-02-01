const getBackgroundColor = (index, totalTrainers) => {
  const colorIndices = {
    '#add8e6': getSequence(0, totalTrainers),
    '#90ee90': getSequence(1, totalTrainers),
    '#d3d3d3': getSequence(2, totalTrainers),
    '#ffb6c1': getSequence(3, totalTrainers),
  };

  for (let [key, value] of Object.entries(colorIndices)) {
    if (value.includes(index)) {
      return key;
    }
  }
};

const getSequence = (startIndex, totalTrainers) => {
  const sequenceArray = [];
  while (startIndex < totalTrainers) {
    sequenceArray.push(startIndex);
    startIndex += 4;
  }
  return sequenceArray;
};

export default getBackgroundColor;
