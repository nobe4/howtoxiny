+++
references = [
    "https://docs.python.org/3/library/urllib.request.html#urllib.request.urlopen",
    "https://docs.python.org/3/library/urllib.request.html#urllib.request.Request",
]
+++

```python
from urllib import request

r = request.Request(
    "https://howtoxiny.org/en/docs/contributing/?query=value&filter=other",
    headers = {
        "User-Agent": "agent/0.0.1",
        "Accept": "*/*",
    },
)

contents = request.urlopen(r).read()
print(contents)
```
