+++
references = [
    "https://pkg.go.dev/net/http",
    "https://pkg.go.dev/net/http#Get",
    "https://pkg.go.dev/net/http#Request",
    "https://pkg.go.dev/net/http#NewRequest",
    "https://pkg.go.dev/net/http#Client.Do",
    "https://pkg.go.dev/net/url#Parse",
]
+++

[`net/http`](https://pkg.go.dev/net/http) provides a couple of ways to do
HTTP GET requests.

1. [`http.Get`](https://pkg.go.dev/net/http#Get)

   ```go
   http.Get(
       "https://howtoxiny.org/en/docs/contributing/?query=value&filter=other",
   )
   ```

   {{< note >}} This method doesn't let you set HTTP headers. {{< /note >}}

2. [`http.NewRequest`](https://pkg.go.dev/net/http#NewRequest)

   ```go
   request, err := http.NewRequest(
       "GET",
       "https://howtoxiny.org/en/docs/contributing/?query=value&filter=other",
   )
   if err != nil {
       log.Fatal(err)
   }

   request.Header.Set("User-Agent", "agent/0.0.1")
   request.Header.Set("Accept", "*/*")

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
       Method: "GET",
       URL:    parsedURL,
       Header: map[string][]string{
           "Accept":       {"*/*"},
           "User-Agent":   {"agent/0.0.1"},
       },
   }

   http.DefaultClient.Do(&request)
   ```
