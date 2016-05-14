#!/bin/bash

# $1 is the directory in which files to be processed
for path in $(find $1 -type f)
do
  chmod -x ${path}
done
