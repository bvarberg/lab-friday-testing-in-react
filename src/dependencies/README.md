## Motivation

> “The solution to the problem of costly tests, ... is not to stop testing but
> instead to get better at it.”
>
> - Sandi Metz, _Practical Object-Oriented Design, 2e._

**Driving thought:** We want to test our code, but we aren't always sure how to
do it effectively.

One of the major barriers is a lack of confidence in how we might set up the
state-of-the-world to isolate our subject for testing.

With better understanding of our tools and patterns for design, we may feel more
confident to test.

**Goal:** Produce some concrete examples to draw on, demonstrating ways to deal
with the different kind of dependencies we're likely to encounter while testing
in React.

Regardless of when we decide to test, this exploration should make us more
comfortable to give testing a shot, and help us produce a higher quality
product.

## Dependencies

When we're thinking about how to set up a controlled environment for testing,
one major consideration is the kind of dependencies the component has (or will
have).

The manner in which our component consumes supporting code informs the options
we have for controlling its behavior, and the tools we might choose for doing
so. With this understanding as a starting point, we can apply the tools at our
disposal with discretion to create highly-isolated or highly-integrated tests,
as we see fit.

Here are a few kinds of dependency we are likely to encounter in a React
component. Often, a component implementation will involve a mixture of these,
and often multiple dependencies of a similar kind.

- Imports
- Globals
- Props
- Contexts
- Children (special case of Props)

Let's look at what each kind of dependency means in terms of our ability to
isolate the component from that dependency.

### Imports

When we import and use a module directly, we're coupling our component to that
module in a relatively inflexible way. As a consequence, our options for testing
the component may be more limited.

<details>
<summary>
1. Just use the real thing
</summary>

There's nothing inherently wrong with consuming a dependency directly via
`import`. In some cases, it may be desirable to fully integrate with the real
thing.

Think of a package like `@material-ui/core` that provides many re-usable
components. Or perhaps a component you've defined as part of your own design
system, like a custom `Button`.

</details>

<details>
<summary>
2. Replace the real thing with a test double <strong>at the module layer.</strong>
</summary>

Jest provides this utility through `jest.mock('<module / path>')`. It hooks into
the module system so that whenever your module under test calls
`import ... from '<module>'`, it receives the value you provide for testing,
instead of the real value exported from the module.

See:
[`jest.mock` documentation](https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options)

The `testdouble` package offers a similar tool via `td.replace('...')`.

See:
[`td.replace` documentation](https://github.com/testdouble/testdouble.js#tdreplace-and-tdreplaceesm-for-replacing-dependencies)

> **Recommendation**: Use module replacement sparingly. Dependencies consumed by
> import tend to be the things that you actually do want to integrate with, even
> when isolating the component for testing.
>
> Consider if the dependency might benefit from designing the component to use
> some other method of consumption.

</details>

It's common to import another React component and render it as part of the
subtree for the component you're working on. In these cases, don't forget to
consider _that component's_ dependencies.

### Globals

Tools you might use:

- `jest.spyOn(...)` (Date.now example)

### Props

Tools you might use:

- Simple values, created in the test
- Factory for creating test data
- Test doubles for replacing collaborators
  - Mocks for responding to outbound queries, control flow
  - Spies for asserting outbound commands

### Context

Tools you might use:

- Context providers set up for testing
- Test doubles for replacing collaborators
  - Commonly used for complex services
  - Same reasons as when the collaborator is received as via Props
- Test providers exposed by third-party packages
  - Likely to see this for core integrations like Redux

### Children

...

### Special cases

- Network (usually tools like `nock` or `MSW`)
- Router (Context + state)
- Time / Timers
