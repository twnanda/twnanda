#!/usr/bin/env python
# -*- coding:utf-8 -*-

import re
import os

def findFootnote(filePath):
  with open(filePath, 'r') as f:
    for line in f:
      p = re.compile(r'\(04-[\d]{3}\)')
      notes = p.findall(line)
      if len(notes) > 0:
        print(notes)

def replaceFootnote(filePath, output):
  with open(filePath, 'r') as f:
    with open(output, 'w') as fo:
      for line in f:
        result = re.sub(r'\(04-([\d]{3})\)', r' [04-\1]_ ', line)
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
        result = re.sub(r'〔註04-([\d]{3})〕', r'.. [04-\1]', line)
        fo.write(result)

if __name__ == '__main__':
  #findFootnote("../content/articles/2016/02/14/visuddhimagga-chap01%zh.rst")
  path = "../content/articles/2016/02/14/visuddhimagga-chap04%zh.rst"
  #replaceFootnote(path, os.path.basename(path))
  #rstripFile(path, os.path.basename(path))
  replaceFootnote2(path, os.path.basename(path))
