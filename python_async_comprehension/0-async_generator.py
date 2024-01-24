#!/usr/bin/env python3
""" Module that create a coroutine that iterate 10 times """
from typing import Generator
import random
import asyncio


async def async_generator() -> Generator[float, None, None]:
    ''' Generator that yield different random numbers 10 times '''
    for i in range(10):
        await asyncio.sleep(1)
        yield random.random()*10
