#!/usr/bin/venv python3
""" Module that take a float value and returns an int """


def floor(n: float) -> int:
    ''' method that take a float number and round it '''
    n = n.__floor__()
    return n
