import os

# Get the root directory of the repository
root_directory = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Define the source and destination directories

destination_directory = os.path.join(root_directory, 'docs', 'source')
source_directory = root_directory

# Create the destination directory if it doesn't exist
if not os.path.exists(destination_directory):
    os.makedirs(destination_directory)

# Get the list of OFEP files in the source directory
ofep_files = [file for file in os.listdir(source_directory) if file.endswith('.md') and file.find('OFEP')!=-1]

# Generate the content for ofep_docs.rst
content = 'Welcome to OFEP-TESTING documentation \n========================================\n .. toctree::\n   :titlesonly:\n   :maxdepth: 1\n   :caption: OFEP Documentation\n\n   '
content += '\n   '.join([ofep_file[:-3] for ofep_file in ofep_files])
# Write the content to ofep_docs.rst in the output directory
output_file_path = os.path.join(destination_directory, 'index.rst')
with open(output_file_path, 'w') as file:
    file.write(content)

print(f"Generated {output_file_path}")
