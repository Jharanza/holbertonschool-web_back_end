#!/usr/bin/env python3
""" Module that import a generator and use it in an async comprehension """
import asyncio
from typing import Generator

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> Generator[float, None, None]:
    ''' Method that create a async comprehension '''
    list_number = [rand_number async for rand_number in async_generator()]
    return list_number


if __name__ == '__main__':
    event_loop = asyncio.get_event_loop()
    try:
        event_loop.run_until_complete(async_comprehension())
    finally:
        event_loop.close()
