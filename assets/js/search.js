window.addEventListener("DOMContentLoaded", () => {
  const instance = new PagefindModularUI.Instance();
  instance.add(
    new PagefindModularUI.Input({
      inputElement: "#search",
    }),
  );

  instance.add(
    new PagefindModularUI.Summary({
      containerElement: "#search-helper",
    }),
  );

  instance.add(
    new PagefindModularUI.ResultList({
      containerElement: "#results",
      placeholderTemplate: () => "<p>Loading ... </p>",
      resultTemplate: (result) => {
        return `
        <li>
            <a href="${result.url}">
                <span> ${result.meta.title} </span> <br>
                <span> ${result.excerpt} </span> <br>
                <span> ${result.url} </span>
            </a>
        </li>
        `;
      },
    }),
  );
});
