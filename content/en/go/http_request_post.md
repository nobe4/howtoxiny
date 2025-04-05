+++
references = [
    "https://pkg.go.dev/net/http",
    "https://pkg.go.dev/net/http#Post",
    "https://pkg.go.dev/net/http#Request",
    "https://pkg.go.dev/net/http#NewRequest",
    "https://pkg.go.dev/net/http#Client.Do",
    "https://pkg.go.dev/net/url#Parse",
]
+++

[`net/http`](https://pkg.go.dev/net/http) provides a couple of ways to do
HTTP POST requests.

1. [`http.Post`](https://pkg.go.dev/net/http#Post)

    ```go
    http.Post(
        "https://howtoxiny.org/en/docs/contributing/?query=value&filter=other",
        "application/json",
        strings.NewReader(`{ "cats": "awesome" }`)
    )
    ```
    {{< note >}} This method doesn't let you set HTTP headers. {{< /note >}}

2. [`http.NewRequest`](https://pkg.go.dev/net/http#NewRequest)
    ```go
    request, err := http.NewRequest(
        "POST",
        "https://howtoxiny.org/en/docs/contributing/?query=value&filter=other",
        strings.NewReader(`{ "cats": "awesome" }`),
    )
    if err != nil {
        log.Fatal(err)
    }

    request.Header.Set("User-Agent", "agent/0.0.1")
    request.Header.Set("Accept", "*/*")
    request.Header.Set("Content-Type", "application/json")

    http.DefaultClient.Do(request)
    ```

3. [`http.Request`](https://pkg.go.dev/net/http#Request)
    ```go
    parsedURL, err := url.Parse(
        "https://howtoxiny.org/en/docs/contributing/?query=value&filter=other",
    )
    if err != nil {
        log.Fatal(err)
    }

    request := http.Request{
        Method: "POST",
        URL:    parsedURL,
        Body:   io.NopCloser(strings.NewReader(`{ "cats": "awesome" }`)),
        Header: map[string][]string{
            "Accept":       {"*/*"},
            "Content-Type": {"application/json"},
            "User-Agent":   {"agent/0.0.1"},
        },
    }

    http.DefaultClient.Do(&request)
    ```
