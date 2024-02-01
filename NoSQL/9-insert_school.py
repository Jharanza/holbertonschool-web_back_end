#!/usr/bin/env python3
""" module that insert values in a collection"""


def insert_school(mongo_collection, **kwargs):
    """ Insert a document and return its id """

    data = mongo_collection.insert_one(kwargs)

    return data.inserted_id
