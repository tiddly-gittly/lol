# Multi-tab layout & Grid layout & layout Launcher, for TiddlyWiki5 (WIP)

* VSCode style tabs and split screen, each tab is a layout
* bring Android&iOS style app launcher to tw, as Layout Launcher.


Problems encountered:

1. position: fix style make some element leak to cover other layouts, for example, default layout on the middle, will have its sidebar leak to cover the right most layout
2. need to design a ui to create and delete grid item, while not covering too much of space. For example, use a tab style handle
3. drag event should be minimized to a handle, for example, to a tab style handle

## Development

There are some scripts you can run to boost your development.

After `npm i --legacy-peer-deps`:

- `npm run dev` to pack the plugin in the `dist/` directory, this will setup a site that will auto reload when you have changes. But this is development mode, will produce a much larget bundle than the final version, so only for dev.
- `npm run dev-html` to setup the demo site locally. Re-run this command and refresh browser to see changes. In this way you can see the real bundle size same as your user will get.

You will need `--legacy-peer-deps` when `npm i` if you are using latest nodejs. This is a bug in npm.

### Add a second ts file

Add new file name (without `.ts`) to `package.json`'s `tsFiles` field. And build script will read it and compile files in it.
