package main

import (
	"bufio"
	"flag"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"os"
	"strings"
)

func StringToLines(s string) []string {
	var lines []string

	scanner := bufio.NewScanner(strings.NewReader(s))
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		fmt.Fprintln(os.Stderr, "reading standard input:", err)
	}

	return lines
}

func rstListTablePrefixOfEachLine(indexOfTd, indexOfLine int) string {
	if indexOfTd == 0 {
		if indexOfLine == 0 {
			return "   * - "
		} else {
			return "       "
		}
	} else {
		if indexOfLine == 0 {
			return "     - "
		} else {
			return "       "
		}
	}
}

func processTr(tr *goquery.Selection, fo *os.File) {
	tr.Find("td").Each(func(indexOfTd int, td *goquery.Selection) {
		lines := StringToLines(td.Text())
		for indexOfLine, line := range lines {
			line = strings.TrimSpace(line)
			fmt.Fprintf(fo, rstListTablePrefixOfEachLine(indexOfTd, indexOfLine))
			fmt.Fprintf(fo, line)
			fmt.Fprintf(fo, "\n")
		}
	})
}

func parseCRMN(path, outpath string) {
	fmt.Println("Parsing " + path + " ...")

	f, err := os.Open(path)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	doc, err := goquery.NewDocumentFromReader(f)
	if err != nil {
		panic(err)
	}

	fo, err := os.Create(outpath)
	if err != nil {
		panic(err)
	}
	defer fo.Close()

	doc.Find("table").Each(func(i int, table *goquery.Selection) {
		fmt.Fprintf(fo, ".. list-table::\n\n")
		table.Find("tr").Each(func(i2 int, tr *goquery.Selection) {
			processTr(tr, fo)
		})
		fmt.Fprintf(fo, "\n\n")
	})
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
