package main

import (
	"fmt"
	"os"
)

func writeRstMetadata(fRstOutput *os.File, title, path string) {
	fmt.Fprintf(fRstOutput, title+"\n")
	fmt.Fprintf(fRstOutput, "########################################################################\n")
	fmt.Fprintf(fRstOutput, "\n")
	fmt.Fprintf(fRstOutput, ":date: 2012-04-22\n")
	fmt.Fprintf(fRstOutput, ":modified: 2012-09-02\n")
	fmt.Fprintf(fRstOutput, ":oldurl: http://nanda.online-dhamma.net/Tipitaka/Sutta/Majjhima/"+path+"\n")
	fmt.Fprintf(fRstOutput, ":tags: 中部, 尼柯耶, Majjhima Nikāya\n")
	fmt.Fprintf(fRstOutput, ":category: 巴利三藏中部\n")
	fmt.Fprintf(fRstOutput, ":summary: "+title+"\n")
	fmt.Fprintf(fRstOutput, "\n\n")
}
