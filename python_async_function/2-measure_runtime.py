#!/usr/bin/env python3
"""  """
from time import time
import asyncio


wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    initial = time()
    data = await asyncio.gather(wait_n(n, max_delay))
    final = time()
    total_time = final - initial
    await print(data)
    return total_time / n
