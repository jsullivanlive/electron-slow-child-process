import subprocess
process = subprocess.Popen('diskutil unmount "/Volumes/Nikon D4"', shell=True, stdout=subprocess.PIPE)
process.wait()
