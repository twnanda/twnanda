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

	// rst metadata
	title := doc.Find("title").Text()
	fmt.Fprintf(fo, title + "\n")
	fmt.Fprintf(fo, "########################################################################\n")
	fmt.Fprintf(fo, "\n")
	fmt.Fprintf(fo, ":date: 2012-04-22\n")
	fmt.Fprintf(fo, ":modified: 2012-09-02\n")
	fmt.Fprintf(fo, ":oldurl: http://nanda.online-dhamma.net/Tipitaka/Sutta/Majjhima/" + path + "\n")
	fmt.Fprintf(fo, ":tags: 中部, 尼柯耶, Majjhima Nikāya\n")
	fmt.Fprintf(fo, ":category: 巴利三藏中部\n")
	fmt.Fprintf(fo, ":summary: " + title + "\n")
	fmt.Fprintf(fo, "\n\n")
	fmt.Fprintf(fo, "本對讀包含下列數個版本，請自行勾選欲對讀之版本：\n\n")
	fmt.Fprintf(fo, ".. raw:: html\n\n")
	fmt.Fprintf(fo, "  <div id=\"option-contrast-reading\"></div>\n\n")
	fmt.Fprintf(fo, "----\n\n")


	doc.Find("table").Each(func(i int, table *goquery.Selection) {
		fmt.Fprintf(fo, ".. list-table:: \n")
		fmt.Fprintf(fo, "   :widths: 15 75\n")
		fmt.Fprintf(fo, "   :header-rows: 0\n")
		fmt.Fprintf(fo, "   :class: contrast-reading-table\n\n")
		table.Find("tr").Each(func(i2 int, tr *goquery.Selection) {
			processTr(tr, fo)
		})
		fmt.Fprintf(fo, "\n\n")
		fmt.Fprintf(fo, "|\n|\n\n")
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
