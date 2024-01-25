#!/usr/bin/env python3
""" Module that resemble the function wait_n """
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ Method that takes an asyncio.Task and run it n times """
    data = [await task_wait_random(max_delay) for _ in range(n)]
    return data
