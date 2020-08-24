#!/usr/bin/env python
# -*- coding: utf-8 -*- #

# https://developers.google.com/closure/compiler/docs/api-tutorial1
# https://developers.google.com/closure/compiler/docs/api-tutorial2

allJS = ["tongwen_core.js", "tongwen_table_ps2t.js", "tongwen_table_pt2s.js", "tongwen_table_s2t.js", "tongwen_table_t2s.js", "notes.js", "nanda.js"]

def combineJS():
    js_code = ""
    for name in allJS:
        with open(name, 'r') as f:
            js_code += f.read()
    return js_code


if __name__ == "__main__":
    print(combineJS())
