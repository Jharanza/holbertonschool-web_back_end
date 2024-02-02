#!/usr/bin/env python3
""" Module that measure the indexes in the page """
import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def index_range(self, page: int, page_size: int) -> Tuple[int]:
        """
        Method that returns the first and last index of one page
            page: page number
            page_size: number of indexes
        """
        start_index: int = (page - 1) * page_size

        end_index: int = start_index + page_size

        return start_index, end_index

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return a list of index of the dataset
            page: page number to check
            page_size: max number of indexes in the page
            start: first index in the page
            end: last index in the page
            dataset: data from the csv file
        """
        assert isinstance(page, int)
        assert isinstance(page_size, int)

        assert page > 0
        assert page_size > 0

        # Get the first and last index of a page
        indexes = self.index_range(page, page_size)
        start, end = indexes

        # Get the data from the dataset
        dataset = self.dataset()

        # put conditions
        if start >= len(dataset):
            return []
        elif end >= len(dataset):
            return []

        return dataset[start: end]
