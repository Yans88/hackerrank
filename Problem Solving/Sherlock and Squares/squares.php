<?php

//url: https://www.hackerrank.com/challenges/sherlock-and-squares/problem

function squares($a, $b) {
    // Write your code here
    $awal = ceil(sqrt($a));
    $akhir = floor(sqrt($b));
    return ($akhir - $awal + 1);
}