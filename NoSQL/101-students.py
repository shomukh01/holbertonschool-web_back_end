#!/usr/bin/env python3
"""Rank students by their average topic score."""


def top_students(mongo_collection):
    """Return students sorted by descending average topic score."""
    pipeline = [
        {
            "$addFields": {
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {"$sort": {"averageScore": -1}},
    ]
    return list(mongo_collection.aggregate(pipeline))
