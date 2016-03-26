package main

import (
	"flag"
	"fmt"
	iconv "github.com/djimenez/iconv-go"
	"io"
	"os"
)

func big5ToUTF8(path, outpath string) {
	fmt.Println("Converting " + path + " from Big5 to UTF-8 ...")

	f, err := os.Open(path)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	reader, err := iconv.NewReader(f, "big5", "utf-8")
	if err != nil {
		panic(err)
	}

	fo, err := os.Create(outpath)
	if err != nil {
		panic(err)
	}
	defer fo.Close()

	io.Copy(fo, reader)
}

func main() {
	pPath := flag.String("input", "", "Path of file to be processed")
	pOutpath := flag.String("output", "", "Output path of processed file")
	flag.Parse()
	path := *pPath
	outpath := *pOutpath
	if path == "" || outpath == "" {
		fmt.Fprintf(os.Stderr, "Error: empty path!\n")
		return
	}
	big5ToUTF8(path, outpath)
	fmt.Println(outpath + " saved")
}
