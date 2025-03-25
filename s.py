with open("data_fixed.json", "r", encoding="latin-1") as f:
    data = f.read()

with open("data_fixed_utf8.json", "w", encoding="utf-8") as f:
    f.write(data)

print("✅ File converted to UTF-8!")
