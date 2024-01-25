#!/usr/bin/env python3
""" Module that use the module asyncio to create a delay """
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    ''' Coroutine that awaits a delay and return it '''
    delay: float = random.random() * max_delay
    await asyncio.sleep(delay)
    return delay
