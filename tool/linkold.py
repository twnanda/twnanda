#!/usr/bin/env python
# -*- coding:utf-8 -*-

import os
import re

oldlink = re.compile('<http.+>')

def processFile(path):
  print("process " + path + " ...")
  tmpfilepath = os.path.join("/tmp", os.path.basename(path))
  with open(path, "r") as f, open(tmpfilepath, "w") as fo:
    # http://www.tutorialspoint.com/python/file_readlines.htm
    lines = f.readlines()
    insertAt = 0
    oldurl = ""
    for index, line in enumerate(lines):
      if ":tags:" in line:
        insertAt = index
      if "舊網頁" in line:
        result = oldlink.findall(line)
        oldurl = result[0][1:-1]

    assert insertAt != 0
    assert oldurl != ""
    # http://www.tutorialspoint.com/python/list_insert.htm
    # http://stackoverflow.com/questions/10507230/insert-line-at-middle-of-file-with-python
    # http://stackoverflow.com/questions/11968998/remove-lines-that-contain-certain-string
    lines.insert(insertAt, ":oldurl: " + oldurl + "\n")
    fo.writelines(lines)

  with open(tmpfilepath, "r") as f, open(path, "w") as fo:
    fo.write(f.read())


def processDir(rootDir):
  # http://www.tutorialspoint.com/python/os_walk.htm
  for root, dirs, files in os.walk(rootDir):
    for name in files:
      path = os.path.join(root, name)
      processFile(path)


if __name__ == '__main__':
  # http://stackoverflow.com/questions/50499/how-do-i-get-the-path-and-name-of-the-file-that-is-currently-executing
  processDir(os.path.join(os.path.dirname(__file__), "../content/articles"))
