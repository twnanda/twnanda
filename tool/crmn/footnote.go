package main

import (
	"github.com/PuerkitoBio/goquery"
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

func (s *StateMachine) ProcessLine(line string) {
	if strings.HasPrefix(line, "備註") {
		s.State = InFootnote
	}

	if strings.HasPrefix(line, "資訊更新日期") {
		s.State = NotInFootnote
	}

	if s.State == InFootnote {
		s.FootnoteBody += (line + "\n")
	}
}

func ExtractFootnote(htmldoc *goquery.Document) {
	lines := StringToLines(htmldoc.Text())
	sm := NewStateMachine()
	for _, line := range lines {
		sm.ProcessLine(line)
	}
	print(sm.FootnoteBody)
}
