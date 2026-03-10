import os
import glob
import re

components_dir = r"c:\Users\praveen tamminaina\Downloads\30 DEC TZ\design_anti\src\components"

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacing the dark/red hexes with our new CSS variables for the light vintage theme
    replacements = {
        # Backgrounds
        "bg-[#000000]": "bg-[var(--color-bg-base)]",
        "bg-[#030000]": "bg-[var(--color-bg-base)]",
        "bg-[#050505]": "bg-[var(--color-bg-card)]",
        "bg-[#0a0a0a]": "bg-[var(--color-bg-card)]",
        "bg-[#111111]": "bg-[var(--color-bg-card)]",
        "bg-[#111]": "bg-[var(--color-bg-card)]",
        "bg-[#222]": "bg-[var(--color-border)]",
        
        # Text colors
        "text-[#ededed]": "text-[var(--color-primary)]",
        "text-[#fff]": "text-[var(--color-primary)]",
        "text-white": "text-[var(--color-primary)]",
        "text-[#888888]": "text-[var(--color-secondary)]",
        "text-[#888]": "text-[var(--color-secondary)]",
        "text-[#666666]": "text-[var(--color-secondary)]",
        "text-[#666]": "text-[var(--color-secondary)]",
        "text-[#000]": "text-[var(--color-bg-base)]",
        
        # Borders
        "border-[#222]": "border-[var(--color-border)]",
        "border-[#333]": "border-[var(--color-border)]",
        "border-[#444]": "border-[var(--color-border)]",
        "border-[#555]": "border-[var(--color-accent)]",
        "border-[#fff]": "border-[var(--color-primary)]",
        
        # Gradients (we'll replace bg-gradient with standard colors or keep transparent)
        "bg-gradient-to-b from-white to-[#888]": "text-[var(--color-primary)]",
        "text-transparent bg-clip-text": "", # Remove clipping for simple solid text
        "mix-blend-luminosity": "mix-blend-multiply opacity-80",
        
        # Interactive
        "hover:text-[#fff]": "hover:text-[var(--color-accent)]",
        "hover:text-white": "hover:text-[var(--color-accent)]",
        "hover:bg-[#111]": "hover:bg-[var(--color-bg-card)]",
        "hover:bg-[#222]": "hover:bg-[var(--color-border)]"
    }

    for old, new in replacements.items():
        content = content.replace(old, new)
        
    # Clean up multiple spaces that might result from removal
    content = re.sub(r'  +', ' ', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for filepath in glob.glob(os.path.join(components_dir, "*.jsx")):
    replace_in_file(filepath)
