#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

SITEURL = '//nanda.online-dhamma.net'
# original for github: SITEURL = '//nanda.online-dhamma.net'
# test SITEURL = '' ; SITEURL = 'output' ; SITEURL = '/output' : e.g., all <a class="reference external" href="/a-path-to-freedom/biography-of-the-Buddha-masutani-excerpts/

RELATIVE_URLS = False

FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DELETE_OUTPUT_DIRECTORY = True

# Following items are often useful when publishing

#DISQUS_SITENAME = ""
GOOGLE_ANALYTICS = "UA-77184712-1"
