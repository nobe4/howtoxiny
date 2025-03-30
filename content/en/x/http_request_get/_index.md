+++
title = "do an HTTP GET request"
aka = [
    "get a page",
    "get a web page",
    "get a website",
]
references = [
    "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET",
]
+++

An HTTP GET request is the most common way to check if a website is up and
running.

```
GET /en/docs/contributing/?query=value&filter=other HTTP/1.1
Host: howtoxiny.org
User-Agent: agent/0.0.1
Accept: */*
```

{{< note >}}
The examples must assume that `howtoxiny.org` is served over HTTPS.
{{< /note >}}
