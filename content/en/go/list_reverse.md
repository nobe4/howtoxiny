```go
func Reverse(s []int) []int {
    l := len(s)
    for i, j := 0, l - 1; i < l / 2; i, j = i + 1, j - 1 {
        s[i], s[j] = s[j], s[i]
    }
    return s
}
```
