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
NCKUOUTPUTDIR=$(BASEDIR)/ncku
PLUGINSDIR=$(BASEDIR)/plugins
CONFFILE=$(BASEDIR)/pelicanconf.py
PUBLISHCONF=$(BASEDIR)/publishconf.py
NCKUPUBLISHCONF=$(BASEDIR)/nckupublishconf.py

WEBSITECSS=$(CSSDIR)/style.css

default: html serve

scss:
	[ -d $(CSSDIR) ] || mkdir -p $(CSSDIR)
	$(PY) -mscss < $(SCSSDIR)/style.scss -I $(SCSSDIR) -o $(WEBSITECSS)

js:
	[ -d $(JSDIR) ] || mkdir -p $(JSDIR)
	cd theme/javascript; $(PY) compile.py > $(JSDIR)/hushiah.js

html: scss
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)

pdf:
	bash tool/html2pdf.sh $(OUTPUTDIR) $(WEBSITECSS)

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
	bash tool/html2pdf.sh $(OUTPUTDIR) $(WEBSITECSS)

ncku: js scss clean
	$(PELICAN) $(INPUTDIR) -o $(NCKUOUTPUTDIR) -s $(NCKUPUBLISHCONF) $(PELICANOPTS)
	bash tool/html2pdf.sh $(OUTPUTDIR) $(WEBSITECSS)

.PHONY: download scss html clean serve publish
