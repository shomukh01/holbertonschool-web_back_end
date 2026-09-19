#!/usr/bin/env python3
"""Pagination helper functions."""


def index_range(page, page_size):
    """Return the start and end indexes for a 1-indexed page."""
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
