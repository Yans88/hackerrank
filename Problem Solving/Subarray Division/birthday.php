<?php

//url : https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday($s, $d, $m) {
    // Write your code here
	$ways = 0;
    foreach ($s as $i => $sq) {
        if( array_sum(array_slice($s, $i, $m)) === $d )
        {
            $ways++;
        }
    }
    return $ways;
}