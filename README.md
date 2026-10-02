# Elementary SciTech curriculum map

Live website: https://altarac.github.io/SciTech-Maps/

Grades 3–6, organized into 16 units and 118 lessons. Grades 3–4 form Cycle 2 and Grades 5–6 form Cycle 3. The teaching pathway is Launch → Learn → Land, with short science readings linked at the point of use.

## Website files

- `index.html`: curriculum map, with proposed lesson activities, preparation, POL crosswalks and assessment guidance.
- `Reader_Library_Grades_3_to_6.html`: index of the 16 unit readers.
- `Grade_*_Reader.html` and the named Grade 3 Unit 1 reader: the unit readers, comprising 100 chapters.
- `reader_links.js`: chapter-to-lesson navigation manifest.
- `assets/`: chapter illustrations used on the website.
- `word/`: 100 editable chapter downloads with embedded illustrations.
- `Simulation_Build_Backlog.md`: proposed future simulation titles and learning questions.

All paths are relative to this GitHub Pages project, so the site works under `/SciTech-Maps/` rather than assuming a domain root.

## PowerPoint downloads

The 16 unit PowerPoints are attached to the repository's **Curriculum resources — 2026-10-02** release (`curriculum-resources-2026-10-02`). The map links directly to these downloads. They are kept outside the Git history and the Pages site to avoid unnecessarily large website deployments.

## Publishing

GitHub Pages publishes the `main` branch from the repository root. `.nojekyll` tells Pages to serve the files as a static site. No framework, package installation, account sign-in or server application is required for teachers to use it.

When updating, preserve the reader filenames and the `assets/` and `word/` folder paths. Update the chapter manifest when chapter-to-lesson relationships change. If replacing a PowerPoint with a new release asset, update the release download URL in `deckHref()` in `index.html`.

To include the map on Google Sites, use an **Embed by URL** block with the live website address. Relative reader and download links then resolve on GitHub Pages rather than inside a Google Sites custom-code sandbox.

## Review status and attribution

The lesson activities, crosswalks and assessment guidance are proposed teaching content for review, not an official curriculum certification. Teachers should check scientific accuracy, safety, age appropriateness and timing, and preview simulations before classroom use. Some PowerPoints retain production placeholders.

The readers retain their individual source acknowledgements and licence notices. Where indicated, they are adaptations informed by Core Knowledge Foundation materials under CC BY-NC-SA 4.0. Preserve those notices; publication here does not imply endorsement. Existing slide content retains the original creators' rights and attributions; this repository does not grant a blanket licence for third-party slides.
