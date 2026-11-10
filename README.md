# Gonio Batumi Hotel & Residences — Website Files

## File Structure
```
fc-gonio-website/
├── index.html        ← Homepage
├── suites.html       ← Suites & Accommodations page
├── styles.css        ← All shared styles
├── main.js           ← Interactivity (modals, nav, booking, filters)
├── i18n.js           ← Translations: EN / KA / RU (177 keys each)
├── animations.js     ← Scroll reveal & tilt animations
├── public/
│   └── images/
│       ├── ICON.png
│       ├── Icon.jpg
│       ├── hotel-exterior.jpg
│       ├── hotel-exterior-1.jpg
│       ├── hotel-interior-1.jpg
│       └── hotel-interior-2.jpg
└── README.md
```

## Languages
EN / KA (Georgian) / RU — click the switcher in the header.
Language choice is saved to localStorage and remembered on reload.
177 translation keys covering every visible string on both pages.

## How to Use
Open `index.html` directly in a browser — no server needed.
To deploy: upload all files to your hosting in the same folder structure.

## Customize
- **Phone / WhatsApp:** replace `995555000000` and `995 422 22 00 00`
- **Email:** replace `reservations@goniobatumi.ge`
- **Google Maps:** replace the iframe src coordinates in index.html
- **Translations:** edit `i18n.js` — each key appears in EN, KA, and RU blocks
