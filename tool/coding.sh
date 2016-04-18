#!/bin/bash

#for i in {1..9}
#do
#  iconv -f windows-1252 -t utf-8 $i.htm -o utf8-$i.htm
#  mv utf8-$i.htm $i.htm
#done

#for i in {10..16}
#do
#  iconv -f windows-1252 -t utf-8 $i.htm -o utf8-$i.htm
#  mv utf8-$i.htm $i.htm
#done

#for i in {10..16}
#do
#  sed 's/windows-1252/UTF-8/' -i $i.htm
#done

#iconv -f windows-1252 -t utf-8 chap.htm -o tmp.html
#mv tmp.html chap.htm
#iconv -f windows-1252 -t utf-8 dedicat.htm -o tmp.html
#mv tmp.html dedicat.htm
#iconv -f windows-1252 -t utf-8 gloss.htm -o tmp.html
#mv tmp.html gloss.htm
#iconv -f windows-1252 -t utf-8 index.htm -o tmp.html
#mv tmp.html index.htm
#iconv -f windows-1252 -t utf-8 index.html -o tmp.html
#mv tmp.html index.html
#iconv -f windows-1252 -t utf-8 intro.htm -o tmp.html
#mv tmp.html intro.htm

sed 's/windows-1252/UTF-8/' -i chap.htm
sed 's/windows-1252/UTF-8/' -i dedicat.htm
sed 's/windows-1252/UTF-8/' -i gloss.htm
sed 's/windows-1252/UTF-8/' -i index.htm
sed 's/windows-1252/UTF-8/' -i index.html
sed 's/windows-1252/UTF-8/' -i intro.htm
