const sort = function(array)
{
    return array.sort(function(a,b){
        return a > b;
    });
};

var wiggleSort = function(nums) {
    let medianPos;
    const sortedNums = [...nums];
    sort(sortedNums);
    nums.length = 0;
    // even number of nums
    if(sortedNums.length % 2 === 0)
    {
        medianPos = Math.ceil(sortedNums.length / 2);
        for (let i = 0; i < medianPos; i++) {
            nums.push(sortedNums[i]);
            nums.push(sortedNums[medianPos + i]);
        }
    }
    // odd number of nums
    else
    {
        medianPos = Math.floor(sortedNums.length / 2);
        for (let i = 0; i < medianPos; i++) {
            nums.push(sortedNums[i]);
            if(i < medianPos)
                nums.push(sortedNums[medianPos + i]);
        }
    }
    // console.log(nums);
};

const validate = function(array)
{
    console.log("Validating " + JSON.stringify(array));
    let goingUp = true;
    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        const prevNum = array[i - 1];
        if(goingUp)
        {
            if(num < prevNum)
                return false;
        }
        if(!goingUp)
        {
            if(num >  prevNum)
                return false;
        }

        goingUp = !goingUp;
    }

    return true;
};

let nums = [1,5,1,1,6,4];
wiggleSort(nums);
console.log(validate(nums));

nums = [1, 3, 2, 2, 3, 1];
wiggleSort(nums);
console.log(validate(nums));

nums = [1, 5, 1, 1, 6, 4];
wiggleSort(nums);
console.log(validate(nums));

nums = [-3, -1, -1, -2];
wiggleSort(nums);
console.log(validate(nums));

nums = [-3, 1, 1, 20];
wiggleSort(nums);
console.log(validate(nums));

nums = [-1,2,-1];
wiggleSort(nums);
console.log(validate(nums));

nums = [-1,-2,-4];
wiggleSort(nums);
console.log(validate(nums));



// [1, 3, 2, 2, 3, 1] -> [1,1,2,2,3,3]
