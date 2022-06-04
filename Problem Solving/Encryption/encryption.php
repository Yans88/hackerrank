<?php

//url : https://www.hackerrank.com/challenges/encryption/problem

function encryption($s) {
    // Write your code here
    $s = str_replace(' ','',$s);
    $length_s = strlen($s);
   
    $maxRow = floor(sqrt($length_s));
    $maxCol = ceil(sqrt($length_s));
    $arr = str_split($s, $maxCol);
    $results = [];
    for ($i = 0; $i < $maxCol; $i ++) {
        $str = '';
        for ($j = 0; $j <= $maxRow; $j ++) {
            if (isset($arr[$j][$i])) {
                $str .= $arr[$j][$i];
            }
        }
        $results[] = $str;
    }
    return implode(" ", $results);
}