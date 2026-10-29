# Profile artwork

The profile header and project cards use a navy, teal and neutral palette. The README selects light or dark project cards with `<picture>` and uses a larger mobile header below 600 px. Cards wrap naturally as space changes.

PNG exports preserve the chosen display typography across browsers. SVG sources retain editable text. The current exports use the macOS DIN Alternate system font; no font files are redistributed. The generator falls back to Arial Narrow or Arial where that font is unavailable.

To update the artwork, install Sharp in a temporary build environment (`npm install --no-save sharp`) and run `node tools/build-profile-art.cjs` from the repository root. Review the PNG exports before committing. The profile makes no external image-service or font-service requests.
