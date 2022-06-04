<?php

//url: https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount($n, $p) {
    // Write your code here
     $pageTurns = floor($p / 2);
    $totalTurns = floor($n / 2);
    return min($pageTurns, $totalTurns - $pageTurns);
}