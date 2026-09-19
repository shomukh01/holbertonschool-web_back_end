#!/usr/bin/env python3
"""Provide Nginx log statistics, including the most common IPs."""

from pymongo import MongoClient


def main():
    """Print statistics for the logs.nginx collection."""
    collection = MongoClient().logs.nginx
    print("{} logs".format(collection.count_documents({})))
    print("Methods:")
    for method in ("GET", "POST", "PUT", "PATCH", "DELETE"):
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))
    status_count = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print("{} status check".format(status_count))
    print("IPs:")
    pipeline = [
        {"$group": {"_id": "$ip", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 10},
    ]
    for ip in collection.aggregate(pipeline):
        print("\t{}: {}".format(ip["_id"], ip["count"]))


if __name__ == "__main__":
    main()
