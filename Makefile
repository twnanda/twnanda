PY?=python
PELICAN?=pelican
PELICANOPTS=

BASEDIR=$(CURDIR)
THEMEDIR=$(BASEDIR)/theme
CSSDIR=$(THEMEDIR)/static/css
JSDIR=$(THEMEDIR)/static/js
SCSSDIR=$(THEMEDIR)/styling
INPUTDIR=$(BASEDIR)/content
CACHEDIR=$(BASEDIR)/cache
OUTPUTDIR=$(BASEDIR)/output
AWSOUTPUTDIR=$(BASEDIR)/aws
NCKUOUTPUTDIR=$(BASEDIR)/ncku
PLUGINSDIR=$(BASEDIR)/plugins
CONFFILE=$(BASEDIR)/pelicanconf.py
PUBLISHCONF=$(BASEDIR)/publishconf.py
AWSPUBLISHCONF=$(BASEDIR)/awspublishconf.py
NCKUPUBLISHCONF=$(BASEDIR)/nckupublishconf.py


default: html serve

scss:
	[ -d $(CSSDIR) ] || mkdir -p $(CSSDIR)
	$(PY) -mscss < $(SCSSDIR)/style.scss -I $(SCSSDIR) -o $(CSSDIR)/style.css

js:
	[ -d $(JSDIR) ] || mkdir -p $(JSDIR)
	cd theme/javascript; $(PY) compile.py > $(JSDIR)/hushiah.js

html: scss
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

clean:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)
	[ ! -d $(CACHEDIR) ]  || rm -rf $(CACHEDIR)

serve:
ifdef PORT
	cd $(OUTPUTDIR) && $(PY) -m pelican.server $(PORT)
else
	cd $(OUTPUTDIR) && $(PY) -m pelican.server
endif

publish: js scss clean
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(PUBLISHCONF) $(PELICANOPTS)

aws: js scss clean
	$(PELICAN) $(INPUTDIR) -o $(AWSOUTPUTDIR) -s $(AWSPUBLISHCONF) $(PELICANOPTS)

ncku: js scss clean
	$(PELICAN) $(INPUTDIR) -o $(NCKUOUTPUTDIR) -s $(NCKUPUBLISHCONF) $(PELICANOPTS)

.PHONY: download scss html clean serve publish
