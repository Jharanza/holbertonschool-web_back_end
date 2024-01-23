#!/usr/bin/env python3
""" Module that receives an iterable and returns a list """
from typing import Tuple, List, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    ''' Method that returns a list from an iterable '''
    return [(i, len(i)) for i in lst]
