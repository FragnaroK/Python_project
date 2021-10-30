import shlex
import subprocess

cmd = "cmd /C echo %USERNAME%"
if subprocess.run(shlex.split(cmd), shell=False) == 'User':
    print('iguales')
else:
    print('Diferentes')