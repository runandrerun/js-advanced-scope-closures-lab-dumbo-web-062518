// const produceDrivingRange = function(blockRange) {
//   return function(blockA, blockB) {
//     const difference = Math.abs(Number(blockA.slice(0, 2)) - Number(blockB.slice(0, 2)))
//     if (diff > blockRange) {
//       return `${Math.abs(blockRange - diff)} blocks out of range`
//     } else {
//       return `within range by ${diff}`
//     }
//   }
// };

const produceDrivingRange = function(blockRange){
	return function(blockA, blockB){
		const diff = Math.abs(Number(blockA.slice(0, 2)) - Number(blockB.slice(0,2)))
		// debugger
		if (diff > blockRange){
			return `${Math.abs(blockRange - diff)} blocks out of range`
		} else {
			return `within range by ${diff}`
		}
	}
};

const produceTipCalculator = (tipPercent) => {
  return function(amount){
    return amount * tipPercent;
  }
};
