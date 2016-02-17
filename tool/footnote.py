#!/usr/bin/env python
# -*- coding:utf-8 -*-

import re
import os

def findFootnote(filePath):
  with open(filePath, 'r') as f:
    for line in f:
      p = re.compile(r'\(12-[\d]{3}\)')
      notes = p.findall(line)
      if len(notes) > 0:
        print(notes)

def replaceFootnote(filePath, output):
  with open(filePath, 'r') as f:
    with open(output, 'w') as fo:
      for line in f:
        result = re.sub(r'\(12-([\d]{3})\)', r' [12-\1]_ ', line)
        fo.write(result)

def rstripFile(filePath, output):
  with open(filePath, 'r') as f:
    with open(output, 'w') as fo:
      for line in f:
        fo.write(line.rstrip() + '\n')

def replaceFootnote2(filePath, output):
  with open(filePath, 'r') as f:
    with open(output, 'w') as fo:
      for line in f:
        result = re.sub(r'〔註12-([\d]{3})〕', r'.. [12-\1]', line)
        fo.write(result)

if __name__ == '__main__':
  #findFootnote("../content/articles/2016/02/14/visuddhimagga-chap01%zh.rst")
  path = "../content/articles/2016/02/14/visuddhimagga-chap12%zh.rst"
  replaceFootnote(path, "tmp1.rst")
  rstripFile("tmp1.rst", "tmp2.rst")
  replaceFootnote2("tmp2.rst", os.path.basename(path))
  os.remove("tmp1.rst")
  os.remove("tmp2.rst")
