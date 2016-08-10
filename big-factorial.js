function factorial(n) {
  var factorialValue = [1];

  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return '1';
  }
  if (n === 1) {
    return '1';
  }

  for (var i = 2; i <= n; i++) {
    var tempMultiplyArrays = [];
    var multiplier = i;

    while (multiplier !== 0) {
      var tempRest = 0;
      var multiplierLength = (multiplier + "").length;
      var chunkOfTempMultiplyArrays = [];
      var multiplierChunk;

      if (multiplierLength === 1) {
        multiplierChunk = multiplier;
      } else {
        multiplierChunk = multiplier % 10;
      }

      for (var j = 0; j < factorialValue.length; j++) {
          var tempMult = factorialValue[j] * multiplierChunk;

          if (tempRest !== 0) {
            tempMult += tempRest;
          }

          if (tempMult > 9) {
            chunkOfTempMultiplyArrays.push(tempMult % 10);
          } else {
            chunkOfTempMultiplyArrays.push(tempMult);
          }

          tempRest = Math.trunc(tempMult / 10);

          if (tempRest > 0 && j === factorialValue.length - 1) {
            chunkOfTempMultiplyArrays.push(tempRest);
            break;
          }
      }

      tempMultiplyArrays.push(chunkOfTempMultiplyArrays);
      multiplier = Math.trunc(multiplier / 10);
    }

    if (tempMultiplyArrays.length === 1) {
      factorialValue = tempMultiplyArrays[0].slice()
    } else {
      var tempIndex = 1;

      factorialValue = tempMultiplyArrays.reduce(function(prevArr, currArr) {
        var tempSumArray = [];

        for (var j = 0; j < tempIndex; j++) {
          tempSumArray.push(prevArr[j]);
        }

        var tempRest = 0;

        for (var i = 0; i < currArr.length; i++) {
          var tempSum = 0;
          if (prevArr[i + tempIndex] === undefined) {
            tempSum = currArr[i] + tempRest;
          } else {
            tempSum = prevArr[i + tempIndex] + currArr[i] + tempRest;
          }

          tempRest = Math.trunc(tempSum / 10);
          tempSumArray.push(tempSum % 10);
        }

        if (tempRest > 0) {
          tempSumArray.push(tempRest);
        }

        tempIndex++;

        return tempSumArray;
    });

    }

  }

  return factorialValue.reverse().join('');
}
