import os
import re

# Define a function to parse frontmatter data
def parse_frontmatter(md_content):
    frontmatter = {}
    match = re.match(r'---(.*?)---', md_content, re.DOTALL)
    if match:
        frontmatter_text = match.group(1)
        lines = frontmatter_text.strip().split('\n')
        for line in lines:
            key, value = map(str.strip, line.split(':', 1))
            frontmatter[key] = value
    return frontmatter

# Initialize data structures to store categorized OFEPs
status_to_ofeps = {
    'Active': [],
    'Draft': [],
    'Rejected': [],
    'Withdrawn': [],
    'Approved': []
}

# Get the directory of the script
script_directory = os.path.dirname(__file__)
script_directory = os.path.join(script_directory, 'source')

# Iterate through the files in the script's directory
index_content = "# OFEP Index\n"

for filename in os.listdir(script_directory):
    if filename.endswith('.md'):
        with open(os.path.join(script_directory, filename), 'r') as file:
            md_content = file.read()
            frontmatter = parse_frontmatter(md_content)
            ofep_status = frontmatter.get('status', 'Unknown')

            if ofep_status in status_to_ofeps:
                authors_list = ', '.join([author.strip() for author in re.findall(r'\[(.*?)\]', frontmatter.get('authors', ''))])
                tags_list = ', '.join([tag.strip() for tag in re.findall(r'\[(.*?)\]', frontmatter.get('tags', ''))])
                status_to_ofeps[ofep_status].append((int(frontmatter['OFEP']), frontmatter['title'], authors_list, tags_list, filename))

# Sort OFEPs in each category by OFEP number
for status, ofeps in status_to_ofeps.items():
    status_to_ofeps[status] = sorted(ofeps, key=lambda x: x[0])

# Generate the index content with the table
index_content += "\n"

for status, ofeps in status_to_ofeps.items():
    index_content += f"## {status}\n\n"
    index_content += "| OFEP Number | Title | Authors | Tags |\n"
    index_content += "|-------------|-------|---------|------|\n"
    
    for ofep_number, title, authors_list, tags_list, filename in ofeps:
        index_content += f"| [{ofep_number}]({filename}) | {title} | {authors_list} | {tags_list} |\n"
        
    index_content += "\n"

# Write the index to a file
index_path = os.path.join(script_directory, 'OFEP_Index.md')
if os.path.exists(index_path):
    os.remove(index_path)
with open(index_path, 'w') as index_file:
    index_file.write(index_content)

print(f"Index generated successfully at {index_path}.")
