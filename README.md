# Rehan Saleem — Portfolio Website

A responsive, black-and-white portfolio inspired by the supplied reference layout and built around the supplied portfolio materials. It is a static site: no build step or paid database is required.

## Preview locally

Open `index.html` in a local web server (recommended) rather than directly as a `file://` URL, because the site loads `content.json` with `fetch`.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Vercel

1. Create a new GitHub repository and upload the **contents** of this folder (keep the `assets` folder and its subfolders intact).
2. In Vercel, choose **Add New → Project**, import that GitHub repository, and deploy it.
3. Use the default settings. This is a static HTML/CSS/JavaScript site; no framework preset or build command is needed. The output directory is the repository root.
4. Your Vercel URL will appear when deployment finishes.

You can also deploy by installing the Vercel CLI and running `vercel` from this directory.

## Edit the website

Open `/admin.html` on your deployed site (or locally through the server above).

The editor lets you change:
- Your name, role, hero text, About section, email and social links.
- Services and skills.
- Project names, categories, descriptions, asset paths, tags, visibility, and featured status.
- Add or remove portfolio projects.

When finished, click **Download updated content.json**. Replace the existing `content.json` in your GitHub repository with the downloaded file. GitHub will trigger a fresh Vercel deployment automatically.

### Add or replace project media

Upload the new file into the correct folder in the repository, such as `assets/graphics/`, `assets/video/`, `assets/copywriting/`, or `assets/documents/`. In Edit Site, set the project's asset path to the exact relative path. Supported project types are `image`, `video`, `pdf`, and `document` (Word files).

## What's included

- 9 supplied graphic samples.
- 8 editable Word copywriting project files.
- 2 AI UGC video samples, transcoded to smaller web-friendly MP4 files for hosting.
- BrandAid Marketing brand guidelines and knowledge base PDFs.
- The 3 PDF resources from the original site: AI Prompt Library, Client Onboarding Playbook, and Support Escalation Guide.
- A project gallery with category filters and a project detail viewer.
- A responsive layout for desktop, tablet, and mobile.

## Before making the site public

- Add your preferred email and public social links in Edit Site.
- Review all client-related work samples and confirm you have permission to publish them. The copywriting source files are included as supplied and may contain client names, unpublished copy, testimonials, or claims; remove or anonymize anything you are not authorized to share.
- Check every project card and asset path after deployment.
- The site uses Google Fonts when a visitor is online and falls back to system fonts otherwise.

## Technical notes

- No React, build tooling, or external CMS account is required.
- The editor downloads a replacement JSON file; it does not write to GitHub directly. Publishing requires replacing `content.json` in the repository.
- The black-and-white visual foundation uses a restrained violet accent drawn from the supplied BrandAid brand guide.
