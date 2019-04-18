import requests
import random
from First.settings import VK_ACCESS


def send_message(msg):
    """
        function for sending message in vk with ip.
        Docs for vk messages - https://vk.com/dev/messages.send
    """
    url = "https://api.vk.com/method/messages.send?"
    message = 'New visit from ' + str(msg)
    values = {'user_id': '220771518',
              'random_id': random.randint(1, 2147482647),
              'peer_id': '220771518',
              'domain': 'dimabytes',
              'chat_id': '1970',
              'message': message,
              'access_token': VK_ACCESS,
              'v': '5.92'
              }
    requests.post(url, params=values)
