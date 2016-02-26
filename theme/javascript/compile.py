#!/usr/bin/env python
# -*- coding: utf-8 -*- #

# https://developers.google.com/closure/compiler/docs/api-tutorial1
# https://developers.google.com/closure/compiler/docs/api-tutorial2
import httplib, urllib

allJS = ["nanda.js"]

def combineJS():
    js_code = ""
    for name in allJS:
        with open(name, 'r') as f:
            js_code += f.read()
    return js_code


def online_compile(js_code):
    # Define the parameters for the POST request and encode them in
    # a URL-safe format.

    params = urllib.urlencode([
        ('code_url', 'https://github.com/twnanda/twnanda/raw/master/theme/javascript/tongwen_core.js'),
        ('code_url', 'https://github.com/twnanda/twnanda/raw/master/theme/javascript/tongwen_table_ps2t.js'),
        ('code_url', 'https://github.com/twnanda/twnanda/raw/master/theme/javascript/tongwen_table_pt2s.js'),
        ('code_url', 'https://github.com/twnanda/twnanda/raw/master/theme/javascript/tongwen_table_s2t.js'),
        ('code_url', 'https://github.com/twnanda/twnanda/raw/master/theme/javascript/tongwen_table_t2s.js'),
        ('js_code', js_code),
        ('compilation_level', 'SIMPLE_OPTIMIZATIONS'),
        ('language', 'ECMASCRIPT5'),
        ('output_format', 'text'),
        ('output_info', 'compiled_code'),
#        ('output_info', 'errors'),
    ])

    # Always use the following value for the Content-type header.
    headers = { "Content-type": "application/x-www-form-urlencoded" }
    conn = httplib.HTTPConnection('closure-compiler.appspot.com')
    conn.request('POST', '/compile', params, headers)
    response = conn.getresponse()
    print(response.read())
    conn.close()


if __name__ == "__main__":
    online_compile(combineJS())
