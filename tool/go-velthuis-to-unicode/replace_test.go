package velthuis

import (
	"io/ioutil"
	"testing"
)

func TestProcessBytes(t *testing.T) {
	path := "../../content/articles/tipitaka/sutta/samyutta/samyutta-nikaaya%zh.rst"
	b, err := ioutil.ReadFile(path)
	if err != nil {
		panic(err)
	}
	ProcessBytes(b)
	//b2 := ProcessBytes(b)
	//ioutil.WriteFile(path, b2, 0644)
}
