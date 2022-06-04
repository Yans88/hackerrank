<?php 

// url: https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds($arr) {
    // Write your code here
    $totals = array_count_values ($arr);
    asort($totals);
    $max = end($totals);
    $filtred = array_filter($totals, function($i) use ($max){ return ($i == $max); });
    ksort($filtred);
    return key($filtred);
}