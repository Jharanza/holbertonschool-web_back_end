#!/usr/bin/env python3
""" Module that receive a string and a number and returns a tuple """
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    ''' Method that takes a string and a number y returns a tuple '''
    new_tuple: Tuple[str, float] = (k, v * v)

    return new_tuple
