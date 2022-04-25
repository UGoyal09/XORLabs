function getCombinations(valuesArray) {
    var dataToReturn = [];
    var temp = [];
    var temp1 = [];
    var firstSubArraySum = 0;
    var secondSubArraySum = 0;
    var slent = Math.pow(2, valuesArray.length);

    for (var i = 0; i < slent; i++) {
        temp = [];
        temp1 = [];
        firstSubArraySum = 0;
        secondSubArraySum = 0;
        for (var j = 0; j < valuesArray.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp.push(valuesArray[j]);
            }
            else {
                temp1.push(valuesArray[j]);
            }
        }
        // ************ Code to return first child Arrays which were found to have same average***************

        // if (temp.length > 0) {
        //     firstSubArraySum = temp.reduce((a, b) => a + b, 0);
        //     secondSubArraySum = temp1.reduce((a, b) => a + b, 0);
        //     if (firstSubArraySum / temp.length == secondSubArraySum / temp1.length) {
        //         var dataToSend = {
        //             arrayFirst: temp,
        //             arraySecond: temp1
        //         }
        //         return dataToSend;
        //     }

        // }

        if (temp.length > 0) {
            firstSubArraySum = temp.reduce((a, b) => a + b, 0);
            secondSubArraySum = temp1.reduce((a, b) => a + b, 0);
            firstAvg = +(firstSubArraySum / temp.length).toFixed(2);
            secondAvg = +(secondSubArraySum / temp1.length).toFixed(2);
            dataToReturn.push({
                firstSubArray: temp,
                secondSubArray: temp1,
                firstAvg: firstAvg,
                secondAvg: secondAvg,
                difference: Math.abs(firstAvg - secondAvg)
            })
        }
    }
    return dataToReturn;
}

let combis = getCombinations([2, 3, 4, 40])//Please enter any array here

let sameArrays = combis.filter(combi => combi.difference === 0);
if (sameArrays.length > 0) {
    console.log(sameArrays.length + "child arrays have same average");
    for (let i = 0; i < sameArrays.length; i++) {
        console.log("[" + sameArrays[i].firstSubArray + "]\t" + "AVG:: " + sameArrays[i].firstAvg + "\n[" + sameArrays[i].secondSubArray + "]\t" + "AVG:: " + sameArrays[i].secondAvg);
    }
} else {
    console.log("No child array combination have same average");
    combis.sort((a, b) => parseFloat(a.difference) - parseFloat(b.difference));
    console.log("[" + combis[0].firstSubArray + "]\t" + "AVG:: " + combis[0].firstAvg + "\n[" + combis[0].secondSubArray + "]\t" + "AVG:: " + combis[0].secondAvg);
}
