#!/usr/bin/env python3
"""Insert documents into a MongoDB school collection."""


def insert_school(mongo_collection, **kwargs):
    """Insert a school document and return its new identifier."""
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
