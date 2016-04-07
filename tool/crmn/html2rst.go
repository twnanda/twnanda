package main

import (
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"os"
	"strings"
)

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

func processTr(tr *goquery.Selection, fRstOutput *os.File) {
	tr.Find("td").Each(func(indexOfTd int, td *goquery.Selection) {
		lines := StringToLines(td.Text())
		for indexOfLine, line := range lines {
			line = strings.TrimSpace(line)
			fmt.Fprintf(fRstOutput, rstListTablePrefixOfEachLine(indexOfTd, indexOfLine))
			fmt.Fprintf(fRstOutput, line)
			fmt.Fprintf(fRstOutput, "\n")
		}
	})
}

func html2rst(fHtmlInput, fRstOutput *os.File, path string) {
	doc, err := goquery.NewDocumentFromReader(fHtmlInput)
	if err != nil {
		panic(err)
	}

	title := doc.Find("title").Text()
	writeRstMetadata(fRstOutput, title, path)

	fmt.Fprintf(fRstOutput, "本對讀包含下列數個版本，請自行勾選欲對讀之版本：\n\n")
	fmt.Fprintf(fRstOutput, ".. raw:: html\n\n")
	fmt.Fprintf(fRstOutput, "  <div id=\"option-contrast-reading\"></div>\n\n")
	fmt.Fprintf(fRstOutput, "----\n\n")

	doc.Find("table").Each(func(i int, table *goquery.Selection) {
		fmt.Fprintf(fRstOutput, ".. list-table:: \n")
		fmt.Fprintf(fRstOutput, "   :widths: 15 75\n")
		fmt.Fprintf(fRstOutput, "   :header-rows: 0\n")
		fmt.Fprintf(fRstOutput, "   :class: contrast-reading-table\n\n")
		table.Find("tr").Each(func(i2 int, tr *goquery.Selection) {
			processTr(tr, fRstOutput)
		})
		fmt.Fprintf(fRstOutput, "\n\n")
		fmt.Fprintf(fRstOutput, "|\n|\n\n")
	})
}
