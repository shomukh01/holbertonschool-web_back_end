#!/usr/bin/env python3
"""Find MongoDB schools by topic."""


def schools_by_topic(mongo_collection, topic):
    """Return schools whose topics contain the requested topic."""
    return list(mongo_collection.find({"topics": topic}))
