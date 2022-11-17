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
    5. Run the server using: \
        `python manage.py runserver`
        
- Home page:


![join_room](https://user-images.githubusercontent.com/93663329/202516685-f77f05d6-399b-4c28-8672-c647b0c515de.png)

- Call view:


![group call](https://user-images.githubusercontent.com/93663329/202516845-a4a83686-5883-4156-a64b-2ba5caaa594b.png)

