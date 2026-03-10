import os
import glob
import re

components_dir = r"c:\Users\praveen tamminaina\Downloads\30 DEC TZ\design_anti\src\components"

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for sleek dark mode Vercel/Linear style
    replacements = {
        "bg-white": "bg-[#050505]",
        "bg-gray-50": "bg-[#000000]",
        "bg-gray-100": "bg-[#111111]",
        "bg-gray-900": "bg-[#111111]",
        "bg-[var(--color-bg-light)]": "bg-[#000000]",
        "bg-[var(--color-navy)]": "bg-[#000000]",
        "border-gray-100": "border-[#222]",
        "border-gray-200": "border-[#333]",
        "border-white/10": "border-[#222]",
        "border-white/20": "border-[#222]",
        "border-white/60": "border-[#333]",
        "border-[var(--color-primary)]": "border-[#fff]",
        "text-[var(--color-navy)]": "text-[#ededed]",
        "text-[#0F172A]": "text-[#ededed]",
        "text-[#111827]": "text-[#ededed]",
        "text-[var(--color-text-secondary)]": "text-[#888888]",
        "text-[var(--color-primary)]": "text-[#ededed]",
        "text-[var(--color-accent)]": "text-[#666]",
        "text-gray-600": "text-[#888888]",
        "text-gray-500": "text-[#666666]",
        "text-gray-400": "text-[#888888]",
        "text-blue-500": "text-[#ededed]",
        "hover:bg-gray-50": "hover:bg-[#111]",
        "hover:bg-gray-100": "hover:bg-[#222]",
        "hover:text-[var(--color-primary)]": "hover:text-[#fff]",
        "bg-[var(--color-primary)]": "bg-[#fff] text-[#000]",
        "bg-blue-50": "bg-[#111] border border-[#222]",
        "bg-amber-50": "bg-[#111] border border-[#222]",
        "bg-emerald-50": "bg-[#111] border border-[#222]",
        "bg-purple-50": "bg-[#111] border border-[#222]",
        "premium-glow": "card-premium",
        "glass-card": "card-premium",
        "glass": "bg-[#111]",
        "text-gradient": "text-gradient",
        "bg-gradient-primary": "bg-[#111]",
        "hover-glow": "hover:border-[#444] transition-colors duration-300",
    }

    for old, new in replacements.items():
        content = content.replace(old, new)

    # Remove some heavy shadows classes
    content = re.sub(r'shadow-\[.*?\]', 'shadow-none', content)
    content = content.replace('shadow-xl', '')
    content = content.replace('shadow-2xl', '')
    content = content.replace('shadow-lg', '')
    content = content.replace('shadow-sm', '')
    content = content.replace('hover:shadow-xl', '')
    content = content.replace('hover:shadow-md', '')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for filepath in glob.glob(os.path.join(components_dir, "*.jsx")):
    # Don't touch Hero and Header as we will rewrite them
    if 'Hero.jsx' not in filepath and 'Header.jsx' not in filepath:
        replace_in_file(filepath)
