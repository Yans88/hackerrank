<?php

//url: https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks($arr)
{
    $countarr = array();    
    while (sizeof($arr) > 0) {
        
        $smallest = smallerStick($arr);
        $count = 0;
        $newarr = array();

        // Cut stics
        foreach ($arr as $key => $value) {
            $remain = $value - $smallest;

            // count cutted stick number
            $count++;
    
            if ($remain > 0) {
                $newarr[] = $value;
            }
        }
        
        $arr = $newarr;
        $countarr[] = $count;
    }

    return $countarr;
}

function smallerStick($arr)
{
    $smaller = $arr[0];
    foreach ($arr as $value) {
        if ($value > 0 && $value < $smaller) {
            $smaller = $value;
        }
    }

    return $smaller;
}