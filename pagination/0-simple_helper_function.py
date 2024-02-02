#!/usr/bin/env python3
""" Module that get the indexes of the page """
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int]:
    """
    Method that returns the first and last index of one page
        page: page number
        page_size: number of indexes
    """
    assert isinstance(page, int)
    assert isinstance(page_size, int)

    assert page > 0
    assert page_size > 0
    
    start_index: int = (page - 1) * page_size

    end_index: int = start_index + page_size

    return start_index, end_index
