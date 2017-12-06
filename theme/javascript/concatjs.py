#!/usr/bin/env python
# -*- coding: utf-8 -*- #

import os

def concatJS(dirpath):
    combinedJS = ""
    for filename in os.listdir(dirpath):
        if filename.endswith(".js"):
            filepath = os.path.join(dirpath, filename)
            #print("combining " + filepath + " ...")
            with open(filepath, "r") as f:
                combinedJS += f.read()

    return combinedJS


if __name__ == "__main__":
    print(concatJS("."))
    #concatJS(".")
