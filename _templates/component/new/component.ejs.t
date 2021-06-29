---
to: src/components/<%= path %>/<%= componentName %>.tsx
unless_exists: true
---
interface Props {}

export function <%= componentName %>({}: Props) {
  return null;
}
