export GOROOT=$(realpath ../../../go)
export GOPATH=$(realpath ..)
export PATH := $(GOROOT)/bin:$(GOPATH)/bin:$(PATH)

URL=http://nanda.online-dhamma.net/Tipitaka/Sutta/Majjhima/mn.047.contrast-reading.html
DOT:= .
DASH:= -
HTMLSUFFIX:= -html
RSTSUFFIX:= \%zh.rst
MNHTML:= $(subst $(DOT),$(DASH),$(notdir ${URL}))
MNRST:= ../../content/articles/tipitaka/sutta/majjhima/$(subst $(HTMLSUFFIX),$(RSTSUFFIX),$(MNHTML))


default:
	@echo "\033[92mProcessing ${URL}...\033[0m"
	@go run ../download.go -url=${URL}
	@go run parseCRMN.go html2rst.go rstmetadata.go readlines.go footnote.go -input=$(notdir ${URL}) -output=${MNRST}
	@cat ${MNRST} | less

footnote:
	@#sed -r 's/^〔註(0[0-9]{2})〕/.. [\1] /g' -i $(MNRST)
	@#sed -r 's/\[(0[0-9]{2})\]/[\1]_/g' -i $(MNRST)

website:
	@cd ../.. ; make

serve:
	@cd ../.. ; make serve

fmt:
	@echo "\033[92mGo fmt source code...\033[0m"
	@go fmt *.go
