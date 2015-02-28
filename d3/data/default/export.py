#!/usr/bin/python  
import MySQLdb 
import json
name=[]
sex=[]
industry=[]
birth=[]
place=[]
place2=[]
GP=[]
GP2=[]
marriage=[]
json_person=[]
json_class=[]
file_object=open('objects.json','w')
conn = MySQLdb.connect(host="127.0.0.1",user="root",passwd="",db="friend")
cur = conn.cursor()
cur.execute("select name,sex,industry,year(now())-year(birth),place,GP,marriage from info")
result = cur.fetchall()
for r in result:
	name.append(str(r[0]))
	sex.append(str(r[1]))
	industry.append(str(r[2]))
	birth.append(str(r[3]))
	place.append(str(r[4]))
	GP.append(str(r[5]))
	marriage.append(str(r[6]))
	json_person.append("{'type' : 'name','name' : '"+str(r[0])+"','depends' : ['"+str(r[1])+"','"+str(r[2])+"','"+str(r[3])+"','"+"\",\"".join(str(r[4]).split(","))+"','"+"\",\"".join(str(r[5]).split(","))+"','"+str(r[6])+"']}")


file_object.write("["+"\n")
for r in json_person:
	r=r.replace("'",'"')
	file_object.writelines(r)
	file_object.write(","+"\n")
for r in set(sex):
	file_object.writelines("{\"type\" : \"sex\",\"name\" : \""+r+"\",\"depends\" : []}")
	file_object.write(","+"\n")	
for r in set(industry):
	file_object.writelines("{\"type\" : \"industry\",\"name\" : \""+r+"\",\"depends\" : []}")
	file_object.write(","+"\n")		
for r in set(birth):
	file_object.writelines("{\"type\" : \"age\",\"name\" : \""+r+"\",\"depends\" : []}")
	file_object.write(","+"\n")
for r in set(GP):
	for r2 in set(r.split(",")):
		GP2.append(r2)
for r in set(GP2):
	file_object.writelines("{\"type\" : \"group\",\"name\" : \""+r+"\",\"depends\" : []}")
	file_object.write(","+"\n")
for r in set(place):
	for r2 in set(r.split(",")):
		place2.append(r2)
for r in set(place2):
	file_object.writelines("{\"type\" : \"place\",\"name\" : \""+r+"\",\"depends\" : []}")
	file_object.write(","+"\n")	
for r in set(marriage):
	file_object.writelines("{\"type\" : \"marriage\",\"name\" : \""+r+"\",\"depends\" : []}")
	file_object.write(","+"\n")
file_object.seek(file_object.tell()-2)
file_object.write("\n"+"]")

file_object.close()
cur.close()
conn.close()