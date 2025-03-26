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

  // This seems to help tailwind find the classes.
  const liClasses = "m-2 border-b";
  const aClasses = "flex justify-between items-center p-2 hover:text-accent";
  instance.add(
    new PagefindModularUI.ResultList({
      containerElement: "#results",
      placeholderTemplate: () => "<p>Loading ... </p>",
      resultTemplate: (result) => {
        return `
        <li class="${liClasses}">
            <a class="${aClasses}" href="${result.url}">
                <span>${result.meta.title}</span>
                <small>[${result.meta.kind}]</small>
            </a>
        </li>
        `;
      },
    }),
  );
});
