import IP2Location

database = IP2Location.IP2Location("utils/IP2LOCATION-LITE-DB3.BIN")


class IpInfo:
    """
        Class for taking info by ip
    """
    def __init__(self, ip):
        rec = database.get_all(ip)
        self.city = str(rec.city)[2:-1]
        self.country = str(rec.country_long)[2:-1]
