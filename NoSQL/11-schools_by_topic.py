#!/usr/bin/env python3
""" Module that receive a collection and returns a list """

def schools_by_topic(mongo_collection, topic):
    """ method that returns a list with a given topics """
    cursor = mongo_collection.find({ 'topics': topic})

    return list(cursor)
