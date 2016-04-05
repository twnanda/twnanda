export GOROOT=$(realpath ../../../go)
export GOPATH=$(realpath ..)
export PATH := $(GOROOT)/bin:$(GOPATH)/bin:$(PATH)

URL=http://nanda.online-dhamma.net/Tipitaka/Sutta/Majjhima/mn.004.contrast-reading.html
MNHTML=/tmp/$(notdir ${URL})

default:
	@echo "\033[92mProcessing ${URL}...\033[0m"
	@go run ../download.go -url=${URL}
	@go run parseCRMN.go -input=$(notdir ${URL}) -output=${MNHTML}
	@cat ${MNHTML}

fmt:
	@echo "\033[92mGo fmt source code...\033[0m"
	@go fmt *.go
