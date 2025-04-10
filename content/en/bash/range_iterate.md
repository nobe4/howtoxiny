+++
+++

- without external program:
    ```bash
    for (( i=1; i<=5; i++)); do
        echo "${i}"
    done
    ```

- with `seq`
    ```bash
    for i in $(seq 1 5); do
        echo "${i}"
    done
    ```
