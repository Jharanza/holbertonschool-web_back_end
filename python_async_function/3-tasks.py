#!/usr/bin/env python3
""" Module that run an async function in a sync function """
import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> float:
    """ Method that run the asynchronous function """
    task = asyncio.Task(wait_random(max_delay))
    return task
