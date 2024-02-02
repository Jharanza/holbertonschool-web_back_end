#!/usr/bin/env python3
""" Module that measure the indexes in the page """
import csv
from math import ceil
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

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        '''
        Method that returns a list of a dict
            page: The current page number
            page_size: The length of the dataset
            data: The values of the dataset page
            next_page: Number of next page or None if there isn't next page
            prev_page: Number of previous page or None if there isn't previous
            total_pages: total number of pages in the dataset
        '''
        indexes = self.get_page(page, page_size)
        next_page: int | None = page + 1
        prev_page: int | None = page - 1
        dataset = self.__dataset
        total_pages = ceil(len(dataset) / page_size)

        info = {
            'page_size': len(indexes),
            'page': page,
            'data': self.get_page(page, page_size),
            'next_page': next_page if page < total_pages else None,
            'prev_page': prev_page if page > 1 else None,
            'total_pages': total_pages
        }

        return info
