package main

import (
	"flag"
	"fmt"
	"os"
)

func parseCRMN(path, outpath string) {
	fmt.Println("Parsing " + path + " ...")

	f, err := os.Open(path)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	fo, err := os.Create(outpath)
	if err != nil {
		panic(err)
	}
	defer fo.Close()

	html2rst(f, fo, path)
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
	parseCRMN(path, outpath)
	fmt.Println(outpath + " saved")
}
