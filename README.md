# Speak Up! landing page

A responsive, accessible landing page for the Speak Up! elementary public speaking program. It uses plain HTML, CSS, and JavaScript, so it can be hosted directly on GitHub Pages without a build step.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static web server.

## Publish with GitHub Pages

1. Create a new GitHub repository (for example, `speak-up-program`).
2. Upload everything inside this `site` folder to the repository's default branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the default branch and the `/ (root)` folder, then save.
6. GitHub will display the public site address after deployment finishes.

The included workflow in `.github/workflows/pages.yml` is an alternative automated deployment method. If using it, select **GitHub Actions** as the Pages source.

## Updating registration

The Jotform registration form is embedded directly near the bottom of `index.html`, with a link fallback for browsers that block embedded forms. The flyer QR code points to the landing page rather than directly to the form.

## Program details shown

- Tuesdays, 3:30–4:30 PM
- Grades 1–6
- The Episcopal Day School
- August: $30; then $60/month
- Contact: bguerra@episcopaldayschool.net