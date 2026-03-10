import os
import glob
import re

components_dir = r"c:\Users\praveen tamminaina\Downloads\30 DEC TZ\design_anti\src\components"

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacing Name
    replacements = {
        "EduCore": "SRIRAM's IAS",
        "Educore": "SRIRAM's IAS",
        "Edu Core": "SRIRAM's IAS"
    }

    for old, new in replacements.items():
        content = content.replace(old, new)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for filepath in glob.glob(os.path.join(components_dir, "*.jsx")):
    replace_in_file(filepath)
