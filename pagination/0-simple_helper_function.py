#!/usr/bin/env python3
""" Module that get the indexes of the page """
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int]:
    """
    Method that returns the first and last index of one page
        page: page number
        page_size: number of indexes
    """
    total_index: int = page * page_size

    initial: int = total_index - page_size
    final: int  = total_index
    res: Tuple = (initial, final)

    return res
