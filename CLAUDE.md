# akddev.co — Claude Instructions

## Stack
React 19 + Vite + Tailwind CSS v4 + MDX. Deployed on Netlify from `main`. All code lives in `frontend/`.

## Adding a New Blog Post

Two files to touch, one folder to create. That's it.

### 1. Create the image folder
```
frontend/public/images/posts/your-post-slug/
```
Drop images in there. Convention:
- `hero.png` — banner image shown at the top of the post
- Any other images referenced inline in the MDX (name them whatever makes sense)

### 2. Add the entry to the post index
File: `frontend/src/posts/index.js`

Add a new object to the top of the `posts` array (newest first):
```js
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  subtitle: 'One sentence description shown on the blog card.',
  date: 'Month DD, YYYY',
  image: '/images/posts/your-post-slug/hero.png',   // shown on blog card
  heroImage: '/images/posts/your-post-slug/hero.png', // shown at top of post
  links: {
    github: 'https://...',    // optional — omit if not relevant
    linkedin: 'https://...',  // optional
    bluesky: 'https://...',   // optional
  },
},
```

### 3. Create the MDX file
File: `frontend/src/posts/your-post-slug.mdx`

Write in plain prose. No emojis. No em dashes — use commas or regular hyphens instead. Inline images use standard markdown syntax:
```mdx
![Alt text](/images/posts/your-post-slug/image-name.png)
```

### 4. Add the URL to the sitemap
File: `frontend/public/sitemap.xml`

Add a `<url>` entry for `https://akddev.co/blog/your-post-slug` with a `<lastmod>` matching the post's date. This is hand-maintained, not generated — easy to forget.

## Theming Rules
- All colors come from the --theme-* variables in frontend/src/index.css.
- Never hardcode hex values in components. If a new color is needed, add a
  variable to BOTH the :root (light) and .dark blocks.
- Any styling change must be checked in both light and dark mode before committing.
- Exceptions: the window dot colors (red/amber/green) in Home.jsx and Contact.jsx,
  and FLOW_COLORS in Flow.jsx (React Flow props can't read CSS variables). These
  are intentional. Do not convert them. If the theme palette changes, update
  FLOW_COLORS to match.

## Branch + Deploy Workflow
1. Start from an up-to-date main: `git checkout main && git pull`
2. Create a branch: `git checkout -b feature/your-feature` (or fix/, chore/)
3. Make changes, commit
4. Push and open a PR. CI (build + lint) must pass before merging
5. Merge via squash (merge commits are not allowed on this repo)
6. GitHub auto-deletes the remote branch. Locally: `git checkout main && git pull &&
   git fetch --prune && git branch -D <branch>` (-D is required after squash merges)
7. Netlify auto-deploys on merge to main. Confirm a new "Production: main@<sha>" entry
   appears on the Netlify Deploys page within a few minutes. If it doesn't,
   use Trigger deploy > Deploy site.

## Branch Hygiene
- One branch per task. Delete it after merge (step 6 above).
- Don't leave work-in-progress branches unmerged for more than a few weeks.
  Merge it, or delete it.
- Dependabot PRs arrive grouped monthly. Merge them if CI passes. Major version bumps
  come separately and need a manual check.

## Key File Locations
| What | Where |
|---|---|
| Post registry | `frontend/src/posts/index.js` |
| MDX post files | `frontend/src/posts/*.mdx` |
| Post images | `frontend/public/images/posts/<slug>/` |
| Blog index page | `frontend/src/assets/components/Blog/Blog.jsx` |
| Post page template | `frontend/src/assets/components/Blog/Post.jsx` |
| Global styles + prose | `frontend/src/index.css` |
| Nav | `frontend/src/assets/components/Nav/Nav.jsx` |
| Theme/accent color | `frontend/src/index.css` — `--theme-accent` |
