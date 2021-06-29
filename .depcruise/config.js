/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  extends: "dependency-cruiser/configs/recommended-strict",
  forbidden: [
    {
      name: "not-to-component-implementation",
      severity: "error",
      comment: `This module depends on the implementation details of a component.
        Consider changing the importer to instead depend only on what is exposed by the top-level component.
        Given more scrutiny, you may also consider extracting the desired functionality to a new top-level component.
      `,
      from: {
        path: "^src/[^/]+/([^/]+)/.+",
      },
      to: {
        path: "^src/components/[^/]+/(?!index.tsx?)",
        pathNot: "^src/components/$1/.+",
      },
    },
  ],
  options: {
    doNotFollow: {
      path: "node_modules",
      dependencyTypes: [
        "npm",
        "npm-dev",
        "npm-optional",
        "npm-peer",
        "npm-bundled",
        "npm-no-pkg",
      ],
    },
    includeOnly: "^src",
    exclude: ["^src/setupTests.ts"],
    prefix: `vscode://file/${process.cwd()}/`,
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: "tsconfig.json",
    },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default"],
    },
    reporterOptions: {
      dot: {
        collapsePattern: "node_modules/[^/]+",
        theme: {
          graph: {
            // rankdir: "TD", // i.e. top down (vertical)
          },
          modules: [
            {
              criteria: { source: "^src/(index.tsx|App.tsx)" },
              attributes: {
                color: "#7f8986",
                fillcolor: "#6c9c8f",
                fontcolor: "#ffffff",
              },
            },
            {
              criteria: { source: "^src/components" },
              attributes: {
                fillcolor: "#ccccff",
              },
            },
            {
              criteria: { source: "^src/services" },
              attributes: {
                fillcolor: "#4b8ed0",
                fontcolor: "#ffffff",
              },
            },
            {
              criteria: { orphan: true },
              attributes: {
                shape: "underline",
                fillcolor: "#cccccc77",
              },
            },
            {
              criteria: { source: "\\.json$" },
              attributes: {
                shape: "cylinder",
                color: "#6c9c8f77",
                fillcolor: "#6c9c8f33:#6c9c8fdd",
              },
            },
            {
              criteria: { source: "\\.test\\.tsx?$" },
              attributes: {
                shape: "none",
              },
            },
            {
              criteria: { source: "\\.stories\\.tsx?$" },
              attributes: {
                shape: "none",
              },
            },
          ],
          dependencies: [
            {
              criteria: { "rules[0].severity": "error" },
              attributes: { fontcolor: "red", color: "red" },
            },
            {
              criteria: { "rules[0].severity": "warn" },
              attributes: { fontcolor: "orange", color: "orange" },
            },
            {
              criteria: { "rules[0].severity": "info" },
              attributes: { fontcolor: "blue", color: "blue" },
            },
            {
              criteria: { source: "^src/index.tsx" },
              attributes: { color: "#6c9c8f77" },
            },
            {
              criteria: { resolved: "^src/components" },
              attributes: { color: "#ccccff99" },
            },
            {
              criteria: { resolved: "^src/services" },
              attributes: { color: "#4b8ed077" },
            },
            {
              criteria: { resolved: "\\.json$" },
              attributes: { arrowhead: "box" },
            },
          ],
        },
      },
    },
  },
};
