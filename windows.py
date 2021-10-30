import eel
from os.path import isfile, isdir
from os import listdir
from psutil import disk_usage
from subprocess import call
from getpass import getuser

# Set web files folder and optionally specify which file types to check for eel.expose()
#   *Default allowed_extensions are: ['.js', '.html', '.txt', '.htm', '.xhtml']

hdd = disk_usage('/')
user = getuser()
cmdDir = "C:\\Users\\{}".format(user) 

def getStats():
    eel.getStats([hdd.total / (2**30),hdd.used / (2**30),hdd.free / (2**30)])

def isBasic(address):
    if isfile('{}\\basic.txt'.format(address)):
        return True
    else:
        return False

def isAngular(address):
    if isfile('{}\\angular.json'.format(address)):
        return True
    else:
        return False

def getProjects():
    if isdir('{}\\Documents\\Github'.format(cmdDir)):
        eel.getProjects(listdir('{}\\Documents\\Github'.format(cmdDir)))
    else:
        eel.showErrorMessage('GitHub folder not found!')

@eel.expose
def getProject(project):
    address = '{}\\Documents\\Github\\{}'.format(cmdDir, project)
    if isdir('{}\\Documents\\Github\\{}'.format(cmdDir,project)):
        eel.selectProject(project)
        if isAngular(address):
            eel.getProject(project, 'Angular', address)
        else:
            if isBasic(address):
                eel.getProject(project, 'Basic', address)
            else:
                eel.showErrorMessage('Issues detecting type of project')
    else:
        eel.showErrorMessage('GitHub folder not found!')

@eel.expose
def execCode(code):
    call('start cmd /K "{}"'.format(code), shell=True )

def runWindowsApp():
    eel.init('web', allowed_extensions=['.js', '.html'])

    getProjects()
    getStats()

    eel.start('index.html') 