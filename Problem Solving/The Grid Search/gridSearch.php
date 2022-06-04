<?php

//url: https://www.hackerrank.com/challenges/the-grid-search/problem

function gridSearch($G, $P)
{
    $length_g = count($G);
    $length_g0 = strlen($G[0]);
    $length_p = count($P);
    $length_p0 = strlen($P[0]);

    for ($i = 0; $i <= ($length_g - $length_p); $i++) {
        for ($j = 0; $j <= ($length_g0 - $length_p0); $j++) {
            if ($G[$i][$j] == $P[0][0]) {
                $m = $i;
                $n = $j;
                $flag = 1;
                for ($a = 0; $a < $length_p; $a++) {
                    for ($b = 0; $b < $length_p0; $b++) {
                        if ($P[$a][$b] != $G[$m + $a][$n + $b]) {
                            $flag = 0;
                            break;
                        }
                    }
                    if ($flag != 1) break;
                }
                if ($flag > 0) return "YES";
            }
        }
    }
    return "NO";
}