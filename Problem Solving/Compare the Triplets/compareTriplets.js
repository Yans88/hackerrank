//url : https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    // Write your code here
    var alice = 0;
    var bob = 0;
    var result = Array();
    for(var i=0;i<a.length;i++){
        bob += a[i] > b[i] ? 1 : 0;
        alice += a[i] < b[i] ? 1 : 0;
    }
    result.push(bob, alice);
    return result;
}
