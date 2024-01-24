#!/usr/bin/env python3
""" Module that use the module asyncio to create a delay """
import asyncio
import random


async def wait_random(max_delay=10):
    ''' Coroutine that awaits a delay and return it '''
    delay = random.uniform(random.random(), max_delay)
    await asyncio.sleep(delay)
    return delay
