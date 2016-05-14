#!/bin/bash
# Google Search: bash read arguments
# Google Search: bash dos to unix
# Google Search: bash append newline to end of file

# $1 is the directory in which files to be processed
for path in $(find $1 -type f)
do
  echo -e "\033[92mProcessing ${path} ...\033[0m"
  # big5 to utf8
  iconv -f big5 -t utf-8 ${path} > tmp.html
  if [ $? -ne 0 ]; then
    # fail to convert big5 to UTF-8
    continue
  fi
  mv tmp.html ${path}

  # remove dos newline
  tr -d '\015' <${path} > tmp.html
  mv tmp.html ${path}

  # html meta big5 to UTF-8
  sed 's/big5/UTF-8/' -i ${path}

  # append newline to end of file
  sed -i -e '$a\' ${path}
done
