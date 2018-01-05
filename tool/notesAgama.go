package main

import (
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"strconv"
	"strings"
)

func GetNotes(url string) {
	doc, err := goquery.NewDocument(url)
	if err != nil {
		panic(err)
	}

	notes := doc.Find("div[id]")
	notes.Each(func(i int, s *goquery.Selection) {
		id, ok := s.Attr("id")
		if !ok {
			panic(i)
		}
		fmt.Print(`"`)
		fmt.Print(id)
		fmt.Print(`": "`)
		n := strings.Replace(s.Text(), `"`, `\"`, -1)
		fmt.Print(n)
		fmt.Println(`",`)
	})
}

func main() {
	tmp := "http://agama.buddhason.org/note/note{NUM}.htm"

	for i := 0; i <= 9; i++ {
		num := strconv.Itoa(i)
		url := strings.Replace(tmp, "{NUM}", num, 1)
		GetNotes(url)
	}
}
