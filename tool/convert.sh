#!/bin/bash
# Google Search: bash read arguments
# Google Search: bash dos to unix
# Google Search: bash append newline to end of file
# Google Search:
# Google Search:

echo "$1: big5 to utf-8"
iconv -f big5 -t utf-8 $1 > tmp.html
mv tmp.html $1
echo "$1: removing dos newline"
tr -d '\015' <$1 > tmp.html
mv tmp.html $1
echo "$1: html meta big5 to UTF-8"
sed 's/big5/UTF-8/' -i $1
echo "$1: append newline to end of file"
sed -i -e '$a\' $1
