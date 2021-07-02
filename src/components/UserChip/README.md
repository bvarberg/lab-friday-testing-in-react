# UserChip

A chip that displays a user's name and more user information when you hover over
it.

## Dependency patterns

- Props
- Import
  - Integrates with UI library

## Learnings

> Storybook is a great way to work on something like this -- it's mostly visual,
> and we can imagine how to use the tool to isolate our component and test
> (verb) as we work towards our implementation.

It was important that we started with a good idea of the shape of our incoming
data. We also knew that this component wouldn't need to know how that data was
fetched. Working from our design concept/sketch, we knew there would not be any
interact/action the component would need to manage (yet). It really just needs
to putting data in the right place and style the output.

All of the above pushed us towards using Storybook as our feedback mechanism,
rather than using Jest to drive the component with tests.
