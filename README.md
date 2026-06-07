# Sito istituzionale — REstars PropTech S.r.l.

Sito statico, multi-pagina, bilingue (IT/EN), responsive (mobile + desktop).
Sfondo bianco, elementi dorati con accento blu (corona del brand). Nessuna dipendenza
da framework o build: si apre direttamente nel browser.

## Struttura
```
site/
├── index.html              Home
├── software.html           Il Software (analisi aste giudiziarie, SaaS)
├── servizi.html            Servizi (scouting/recupero + B2B)
├── contatti.html           Contatti + dati societari (status startup innovativa)
├── css/style.css           Design system
├── js/main.js              Lingua IT/EN, menu mobile, animazioni
└── assets/img/             Logo, corona, favicon, foto e placeholder
```
Lo status di **startup innovativa** è citato sinteticamente nei Contatti e nel footer
(badge), ma non esiste più una pagina/sezione dedicata. Nessun riferimento a CrowndEX S.r.l.

## Tipografia
Titoli in **Raleway**, testo in **Open Sans** (Google Fonts) — stesso schema del
sito deacapital.com. Definita in `css/style.css` (variabili `--ff-serif` = titoli,
`--ff-sans` = testo).

## Come visualizzarlo
- **Doppio click** su `index.html`, oppure
- Server locale: `python -m http.server 8765 --directory site` → http://localhost:8765

## Lingua
Selettore **IT/EN** in alto a destra. La scelta è salvata nel browser.
I testi sono inline (`<span data-lang-it>` / `<span data-lang-en>`): per modificarli, edita entrambe le versioni.

## Dati già inseriti
- Email: **info@restars.io** · PEC: **restars@legalmail.it** · Telefono: **+39 339 123 4567** · Sito: **www.restars.io**
- Sede legale: **Montecorvino Pugliano (SA), Italia** (manca via e n. civico)

## Foto
Le immagini sono **foto royalty-free (Unsplash)** scaricate in locale in `assets/img/photo-*.jpg`
(villa, dashboard dati, firma documenti, Torre di Pisa, team al lavoro). Sono libere per uso
commerciale senza attribuzione; sostituibili in qualsiasi momento mantenendo lo stesso nome file.
I placeholder SVG `assets/img/ph-*.svg` restano come riserva.

## ⚠️ Segnaposto ancora da completare (cerca il testo tra `[ ]`)
Prima della pubblicazione sostituisci, in tutte le pagine:

| Segnaposto | Dove | Cosa inserire |
|---|---|---|
| `[via e n. civico da inserire]` | contatti | Via e numero civico della sede |
| `[da inserire]` (P.IVA / C.F.) | footer, contatti | Partita IVA / Codice Fiscale |
| `[da inserire]` (N. REA) | contatti | Numero REA |
| `href="#"` social | footer, contatti | URL reali LinkedIn / Instagram / YouTube |

Suggerimento: usa "Trova e sostituisci" su tutti i file `.html`.

## Logo e brand
- Logo: `assets/img/logo-crown.png` (corona dorata con gemma blu)
- Colori principali in `css/style.css` (variabili `--gold`, `--blue`, ecc.)

## Pubblicazione
Essendo statico, è ospitabile gratuitamente su Netlify, Vercel, GitHub Pages,
Cloudflare Pages o qualsiasi hosting: basta caricare il contenuto della cartella `site/`.

---
Nota: i contenuti legali/fiscali hanno finalità divulgativa e vanno validati dal
professionista incaricato prima della messa online.
