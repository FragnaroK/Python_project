from os import  getenv

# Set web files folder and optionally specify which file types to check for eel.expose()
#   *Default allowed_extensions are: ['.js', '.html', '.txt', '.htm', '.xhtml']

cmdDir = "C:\\Users\\%USERNAME%"
wslDir = "/mnt/c/Users/$(cmd.exe /c echo %USERNAME% | sed 's/\r$//')"
unDir = "/home/$(whoami)"

def isWindows():
    print("WINDOWS SYSTEM DETECTED")
    print("[?] Trying to start Windows module...")
    try:
        import windows
        print("[!] Windows module found!")
        print("[+] Starting Windows module...")
        windows.runWindowsApp()
    except ModuleNotFoundError or ImportError as err:
        print("[X] Windows module not found. Details: {} ".format(err.msg))

def unix():
    print("[*] UNIX SYSTEM DETECTED")

def checkOS():
    if getenv('COMSPEC'):
        return 'windows'
    if getenv('SHELL'):
        return 'unix'

if checkOS() == 'windows':
    isWindows()

if checkOS() == 'unix':
    unix()
