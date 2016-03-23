package main

import (
	"bufio"
	"flag"
	"fmt"
	"io"
	"os"
	"regexp"
	"strings"
)

var footnote = regexp.MustCompile("[0-9]{3}")
var footnote2 = regexp.MustCompile("^〔註[0-9]{3}〕")

func replaceFootnote(s string) string {
	return footnote.ReplaceAllStringFunc(s, func(str string) string {
		return "[" + str + "]_"
	})
}

func replaceFootnote2(s string) string {
	return footnote2.ReplaceAllStringFunc(s, func(str string) string {
		return ".. [" + str[6:9] + "] "
	})
}

func writeRst(lines []string, outpath string) {
	f, err := os.Create(outpath)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	rst := ""
	for _, line := range lines {
		trimmedLine := strings.TrimSpace(line)
		if len(trimmedLine) == 0 {
			rst += "|\n"
		} else {
			trimmedLine2 := replaceFootnote2(trimmedLine)
			if trimmedLine == trimmedLine2 {
				trimmedLine2 = replaceFootnote(trimmedLine)
			}
			rst = rst + "| " + trimmedLine2 + "\n"
		}
	}

	_, err = io.Copy(f, strings.NewReader(rst))
	if err != nil {
		panic(err)
	}
}

func File2lines(filePath string) []string {
	f, err := os.Open(filePath)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	var lines []string
	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	if err := scanner.Err(); err != nil {
		fmt.Fprintln(os.Stderr, err)
	}

	return lines
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

	writeRst(File2lines(path), outpath)
}
