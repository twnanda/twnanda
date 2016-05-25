export GOROOT=$(realpath ../../../go)
export GOPATH=$(realpath ./crmn/)
export PATH := $(GOROOT)/bin:$(GOPATH)/bin:$(PATH)


default:
	@echo "\033[92mIterating HTML and extracting links to rst ...\033[0m"
	@go test -v

fmt:
	@echo "\033[92mGo fmt source code ...\033[0m"
	@go fmt *.go
