import subprocess
import sys

# Path to your requirements file
requirements_path = r"requirements.txt"

# Use Python to run pip
subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", requirements_path])
