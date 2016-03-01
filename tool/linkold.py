#!/usr/bin/env python
# -*- coding:utf-8 -*-

import os

def processFile(path):
  print("process " + path + " ...")
  tmpfilepath = os.path.join("/tmp", os.path.basename(path))
  with open(path, "r") as f, open(tmpfilepath, "w") as fo:
    # http://www.tutorialspoint.com/python/file_readlines.htm
    lines = f.readlines()
    for line in lines:
      if "舊網頁" in line:
        print(line)
      else:
        fo.write(line)

  print(tmpfilepath)


def processDir(rootDir):
  # http://www.tutorialspoint.com/python/os_walk.htm
  for root, dirs, files in os.walk(rootDir):
    for name in files:
      path = os.path.join(root, name)
      processFile(path)
      return


if __name__ == '__main__':
  # http://stackoverflow.com/questions/50499/how-do-i-get-the-path-and-name-of-the-file-that-is-currently-executing
  processDir(os.path.join(os.path.dirname(__file__), "../content/articles"))
