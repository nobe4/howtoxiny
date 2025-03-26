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
        <li class="mb-2">
            <a class="flex justify-between" href="${result.url}">
                <span>${result.meta.title}</span>
                <small>[${result.meta.kind}]</small>
            </a>
        </li>
        `;
      },
    }),
  );
});
