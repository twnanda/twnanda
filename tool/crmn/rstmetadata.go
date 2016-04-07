package main

import (
	"os"
	"text/template"
)

var rstMetadataTmpl = `{{.Title}}
################################################################################

:date: {{.Date}}
:modified: {{.Modified}}
:oldurl: {{.Oldurl}}
:tags: {{.Tags}}
:category: {{.Category}}
:summary: {{.Summary}}


`

type RstMetadata struct {
	Title    string
	Date     string
	Modified string
	Oldurl   string
	Tags     string
	Category string
	Summary  string
}

func writeRstMetadata(fRstOutput *os.File, title, path string) {
	meta := RstMetadata{
		Title:    title,
		Date:     "2012-04-22",
		Modified: "2012-09-02",
		Oldurl:   "http://nanda.online-dhamma.net/Tipitaka/Sutta/Majjhima/" + path,
		Tags:     "中部, 尼柯耶, Majjhima Nikāya",
		Category: "巴利三藏中部",
		Summary:  title,
	}

	tmpl := template.Must(template.New("rstmeta").Parse(rstMetadataTmpl))
	tmpl.Execute(fRstOutput, meta)
}
