# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html
import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

# -- Project information -----------------------------------------------------
project = 'OFEP-TESTING'
copyright = '2023, Mihir Mittal'
author = 'Mihir Mittal'
release = '1'

# -- Extension setup ---------------------------------------------------------
extensions = [
    "sphinx.ext.duration",
    "sphinx.ext.doctest",
    "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    "sphinx.ext.intersphinx",
    "myst_parser",
]
# -- Custom script execution -------------------------------------------------
index_gen_path = os.path.join(parent_dir,'docs', 'index_gen1.py') 
copy_files_path = os.path.join(parent_dir,'docs', 'copy_files.py') 

if not os.path.exists('_build'):
    os.makedirs('_build')

python_executable = '/bin/python3'
os.system(f'{python_executable} {copy_files_path}')
os.system(f'{python_executable} {index_gen_path}')


source_suffix = ['.rst', '.md']


templates_path = ['_templates']
exclude_patterns = []

html_theme = 'sphinx_rtd_theme'
