# Heyflow Frontend Challenges

This is my solution for the following Heyflow Frontend Challenges:

- JSON Explorer
- Custom Checkbox

## How to run

I've used Node 20.9.0 to develop this project, so I recommend using the same version to avoid any issues (if there are any).

First, install the dependencies (I've used pnpm, but you can use npm if you prefer):

```bash
pnpm install --frozen-lockfile
```

Then run:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## My Solution

I've created this project with vite using the `create-vite` command with pnpm as the package manager, maily because I beleive that it's one of the best ways to start a typescript react project without a framework (like Next.js).  

The project is structured as follows:

- `src/App.tsx`: The landing page of the application. It's just there to link to the other pages.
- `src/index.css`: The global css file. For variables, and defaults.
- `src/App.css`: The css file for the landing page. It's also used in the other pages to save time.
- `src/json-explorer`: The folder with the json explorer challenge related solution.
- `src/custom-checkbox`: The folder with the custom checkbox challenge related solution.

### Caveats

- The folder structure is not what I would ship in production, but since I did not want to install anything extra (like a router) and there was the no-react restriction on the second challenge, I decided to keep it as simple as possible. 
- To save time because this is a demo I didn't add any kind of tests, and somethings that should have been made available globally (like some colors in the CSS files) are not.
