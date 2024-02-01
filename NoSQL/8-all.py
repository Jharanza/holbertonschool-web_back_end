#!/usr/bin/env python3
''' list all documents in a collection '''


def list_all(mongo_collection):
    """ list all documents with the given collection """
    cursor = mongo_collection.find()

    document_list = list(cursor)
    
    return document_list
