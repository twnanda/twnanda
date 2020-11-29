如何在Windows系統上開發
=======================

.. image:: https://github.com/twnanda/twnanda/workflows/Pelican%20site%20CI/badge.svg
    :target: https://github.com/twnanda/twnanda/actions

第一次安裝
----------

1. 安裝 Cygwin_ （ `64位元安裝檔 <http://cygwin.com/setup-x86_64.exe>`_ ）

   安裝時，請將 **Python** 以及 **Devel** 選成 *Install* （不要選 *Default* ）

2. 安裝須花頗多時間，完成後，在桌面建立一個 Cygwin Terminal 的捷徑。

3. 點擊捷徑進入 Cygwin Terminal，進入後先檢查 Python_ 以及 git_ 是否安裝成功。

   先檢查 Python_ ：

   .. code-block:: bash

     $ python -V

   如果成功會看到 Python_ 的版本號碼。

   接著檢查 git_ ：

   .. code-block:: bash

     $ git --version

   如果成功會看到 git_ 的版本號碼。
   接著設定user名稱跟email：

   .. code-block:: bash

     $ git config --global user.name "twnanda"
     $ git config --global user.email "tw.nanda@gmail.com"

3. 安裝 pip_ [2]_ ：

   .. code-block:: bash

     $ easy_install-2.7 pip

4. 進入D槽，建立github資料夾：

   .. code-block:: bash

     $ cd /cygdrive/d/
     $ mkdir github

5. 進入剛剛建立的github資料夾，把網站原始碼從GitHub上clone下來：

   .. code-block:: bash

     $ cd /cygdrive/d/github/
     $ git clone https://github.com/twnanda/twnanda.git

6. 進入原始碼目錄，用 pip_ 安裝需要的 Python 套件：

   .. code-block:: bash

     $ cd /cygdrive/d/github/twnanda
     $ pip install -r requirements.txt

7. 產生 JavaScript 及 CSS 檔

   .. code-block:: bash

     $ cd /cygdrive/d/github/twnanda
     $ make js
     $ make scss

8. 產生整個網站：

   .. code-block:: bash

     $ cd /cygdrive/d/github/twnanda
     $ make

   打開 `http://localhost:8000/ <http://localhost:8000/>`_ 可看產生的網站。


日常開發
--------

進入原始碼目錄修改或新增檔案，完成後

.. code-block:: bash

  $ cd /cygdrive/d/github/twnanda
  $ make
  # 此時打開瀏覽器(chrome, firefox, ...)，拜訪網址：
  # http://localhost:8000/
  # 確認是否正確。

  # 觀看還未加入的修改
  $ git status
  # 加入修改
  $ git add ...
  # 確認修改
  $ git commit -m "..."
  # 整合別人的修改
  $ git pull
  # 上傳修改到GitHub
  $ git push
  # 接著git會問帳號密碼，請輸入你的帳號密碼


=================================
Cygwin installation & Run Cygwin
=================================

1. | cygwin installation
   | necessary package: Devel, Python
2. python -V
3. devel -V
4. git -- version
5. easy-install-2.7 pip
6. cd d:

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. | click cygwin icon
   |  (cygwin window)

2.  cd /cygdrive/d/github/twnanda

3. make

4. open chrome (or firefox, ..., )

5. url: http://localhost:8000

6. make

   | make serve
   | (if no update)
   |

7. | git status
   | (red on file not added yet)
   |

8. | git add dir/file
   | (e.g. content/articles/tipitaka/sutta/khuddaka/dhammapada)

9. git status

10. | git commit -m ""
    | "remark what is added, changed, etc."

11. git status

12. | git push
    | upload github server


How to Develope (Ubuntu Linux)
==============================

.. See how to add travis ci image from https://raw.githubusercontent.com/demizer/go-rst/master/README.rst
   https://github.com/demizer/go-rst/commit/9651ab7b5acc997ea2751845af9f2d6efee825df

Development Tool: `pelican <http://blog.getpelican.com/>`_ (static site generator written in Python)

Development Environment: `Ubuntu 15.10 <http://releases.ubuntu.com/15.10/>`_


First-time Setup
----------------

1. Install git_ and pip_:

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

.. [1] `7. 附录：轻量级标记语言 — GotGitHub <http://www.worldhello.net/gotgithub/appendix/markups.html>`_
       (`GitHub <https://github.com/gotgit/gotgithub/blob/master/appendix/markups.rst>`__)

.. [2] `python - Installing Pip-3.2 on Cygwin - Stack Overflow <http://stackoverflow.com/questions/18641438/installing-pip-3-2-on-cygwin>`_

.. _Cygwin: https://www.cygwin.com/
.. _Python: https://www.python.org/
.. _git: https://git-scm.com/
.. _pip: https://pypi.python.org/pypi/pip
