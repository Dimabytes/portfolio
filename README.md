
**Portfolio**
-  Site http://https://dimabytes.pythonanywhere.com/

**Info**
 
- Python 3.6
- Django 2.0.7
- Postgres 10

**Install:**

- pip install -r req.txt
- create folder media

- Create local_settings.py/prod_settings.py and add:
- SECRET_KEY
- MEDIA_ROOT 
- STATIC_ROOT / STATICFILES_DIRS
- VK_ACCESS = (str with access token for sending messages in vk.com)
- MEDIA_ROOT = os.path.join(BASE_DIR, "media"),
- EMAIL_HOST_PASSWORD


**Project structure**

- First. Main folder with settings and etc. .
- locale. folder for Django translate.
- main. App for main page.
- media. Media folder.
- Portfolio. App for portfolio page.
- static. Static folder.
- templates. Folder with templates.
- utils. Folder with helpless utils for the project.
- works. App for pages with my works.