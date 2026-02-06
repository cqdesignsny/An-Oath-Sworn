# PROJECT MAGMA — An Oath Sworn Website Build
## Antigravity Starter Prompt

Paste the following into your Antigravity IDE as the initial project prompt. Upload all images from your Project Magma folder into the project first.

---

## START OF PROMPT — COPY EVERYTHING BELOW THIS LINE

---

Build a cinematic, immersive single-page website for the dark fantasy novel **"An Oath Sworn: Saga of the Stone King, Book One"** by M.T. Kadisin. This is a book sales landing page — the primary goal is to hook the visitor and drive them to purchase. Do NOT spoil the story. Tease the world and create intrigue.

### Tech Stack
- React (with Vite or Next.js, your choice)
- Tailwind CSS
- Framer Motion for scroll-triggered animations
- Google Fonts: `Cinzel Decorative` for the main title, `Cinzel` for section headings, `Lato` for body text
- Fully responsive (desktop-first, mobile-optimized)

### Design System

**Color Palette (use CSS variables):**
```
--color-bg-deep:       #0a0a0f       /* near-black base */
--color-bg-stone:      #1a1a24       /* dark slate for sections */
--color-bg-card:       #12121c       /* card backgrounds */
--color-text-primary:  #e8e0d4       /* warm off-white */
--color-text-secondary:#8a8578       /* muted warm grey */
--color-accent-rune:   #4fb8cc       /* cyan rune glow */
--color-accent-lava:   #e8682a       /* molten orange */
--color-accent-gold:   #c4973b       /* gold trim */
--color-border:        #2a2a38       /* subtle borders */
```

**Typography:**
- Main book title: `Cinzel Decorative`, 700 weight, ~64px desktop / ~36px mobile
- Section headings: `Cinzel`, 600 weight, ~32px desktop / ~24px mobile
- Body: `Lato`, 400 weight, 17px, line-height 1.7
- Pull quotes: `Cinzel`, italic, ~22px, color `--color-accent-gold`

**Global Effects:**
- Background noise/grain texture overlay at 3-5% opacity across the whole page for that "cinematic" feel
- Sections fade-in on scroll using Framer Motion `whileInView`
- All background images should have a dark gradient overlay (linear-gradient from rgba(10,10,15,0.7) to rgba(10,10,15,0.85)) so text is always readable
- Subtle parallax on hero background (CSS `background-attachment: fixed` or Framer Motion scroll transform)

---

### SECTION 1: HERO (Full Viewport)

**Background Image:** `Main_Site_Header.png` (2000x848, the cleaned-up cover art panorama)

**Layout:** Full viewport height. Content centered vertically and horizontally.

**Content (top to bottom):**
1. Small text above title: `M.T. KADISIN` (letter-spaced 6px, uppercase, `Lato`, `--color-text-secondary`, 14px)
2. Main title: `An Oath Sworn` (use `Cinzel Decorative`, large, `--color-text-primary`, subtle text-shadow with `--color-accent-rune`)
3. Subtitle: `Saga of the Stone King — Book One` (`Cinzel`, `--color-accent-gold`, 18px, letter-spaced 3px)
4. Tagline: `A hero nobody asked for. A weapon nobody could control.` (`Lato`, italic, `--color-text-primary`, 20px, fade-in with 1s delay)
5. CTA Button: `Enter Rockhome ↓` — styled as a stone slab button with a subtle border of `--color-accent-rune`, hover glow effect. This smooth-scrolls to Section 2.

**Animation:** Title fades up from below (translateY 30px → 0, opacity 0 → 1). Each element staggers 0.2s. Subtle floating particle effect (optional, CSS-only tiny dots drifting upward to simulate embers/dust).

---

### SECTION 2: THE BOOK — "The Story" (Sales-Focused)

**Background Image:** `The_Great_Deep_Forge.png` (the forge scene with lava and gears), fixed, with heavy dark overlay

**Layout:** Two-column on desktop (text left, book mockup right). Single column on mobile (book mockup on top, text below).

**Left Column — Teaser Copy:**

Heading: `The Story` (`Cinzel`, `--color-accent-gold`)

Body text (use this exact copy):

> Grady was a nobody.
>
> A clanless dwarf scraping by in the dust of history — copying numbers in a dead-end office while the world moved on without him.
>
> Until the Poster appeared.
>
> Lured by the promise of purpose, he volunteered for Keyrdegen Salzum's experiment. They didn't want a hero. They wanted a weapon — obedient, unthinking, unbreakable.
>
> But the one thing they couldn't forge out of him was his will.

Pull quote below the body (styled with left gold border, indented):
> *"Those who refuse to follow will be driven."*

**Right Column:**
- Display `Main_book_mockup-Softcover.png` (the 3D book cover mockup)
- Below the book image, place TWO purchase buttons side by side:
  - `Buy Paperback` → links to `https://www.mtkadisin.com/shop` (styled with `--color-accent-lava` background, white text)
  - `Buy eBook` → links to `https://www.mtkadisin.com/shop` (styled with outline border `--color-accent-rune`, rune-colored text)
- Below buttons: small text `Available now on Amazon, Barnes & Noble, and more.` in `--color-text-secondary`

**Animation:** Text block reveals line-by-line on scroll (staggered fade-in). Book mockup slides in from right with a subtle scale-up (0.95 → 1).

---

### SECTION 3: THE WORLD — "Enter Rockhome"

**Purpose:** Visually immerse the visitor in the world. NO story spoilers. Just atmosphere.

**Layout:** Full-width image showcase. Three cards in a row on desktop, stacked on mobile. Each card is a banner image with a title overlay at the bottom.

**Cards:**

1. **Image:** `The_Guardian_of_the_Deep_Gate.png`
   **Label:** `The Deep Gate`
   **Caption:** `Where stone meets fire, the guardians keep watch.`

2. **Image:** `The_Deep_Road_Caravan.png`
   **Label:** `The Deep Roads`
   **Caption:** `Ancient highways carved through the bones of the mountain.`

3. **Image:** `The_High_Hall_of_the_Ancestors.png`
   **Label:** `The Hall of Ancestors`
   **Caption:** `Where kings of stone stand eternal vigil.`

**Card Styling:**
- Aspect ratio 16:9
- Image fills card with `object-fit: cover`
- Dark gradient overlay from bottom (transparent to `--color-bg-deep`)
- Label in `Cinzel`, `--color-text-primary`, 20px
- Caption in `Lato`, `--color-text-secondary`, 14px
- On hover: slight scale-up (1.02), the `--color-accent-rune` glow appears as a top border (3px), caption fades in

**Section Header (above the cards):**
- `Discover Rockhome` (`Cinzel`, centered, `--color-text-primary`)
- Subtext: `A world forged in stone and fire. A civilization carved from the mountain itself.` (`Lato`, `--color-text-secondary`, centered)

---

### SECTION 4: THE HOOK — Second CTA (Mid-page Sales Push)

**Background:** Solid `--color-bg-deep` with a centered subtle radial glow of `--color-accent-lava` at 5% opacity

**Layout:** Centered, narrow max-width (640px)

**Content:**

Pull Quote (large, centered):
> *"The Stone King Saga is more than a fantasy — it's a journey into what makes us human."*

Below quote:
- The `Main_book_mockup-Softcover.png` image at smaller size (max 280px wide), centered
- CTA Button: `Get Your Copy` → links to `https://www.mtkadisin.com/shop`
  - Styled as the primary lava-orange button, larger than other buttons
  - Subtle pulsing glow animation on the button border (2s infinite ease-in-out)

This section exists purely to catch scrollers who skipped the first buy section.

---

### SECTION 5: THE AUTHOR — "The World-Builder"

**Background:** `--color-bg-stone` solid

**Layout:** Two-column on desktop (photo left, text right). Single column on mobile (photo on top).

**Left Column:**
- `Michael_Swartz-2.webp` (author photo)
- Display in a rounded rectangle (border-radius 12px) with a subtle `--color-accent-gold` border (1px)
- Max width 380px

**Right Column:**

Heading: `Meet M.T. Kadisin` (`Cinzel`, `--color-text-primary`)

Body text (use this exact copy):

> World-builder. OG Rockhomian. Perennial nerd. Master of the bearded arts.
>
> A lifelong reader, gamer, and dreamer, M.T. Kadisin finally stopped saying he wanted to write a book — and just did it. Most of his time is spent sacrificing his imagination to the Kraken Tree. To keep it happy, he must conjure new tales set in fantastic lands filled with wondrous and horrible characters.
>
> He lives in the Hudson Valley, New York, with his wife, his daughter, and his blop-tongued dog.

Below the bio: A small line reading `Photos by Steven Howard Photography` in `--color-text-secondary`, 12px.

---

### SECTION 6: FOOTER

**Background:** `--color-bg-deep`

**Layout:** Centered, simple

**Content:**
1. Text: `The Kraken Tree` in `Cinzel`, `--color-accent-gold`, 20px (this is the publisher/brand name)
2. Navigation links (horizontal, `Lato`, `--color-text-secondary`, 14px):
   - `Purchase Book` → `https://www.mtkadisin.com/shop`
   - `About the Author` → smooth scroll to Section 5
   - `Contact` → `https://www.mtkadisin.com/contact`
   - `Blog` → `https://www.mtkadisin.com/pressblog`
3. Social media row: Placeholder icons for Instagram, Facebook, TikTok (just use Lucide icons or simple SVGs)
4. Bottom line: `© 2025 The Kraken Tree. All rights reserved.` in `--color-text-secondary`, 12px
5. Below that: `Terms & Conditions | Privacy Policy` links in 11px

---

### RESPONSIVE RULES

**Desktop (1024px+):** Full layouts as described above. Max content width 1200px centered.

**Tablet (768px–1023px):** Two-column sections become single column. Cards grid becomes 2-column.

**Mobile (below 768px):** Everything single column. Hero title scales down to 36px. Book mockup centered above text in Section 2. Cards stack vertically. Author photo centered above bio. Reduce all padding. Ensure CTA buttons are full-width and thumb-friendly (min height 48px).

---

### IMAGES PROVIDED IN PROJECT FOLDER

Reference these filenames exactly:
- `Main_Site_Header.png` — Hero banner (2000x848)
- `Main_book_mockup-Softcover.png` — 3D book cover mockup (1024x1536)
- `OathSwornNakedCoverArt.jpg` — Raw cover art (2000x1253)
- `The_Guardian_of_the_Deep_Gate.png` — Gate scene banner (2000x848)
- `The_Great_Deep_Forge.png` — Forge scene banner (2000x1090)
- `The_Deep_Road_Caravan.png` — Caravan bridge banner (2000x1090)
- `The_High_Hall_of_the_Ancestors.png` — Ancestor hall banner (2000x1090)
- `Grady_Faces.jpg` — Character expression sheet (572x1024)
- `Michael_Swartz-2.webp` — Author photo (1024x1535)

---

### KEY PRINCIPLES
1. **SELL THE BOOK** — Every scroll should lead toward a purchase button. There are TWO explicit buy sections (Sections 2 and 4).
2. **TEASE, DON'T SPOIL** — We reveal the world, the vibe, the premise. Never the plot twists or ending.
3. **CINEMATIC, NOT TEMPLATE** — This should feel like a movie poster website, not a Squarespace blog. Dark, atmospheric, immersive.
4. **PERFORMANCE** — Lazy-load all images. Use WebP where possible. Keep animations GPU-accelerated (transform/opacity only).

---

## END OF PROMPT

