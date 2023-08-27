import os
import shutil

# Get the root directory of the repository
root_directory = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Define the source and destination directories
source_directory = root_directory
destination_directory = os.path.join(root_directory, 'docs', 'source')

# Create the destination directory if it doesn't exist
if not os.path.exists(destination_directory):
    os.makedirs(destination_directory)

for filename in os.listdir(destination_directory):
    if filename=='OFEP_Index.md':
        source_file_path = os.path.join(destination_directory, filename)
        destination_file_path = os.path.join(source_directory, filename)
        if os.path.exists(destination_file_path):
            os.remove(destination_file_path)
        shutil.copy2(source_file_path, destination_file_path)
        print(f"Copied {source_file_path} to {destination_file_path}")

# Iterate through the files in the root directory
for filename in os.listdir(source_directory):
    if filename.endswith('.md'):
        source_file_path = os.path.join(source_directory, filename)
        destination_file_path = os.path.join(destination_directory, filename)
        if os.path.exists(destination_file_path):
            os.remove(destination_file_path)
        shutil.copy2(source_file_path, destination_file_path)
        print(f"Copied {source_file_path} to {destination_file_path}")

print("Copying completed.")
