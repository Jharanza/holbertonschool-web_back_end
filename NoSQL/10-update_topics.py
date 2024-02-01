#!/usr/bin/env python3
""" Module that changes all topics of a document"""


def update_topics(mongo_collection, name, topics):
    """ Method that update all topics of a document """
    data = mongo_collection.update_one(
        { name: name}, { '$set': { 'topics': topics }});
    
    return data.modified_count > 0
