#!/usr/bin/env python3
""" Module that takes a list of floats and ints, sum it and returns a float"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    ''' Method that sums the values of a list '''
    sum: float = 0.0
    for x in mxd_lst:
        sum += x
    return sum
