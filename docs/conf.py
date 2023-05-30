# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
import os
import sys
sys.path.insert(0, os.path.abspath('.'))

project = 'ofep-testing'
copyright = '2023, Mihir Mittal'
author = 'Mihir Mittal'
release = '2'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

# extensions = ["myst_parser",
#   "sphinx_design",]

# myst_enable_extensions = [
#     "amsmath",
#     "colon_fence",
#     "deflist",
#     "dollarmath",
#     "fieldlist",
#     "html_admonition",
#     "html_image",
#     "linkify",
#     "replacements",
#     "smartquotes",
#     "strikethrough",
#     "substitution",
#     "tasklist",
# ]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'alabaster'
html_static_path = ['_static']
