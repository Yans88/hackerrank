<?php

//url : https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets($a, $b) {
    // Write your code here
    $bob = 0;
    $alice = 0;
    $result = array();
    for($i=0;$i<count($a);$i++){
        $bob += $a[$i] > $b[$i] ? 1 : 0;
        $alice += $a[$i] < $b[$i] ? 1 : 0;
    }
    array_push($result, $bob);
    array_push($result, $alice);
    return $result;
}