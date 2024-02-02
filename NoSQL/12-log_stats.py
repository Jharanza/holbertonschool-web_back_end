#!/usr/bin/env python3
""" script that provides stats about Nginx logs stored in MongoDB """
from pymongo import MongoClient


def log_dump():
    """ Display stats about Nginx logs in MongoDB """
    client = MongoClient('mongodb://localhost')  # connect to the local server

    db = client.logs  # acces the losgs database

    collection = db.nginx  # acces the nginx collection

    total_logs = collection.count_documents({})  # count the total logs

    print(f"{total_logs} logs")  # print the total number of logs

    http_methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']  # define a list

    print('Methods:')  # header

    # iterar over each http method
    for method in http_methods:
        # Get the ocurrences for each method
        count = collection.count_documents({'method': method})
        print(f'\tmethod {method}: {count}')

    #  Get the number of status check logs
    status_check_count = collection.count_documents({
        'method': 'GET', 'path': '/status'})

    print(f'{status_check_count} status check')

    client.close()  # close the connection


if __name__ == '__main__':
    log_dump()
