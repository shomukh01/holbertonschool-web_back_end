#!/usr/bin/env python3
"""List all documents in a MongoDB collection."""


def list_all(mongo_collection):
    """Return all documents from a MongoDB collection."""
    return list(mongo_collection.find())
