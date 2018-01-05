export GOROOT=$(realpath ../../go)
export GOPATH=$(realpath .)
export PATH := $(GOROOT)/bin:$(GOPATH)/bin:$(PATH)

URL=http://nanda.online-dhamma.net/Tipitaka/Sutta/Digha/dn.16-SiuSK.html
UTF8HTML=/tmp/utf8-$(notdir ${URL})


notes: fmt
	@echo "\033[92mProcessing notes from http://agama.buddhason.org ...\033[0m"
	@go run notesAgama.go

parse:
	@go run parseSiuSK.go -input=tmp.txt -output=out.txt

default:
	@echo "\033[92mProcessing ${URL}...\033[0m"
	@go run download.go -url=${URL}
	@go run big5ToUTF8.go -input=$(notdir ${URL}) -output=${UTF8HTML}

fmt:
	@echo "\033[92mGo fmt source code...\033[0m"
	@go fmt *.go

install:
	@echo "\033[92mInstalling packages ...\033[0m"
	go get -u github.com/djimenez/iconv-go
	go get -u github.com/PuerkitoBio/goquery
