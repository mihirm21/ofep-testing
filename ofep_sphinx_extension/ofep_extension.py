import os
import shutil
import sphinx

def setup(app):
    app.connect("builder-inited", run_scripts)

def run_scripts(app):
    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    docs_dir = os.path.join(project_root, 'docs')

    # Path to the scripts
    copy_files_script = os.path.join(docs_dir, 'copy_files.py')
    index_gen_script = os.path.join(docs_dir, 'index_gen.py')
    copy_files_script = os.path.join(docs_dir, 'copy_files.py')
    generate_ofep_docs_rst_script = os.path.join(docs_dir, 'generate_ofep_docs_rst.py')
    

    # Destination directory for copying scripts
    output_dir = os.path.join(app.outdir, '_static')

    # Copy the scripts to the output directory
    shutil.copy(index_gen_script, output_dir)
    shutil.copy(generate_ofep_docs_rst_script, output_dir)
    shutil.copy(copy_files_script, output_dir)
