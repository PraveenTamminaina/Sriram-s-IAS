import os, glob

for f in glob.glob('src/components/*.jsx'):
    print(f"Processing {f}")
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content.replace("once: true", "once: false")
    
    if "Courses.jsx" in f:
        new_content = new_content.replace('https://images.unsplash.com/photo-1513475382585-d8cae31f6d63?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=800')
        new_content = new_content.replace('<button className="w-full py-3 bg-[var(--color-bg-base)] text-[var(--color-primary)] font-bold rounded-xl group-hover:bg-[#fff] text-[var(--color-bg-base)] group-hover:text-[var(--color-primary)] transition-colors duration-300 flex justify-center items-center gap-2">', '<button className="w-full py-3 bg-[var(--color-bg-base)] text-[var(--color-primary)] font-bold rounded-xl group-hover:bg-[var(--color-accent)] transition-colors duration-300 flex justify-center items-center gap-2">')
        new_content = new_content.replace('<button className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-bold hover:bg-[#fff] text-[var(--color-bg-base)] hover:text-[var(--color-primary)] transition-all duration-300 hover:border-[var(--color-border)] transition-colors duration-300">', '<button className="px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-bold hover:bg-[var(--color-primary)] hover:text-[var(--color-bg-base)] transition-all duration-300">')
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(new_content)
print("Done")
