# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html
import os
import sys

# -- Path setup --------------------------------------------------------------
# project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
# sys.path.insert(0, project_root)

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

# Now import the module
# import ofep_sphinx_extension


# -- Project information -----------------------------------------------------
project = 'OFEP-TESTING'
copyright = '2023, Mihir Mittal'
author = 'Mihir Mittal'
release = '1'

# ...

# -- Extension setup ---------------------------------------------------------
extensions = [
    "sphinx.ext.duration",
    "sphinx.ext.doctest",
    "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    "sphinx.ext.intersphinx",
    "myst_parser",
    # 'ofep_sphinx_extension.ofep_extension',
]
# -- Custom script execution -------------------------------------------------
# copy_files_path = os.path.join(parent_dir,'docs', 'copy_files.py')  # Update this path
index_gen_path = os.path.join(parent_dir,'docs', 'index_gen.py')  # Update this path
copy_files_path = os.path.join(parent_dir,'docs', 'copy_files.py')  # Update this path
generate_ofep_docs_path = os.path.join(parent_dir,'docs', 'generate_ofep_docs_rst.py')  # Update this path

if not os.path.exists('_build'):
    os.makedirs('_build')

python_executable = '/bin/python3'  # Replace with the full path to the Python interpreter
os.system(f'{python_executable} {copy_files_path}')
os.system(f'{python_executable} {index_gen_path}')
os.system(f'{python_executable} {copy_files_path}')
os.system(f'{python_executable} {generate_ofep_docs_path}')

# -- Other settings ----------------------------------------------------------
# ...


# Rest of your conf.py file...


# Configuration options...

# Rest of your conf.py file...


# You can add more shutil.copy lines for other files or directories


# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration



templates_path = ['_templates']
exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
# html_static_path = ['_static']
