#!/usr/bin/env python3
from typing import Callable
""" Module that takes a functión that returns a function """


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''Method that get a float and returns a function'''
    def mult_funct(value: float) -> float:
        ''' Function that multiplies a float with the multiplier variable '''
        return value * multiplier

    return mult_funct
