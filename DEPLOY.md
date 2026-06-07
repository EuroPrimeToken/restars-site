# Pubblicazione del sito su restars.io

Il sito è **statico** (solo HTML/CSS/JS): non serve un server applicativo, basta un
hosting per file statici. Il dominio `restars.io` è già tuo (registrato su name.com);
name.com è il **registrar** del dominio, ma serve anche un **hosting** che ospiti i file.

Percorso consigliato: **Netlify** (gratuito, HTTPS automatico, caricamento drag-and-drop).
In alternativa: Cloudflare Pages, Vercel, GitHub Pages, o lo spazio web del tuo provider.

---

## 1) Visionare il sito prima della pubblicazione
- **Subito**: doppio click su `site/index.html` (si apre nel browser).
- **Come un vero sito** (consigliato per provarlo bene): apri un terminale nella cartella
  del progetto ed esegui:
  ```
  python -m http.server 8765 --directory site
  ```
  poi vai su http://localhost:8765

---

## 2) Pubblicare con Netlify (metodo più semplice)

### A. Carica il sito
1. Vai su https://app.netlify.com e crea un account gratuito.
2. Menu **Sites → Add new site → Deploy manually**.
3. Trascina nel riquadro la cartella `site/` (oppure scompatta `restars-site.zip` e
   trascina il suo contenuto). Netlify pubblica subito su un indirizzo tipo
   `random-name.netlify.app`: verifica che sia tutto ok.

### B. Collega il dominio restars.io
In Netlify: **Site configuration → Domain management → Add a custom domain** →
inserisci `restars.io`. Netlify ti proporrà uno dei due metodi sotto.

**Metodo consigliato — Netlify DNS (nameserver):**
1. Netlify ti mostra 4 nameserver (es. `dns1.p01.nsone.net`, `dns2…`, ecc.).
2. Su **name.com**: dominio `restars.io` → **Nameservers** → sostituisci quelli
   esistenti con i 4 di Netlify → salva.
3. Attendi la propagazione (da pochi minuti fino a 24-48 ore). HTTPS viene attivato
   automaticamente da Netlify (Let's Encrypt).

**Metodo alternativo — record DNS su name.com (lasci i nameserver di name.com):**
Su name.com → `restars.io` → **DNS Records**, aggiungi:

| Tipo  | Host  | Valore                         |
|-------|-------|--------------------------------|
| A     | @     | `75.2.60.5`                    |
| CNAME | www   | `IL-TUO-SITO.netlify.app`      |

(`@` = dominio nudo `restars.io`; `IL-TUO-SITO` è il sottodominio assegnato da Netlify.)
Poi in Netlify imposta `restars.io` come dominio primario: l'SSL si attiva da solo.

---

## 2-bis) Pubblicare con Vercel (alternativa a Netlify)

Vercel non ha il drag-and-drop di una cartella: si pubblica via **CLI** (veloce, una tantum)
oppure collegando un **repository GitHub** (deploy automatico ad ogni modifica).

### Opzione A — CLI (la più rapida)
Richiede Node.js installato (https://nodejs.org).
```
npm i -g vercel
cd "C:\Users\profv\OneDrive\Desktop\Claude\REstars\site"
vercel            # primo deploy di anteprima: rispondi alle domande (progetto nuovo)
vercel --prod     # pubblicazione in produzione
```
Nessuna configurazione di build: è un sito statico, Vercel serve i file così come sono.

### Opzione B — GitHub (consigliata per gli aggiornamenti)
1. Carica **solo** la cartella `site/` in un repository GitHub (oppure tutto il progetto).
2. Su https://vercel.com → **Add New → Project → Import** dal repo.
3. Framework Preset: **Other**. Se hai caricato l'intero progetto, imposta
   **Root Directory = `site`**. Build Command: vuoto. Output Directory: vuoto. → **Deploy**.

### Collega il dominio restars.io su Vercel
Vercel → progetto → **Settings → Domains → Add** → `restars.io` (e `www.restars.io`).
Poi su **name.com** scegli un metodo:

**Record DNS (lasci i nameserver di name.com):**

| Tipo  | Host | Valore                  |
|-------|------|-------------------------|
| A     | @    | `76.76.21.21`           |
| CNAME | www  | `cname.vercel-dns.com`  |

**Oppure nameserver di Vercel** (DNS gestito da Vercel): su name.com imposta i nameserver
`ns1.vercel-dns.com` e `ns2.vercel-dns.com`.

In entrambi i casi l'**HTTPS** viene attivato automaticamente da Vercel.

---

## 3) Aggiornamenti futuri
Per modificare il sito: cambi i file in `site/` e ricarichi (drag-and-drop su Netlify,
oppure colleghi un repository GitHub per il deploy automatico a ogni modifica).

---

## Prima di andare online — checklist
- [ ] Completare i segnaposto `[ ]` (P.IVA, REA, via e n. civico) — vedi `README.md`
- [ ] Inserire i link social reali (ora puntano a `#`)
- [ ] (Opzionale) foto reale del CEO
- [ ] Far validare i testi legali/fiscali dal professionista incaricato

> Nota: la registrazione del dominio e l'accesso a Netlify/name.com richiedono i tuoi
> account personali: quei passaggi vanno eseguiti da te. I file sono già pronti.
