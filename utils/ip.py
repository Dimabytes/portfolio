import datetime


def get_ip(request):
    """
        function for getting ip by request from view
    """
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def ReplaceLineInFile(fileName, sourceText, replaceText):
    file = open(fileName, 'r')  # Opens the file in read-mode
    text = file.read()  # Reads the file and assigns the value to a variable
    file.close()  # Closes the file (read session)
    file = open(fileName, 'w')  # Opens the file again, this time in write-mode
    file.write(text.replace(sourceText, replaceText))  # replaces all instances of our keyword
    # and writes the whole output when done, wiping over the old contents of the file
    file.close()  # Closes the file (write session)


path = 'log.log'  # path for log file


def add_ip(ip, place, limit):
    """
        function for adding ip gotten from request and add this to log file in format like:
        ip num
        where ip - ip :) and num - the number of times this ip was written to the file
    """
    add = True
    more_limit = True
    day_now = datetime.datetime.today().day
    try:
        log = open(path, 'r')
        if str(day_now) != log.readline():
            log.seek(0)
            log.truncate()
    except IOError:
        temp = open(path, 'w')
        temp.write(str(day_now) + '\n')
        temp.close()
        log = open(path, 'r')

    for line in log:
        if ip in line:
            m = line.split(' ')
            m[place] = str(int(m[place]) + 1)
            if int(m[1]) > limit:
                more_limit = False
            replace_line = ' '.join(m) + ' \n'
            ReplaceLineInFile(path, line, replace_line)
            add = False
            break
    log.close()
    if add:
        log = open(path, 'a')
        log.write(ip + ' 1\n')
        log.close()
    return more_limit
