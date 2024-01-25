#!/usr/bin/env python3
""" Module that returns a sorted list of delays """
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ Method that accept 2 ints and return a list of floats """
    delays = [await wait_random(max_delay) for _ in range(n)]

    return sorted(delays)
