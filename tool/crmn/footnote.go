package main

import (
	"github.com/PuerkitoBio/goquery"
	"golang.org/x/net/html"
	"strings"
)

const (
	InFootnote = iota
	NotInFootnote
)

type StateMachine struct {
	State        int
	FootnoteBody string
}

func NewStateMachine() *StateMachine {
	return &StateMachine{
		State: NotInFootnote,
	}
}

func (s *StateMachine) ProcessNode(node *html.Node) {
	if node.Type == html.ElementNode && node.Data == "a" {
		href := ""
		for _, a := range node.Attr {
			if a.Key == "href" {
				href = strings.TrimSpace(a.Val)
				if href == "www.chilin.org" {
					href = "http://www.chilin.org/"
				}
				break
			}
		}

		// check if has only one child
		if node.FirstChild != node.LastChild {
			panic("link with more than one child")
		}

		linkText := strings.TrimSpace(node.FirstChild.Data)

		rstLink := " `" + linkText + " <" + href + ">`_ "

		if strings.HasPrefix(href, "#") {
			s.FootnoteBody += linkText
		} else {
			s.FootnoteBody += rstLink
		}
		return
	}

	if node.Type == html.TextNode {
		s.FootnoteBody += node.Data
		return
	} else if node.FirstChild != nil {
		for c := node.FirstChild; c != nil; c = c.NextSibling {
			s.ProcessNode(c)
		}
	}
}

func (s *StateMachine) ProcessSelection(sl *goquery.Selection) {
	if strings.HasPrefix(sl.Text(), "備註") {
		s.State = InFootnote
	}

	if strings.HasPrefix(sl.Text(), "資訊更新日期") {
		s.State = NotInFootnote
	}

	if s.State == InFootnote {
		if sl.Size() != 1 {
			panic("element size is not 1")
		}
		s.ProcessNode(sl.Nodes[0])
	}
}

func ExtractFootnote(htmldoc *goquery.Document) string {
	sm := NewStateMachine()

	htmldoc.Find("html body").Contents().Each(func(_ int, sl *goquery.Selection) {
		sm.ProcessSelection(sl)
	})

	print(sm.FootnoteBody)
	return sm.FootnoteBody
}
