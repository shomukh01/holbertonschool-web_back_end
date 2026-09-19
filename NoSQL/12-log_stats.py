#!/usr/bin/env python3
"""Provide statistics about Nginx logs stored in MongoDB."""

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


if __name__ == "__main__":
    main()
