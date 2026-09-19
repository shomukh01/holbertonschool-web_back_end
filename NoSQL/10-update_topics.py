#!/usr/bin/env python3
"""Update topics for MongoDB school documents."""


def update_topics(mongo_collection, name, topics):
    """Replace the topics list for every school with the given name."""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
