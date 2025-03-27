window.addEventListener("DOMContentLoaded", () => {
  const instance = new PagefindModularUI.Instance();

  instance.add(
    new PagefindModularUI.Input({
      inputElement: "#search-input",
    }),
  );

  instance.add(
    new PagefindModularUI.Summary({
      containerElement: "#search-helper",
    }),
  );

  instance.add(
    new PagefindModularUI.ResultList({
      containerElement: "#search-results",
      placeholderTemplate: () => "<p>Loading ... </p>",
      resultTemplate: (result) => {
        return `
        <li>
            <a href="${result.url}">
                <span>${result.meta.title}</span>
                <small>[${result.meta.kind}]</small>
            </a>
        </li>
        `;
      },
    }),
  );
});
