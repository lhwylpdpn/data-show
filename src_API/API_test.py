import threading
import urllib
import urllib.request
import csv
import pymysql
import time

def API_write(string_a,string_b):
	file_object = open('../json/'+string_b+'.json','w')

	try:
		file_object.write("{\"data\":\""+string_a+"\"}")
	finally:
		file_object.close( )
