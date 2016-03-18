export GOROOT=$(realpath ../../go)
export GOPATH=$(realpath .)
export PATH := $(GOROOT)/bin:$(GOPATH)/bin:$(PATH)

URL=http://nanda.online-dhamma.net/Tipitaka/Sutta/Khuddaka/Dhammapada/DhP_Story016.htm

default:
	@echo "\033[92mProcessing ${URL}...\033[0m"
	@go run download.go -url=${URL}

fmt:
	@echo "\033[92mGo fmt source code...\033[0m"
	@go fmt *.go

install:
	@echo "\033[92mInstalling packages ...\033[0m"
	go get -u github.com/djimenez/iconv-go
	go get -u github.com/PuerkitoBio/goquery
