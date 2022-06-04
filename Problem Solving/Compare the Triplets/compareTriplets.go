//url : https://www.hackerrank.com/challenges/solve-me-first/problem

func compareTriplets(a []int32, b []int32) []int32 {
    // Write your code here
    bob := 0
    alice :=0      
    for i := 0; i < len(a); i++ {
        if(a[i] > b[i]){ bob = bob + 1}
        if(a[i] < b[i]){ alice = alice + 1}        
    }
    result := []int32{int32(bob), int32(alice)}    
    return result
}