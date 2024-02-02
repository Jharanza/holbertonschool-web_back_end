#!/usr/bin/env python3
""" Module that changes all topics of a document"""


def update_topics(mongo_collection, name, topics):
    """ Method that change the topics of a document """
    result = mongo_collection.update_one({'name': name}, {
        '$set': {'topics': topics}
    })

    return result
