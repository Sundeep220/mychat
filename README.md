# mychat

`MyChat` is an online platform video calling application built using AgoraSDK for JavaScript, Django.



- Before running this project: 

  -> Create a virtual environment, in Windows command is as follows: \
    `pythom -m venv env` \
   -> To activate: \
     `env/Scripts/activate`

- To run this project do the following:

    Pre-requisites: Python, pip and django should be installed in your system. All the coding is done using VScode.
    1. To install the dependencies: \
       `pip install -r requirements.txt` 
    2. Make the migrations:\
        `python manage.py makemigrations` 
    3. Migrate the tables: \
        `python manage.py migrate` 
    4. Create a superuser for your project: \
        `python manage.py createsuperuser`   
        This will prompt you to enter username, email and password for the superuser.  
        
#### Update Agora credentals
In order to use this project you will need to replace the agora credentials in `views.py` and `streams.js`.
Create an account at agora.io and create an `app`. Once you create your app with token and appid authentication, you will want to copy the `appid` & `appCertificate` to update `views.py` and `streams.js`.

###### views.py
```
def getToken(request):
    appId = "YOUR APP ID"
    appCertificate = "YOUR APPS CERTIFICATE"
    ......
```

###### streams.js
```
....
const APP_ID = 'YOUR APP ID'
....
```


#### 4 - Start server
```
python manage.py runserver
```
        
- Home page:


![join_room](https://user-images.githubusercontent.com/93663329/202516685-f77f05d6-399b-4c28-8672-c647b0c515de.png)



