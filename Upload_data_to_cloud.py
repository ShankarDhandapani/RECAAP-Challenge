import pandas as pd
import glob
import os
from datetime import date
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

data_csv_filename = ""
today = str(date.today()).split("-")
date_today = today[1]+today[2]+today[0]
for file in glob.glob("Data\\*.xlsx"):
    if date_today in file:
        data_csv_filename = file

df = pd.read_excel(data_csv_filename)

data = {}
for col_name in list(df):
    content = []
    title = df[col_name][0]
    for index in range(1,len(df[col_name])):
        content.append(str(df[col_name][index]).strip())
    data[title] = content

month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

# Use a service account
cred = credentials.Certificate('Data\\repldashboard-6a5a9fff3ed7.json')
firebase_admin.initialize_app(cred,{'databaseURL':'https://repldashboard.firebaseio.com/'})

ref = db.reference('/100DaysOfCode')

for i in range(len(data['Year'])):
    date = str(data['Date'][i]) + "-" + str(month.index(data['Month'][i])+1) + "-" + str(data['Year'][i])
    ref_child = ref.child(data['Assignment Name'][i]).child(data['User Name'][i])
    #db.collection().document().collection().document(data['Day'][i]).collection().document()
    ref_child.set({'date':date,'time': data['Time'][i]})

print("Database Updated Successfully !!!")
