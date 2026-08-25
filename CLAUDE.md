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

## Branch + Deploy Workflow
1. Create a branch: `git checkout -b feature/your-feature`
2. Make changes, commit
3. Push and open a PR — CI must pass before merging
4. Merge via squash (merge commits are not allowed on this repo)
5. Netlify auto-deploys on merge to `main`

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
