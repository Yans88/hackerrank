//url : https://www.hackerrank.com/challenges/simple-array-sum/problem

func simpleArraySum(ar []int32) int32 {
    // Write your code here
    result := 0
    for _, a := range ar{
        result = result + int(a)
    }
    return int32(result)
}