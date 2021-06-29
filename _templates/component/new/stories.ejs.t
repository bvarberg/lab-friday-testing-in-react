---
to: "<%= includeStories ? `src/components/${path}/${componentName}.stories.tsx` : null %>"
unless_exists: true
---
import { <%= componentName %> } from "./<%= componentName %>";

export default {
  title: "<%= path %>",
  component: <%= componentName %>,
  parameters: {
    layout: "centered",
  },
};

export const example = () => <<%= componentName %> />;
