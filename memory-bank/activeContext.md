# Active Context

_(This file tracks the current work focus, recent changes, next steps, and
active decisions. It should be derived from productContext.md,
systemPatterns.md, and techContext.md)_

## Current Focus

_(What is the immediate task or feature being worked on?)_

## Recent Changes

- Added a new Storybook story file (`src/stories/Button.stories.tsx`) for the
  `Button` component (`src/components/ui/button.tsx`), replacing the default
  Storybook button examples.
- Imported `src/app/globals.css` into `.storybook/preview.ts` to ensure Tailwind
  styles are loaded correctly in Storybook.
- Installed the `Input` component (`src/components/ui/input.tsx`) using
  `shadcn/ui` with the neobrutalism style.
- Created a Storybook story file (`src/stories/Input.stories.tsx`) for the new
  `Input` component.
- Created the `NavbarSidebar` component (`src/app/(home)/navbar-sidebar.tsx`) with props for `href` and `children`.

## Next Steps

_(Outline the planned next steps or tasks.)_

## Active Decisions/Considerations

_(List any open questions, ongoing discussions, or decisions being weighed.)_
