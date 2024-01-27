#!/usr/bin/env python3
""" Module that measure the runtime of wait_n """
from time import time
import asyncio


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """ return the time delay of wait_n """
    initial_time = time().perf_counter()
    asyncio.run(wait_n(n, max_delay))
    final_time = time().perf_counter()
    total_time = final_time - initial_time
    return total_time / n
