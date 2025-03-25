import json

file_path = "data_fixed.json"  # Change this if needed

try:
    with open(file_path, "r", encoding="utf-8") as f:
        json.load(f)
    print("✅ JSON is valid!")
except json.JSONDecodeError as e:
    print("❌ JSON Error:", e)
