===============
How to Develope
===============

.. image:: https://travis-ci.org/twnanda/twnanda.png?branch=master
    :target: https://travis-ci.org/twnanda/twnanda

.. See how to add travis ci image from https://raw.githubusercontent.com/demizer/go-rst/master/README.rst
   https://github.com/demizer/go-rst/commit/9651ab7b5acc997ea2751845af9f2d6efee825df

Development Tool: `pelican <http://blog.getpelican.com/>`_ (static site generator written in Python)

Development Environment: `Ubuntu 15.10 <http://releases.ubuntu.com/15.10/>`_


First-time Setup
----------------

1. Install `git <http://git-scm.com/>`_ and `pip <https://pypi.python.org/pypi/pip>`_:

.. code-block:: bash

    $ sudo apt-get install git
    $ sudo apt-get install python-pip

2. git clone source code:

.. code-block:: bash

    $ cd
    $ mkdir dev
    $ cd ~/dev/
    $ git clone https://github.com/twnanda/twnanda.git

3. Install Python tools:

.. code-block:: bash

    $ cd ~/dev/twnanda/
    $ sudo pip install -r requirements.txt

4. Generate CSS/JS file:

.. code-block:: bash

    $ cd ~/dev/twnanda/
    $ make scss
    $ make js

5. Install language packages to add locale (Traditional Chinese):

.. code-block:: bash

    $ sudo apt-get install language-pack-zh-hant


Daily Development
-----------------

.. code-block:: bash

    # start edit and develope
    $ cd ~/dev/twnanda/
    # If something changes, re-generate the website:
    $ make html
    # start dev server
    $ make serve
    # open your browser and preview the website at http://localhost:8000/


References
----------

- `7. 附录：轻量级标记语言 — GotGitHub <http://www.worldhello.net/gotgithub/appendix/markups.html>`_
  (`GitHub <https://github.com/gotgit/gotgithub/blob/master/appendix/markups.rst>`__)
