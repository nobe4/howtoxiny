+++
title = "do an HTTP POST request"
aka = [
    "post a page",
    "post data",
    "send data",
    "send data to a website",
]
references = [
    "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST",
]
+++

An HTTP POST request is a common way send data to a server.

```
POST /en/docs/contributing/?query=value&filter=other HTTP/1.1
Host: howtoxiny.org
User-Agent: agent/0.0.1
Accept: */*
Content-Type: application/json
Content-Length: 21

{ "cats": "awesome" }
```

{{< note >}}
The examples must assume that `howtoxiny.org` is served over HTTPS.
{{< /note >}}
