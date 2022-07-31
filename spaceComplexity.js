//#5 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}

// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6)

//git remote set-url origin https://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@github.com/Jaspreetkumar1999/interview_prep.git
//it remote add origin https://github.com/Jaspreetkumar1999/interview_prep.git