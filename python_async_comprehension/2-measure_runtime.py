#!/usr/bin/env python3
""" Module that take the time that four async tasks take """
import time
import asyncio


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    ''' Method that take the time to run an async task '''
    time_gather = asyncio.gather(*(async_comprehension()
                                   for _ in range(4)))

    initial: float = time.time()
    await time_gather
    final: float = time.time()
    return final - initial
