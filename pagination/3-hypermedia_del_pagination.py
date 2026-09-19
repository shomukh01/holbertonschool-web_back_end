#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import Dict, List


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(
        self, index: int = None, page_size: int = 10
    ) -> Dict:
        """Return a deletion-resilient page and the next query index."""
        assert isinstance(page_size, int) and page_size > 0

        indexed = self.indexed_dataset()
        if index is None:
            index = 0
        assert isinstance(index, int) and 0 <= index < len(indexed)

        data = []
        keys = sorted(key for key in indexed if key >= index)
        for key in keys[:page_size]:
            data.append(indexed[key])

        if data:
            next_index = keys[len(data) - 1] + 1
        else:
            next_index = index
        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index,
        }
