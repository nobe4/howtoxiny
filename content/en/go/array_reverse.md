```go
func Reverse(a []int) []int {
    l := len(a)
    for i, j := 0, l - 1; i < l / 2; i, j = i + 1, j - 1 {
        a[i], a[j] = a[j], a[i]
    }
    return a
}
```
