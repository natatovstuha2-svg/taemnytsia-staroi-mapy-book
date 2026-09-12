:root {
  --ink: #17332d;
  --muted: #5f726e;
  --accent: #0d7b72;
  --paper: rgba(255, 255, 255, 0.94);
  --paper-solid: #ffffff;
  --shadow: rgba(29, 51, 57, 0.20);
}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  color: var(--ink);
  background: #edf7f8;
}

.app {
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-rows: minmax(0, 1fr) 58px;
  align-items: center;
  justify-items: center;
  padding: 8px 14px 8px;
}

.book-shell {
  position: relative;
  width: min(96vw, calc((100dvh - 74px) * 1.5));
  max-width: 1500px;
  aspect-ratio: 3 / 2;
  max-height: calc(100dvh - 74px);
  perspective: 2400px;
  isolation: isolate;
}

.book-base {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  user-select: none;
  pointer-events: none;
  filter: drop-shadow(0 18px 30px var(--shadow));
  z-index: 1;
}

/* Безпечні внутрішні зони сторінок */
.page-zone {
  position: absolute;
  top: 5%;
  height: 89.6%;
  overflow: hidden;
  z-index: 5;
}

.page-zone-left {
  left: 5%;
  width: 42.9%;
}

.page-zone-right {
  left: 52.1%;
  width: 42.9%;
}

.page-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.first-page,
.flowing-page {
  padding: 5.8% 7.2% 5.5%;
  display: flex;
  flex-direction: column;
}

.story-title {
  margin: 0 0 4.2%;
  font-weight: 850;
  font-size: clamp(22px, 2.05vw, 35px);
  line-height: 1.05;
  color: var(--accent);
}

.story-copy {
  font-size: clamp(15px, 1.23vw, 21px);
  line-height: 1.55;
  letter-spacing: 0.005em;
}

.story-copy p {
  margin: 0 0 0.92em;
}

.story-copy p:last-child {
  margin-bottom: 0;
}

.dialogue {
  font-weight: 620;
  color: #294a44;
}

.illustration-inset {
  margin: auto 0 0;
  width: 100%;
  overflow: hidden;
  border-radius: 1.8% / 2.4%;
  box-shadow: 0 8px 18px rgba(23, 51, 45, 0.11);
  background: #eef5f4;
}

.illustration-bottom {
  height: 39%;
}

.short-inset {
  height: 34%;
}

.illustration-inset img,
.illustration-full img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.illustration-inset img {
  object-position: center 36%;
}

.image-led-page {
  padding: 3.5% 4.2%;
  display: flex;
  flex-direction: column;
  gap: 2.3%;
}

.illustration-full {
  margin: 0;
  flex: 1 1 auto;
  min-height: 0;
  overflow: hidden;
  border-radius: 1.6% / 1.8%;
  box-shadow: 0 8px 20px rgba(23, 51, 45, 0.10);
}

.illustration-full img {
  object-position: center;
}

.image-caption {
  flex: 0 0 auto;
  padding: 0.2% 1.2% 0.5%;
  font-size: clamp(14px, 1.07vw, 18px);
  line-height: 1.42;
  color: var(--ink);
}

.caption-large {
  font-size: clamp(13px, 1vw, 17px);
}

/* Аркуш, який перегортається поверх постійної книжкової основи */
.turn-sheet {
  position: absolute;
  top: 5%;
  width: 42.9%;
  height: 89.6%;
  transform-style: preserve-3d;
  opacity: 0;
  pointer-events: none;
  z-index: 20;
}

.turn-sheet-right {
  left: 50%;
  transform-origin: left center;
}

.turn-sheet-left {
  left: 7.1%;
  transform-origin: right center;
}

.sheet-face {
  position: absolute;
  inset: 0;
  overflow: hidden;
  backface-visibility: hidden;
  background: var(--paper);
  box-shadow:
    inset 0 0 28px rgba(20, 45, 50, 0.035),
    0 5px 18px rgba(20, 45, 50, 0.10);
}

.sheet-back {
  transform: rotateY(180deg);
}

.turn-sheet.turn-next {
  opacity: 1;
  animation: flipNext 920ms cubic-bezier(.34, .05, .19, .98) forwards;
}

.turn-sheet.turn-prev {
  opacity: 1;
  animation: flipPrev 920ms cubic-bezier(.34, .05, .19, .98) forwards;
}

@keyframes flipNext {
  0% {
    transform: rotateY(0deg);
    filter: brightness(1);
  }

  46% {
    filter: brightness(.93);
  }

  100% {
    transform: rotateY(-180deg);
    filter: brightness(1);
  }
}

@keyframes flipPrev {
  0% {
    transform: rotateY(0deg);
    filter: brightness(1);
  }

  46% {
    filter: brightness(.93);
  }

  100% {
    transform: rotateY(180deg);
    filter: brightness(1);
  }
}

.controls {
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.controls button {
  appearance: none;
  border: 0;
  border-radius: 999px;
  padding: 10px 18px;
  font: inherit;
  font-weight: 750;
  color: #fff;
  background: linear-gradient(135deg, #18a99e, #0a726a);
  cursor: pointer;
  box-shadow: 0 7px 17px rgba(10, 114, 106, 0.16);
}

.controls button:disabled {
  opacity: .34;
  cursor: default;
}

#spreadIndicator {
  min-width: 66px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
  font-weight: 750;
}

@media (max-width: 700px) {
  .app {
    grid-template-rows: minmax(0, 1fr) 52px;
    padding: 4px;
  }

  .book-shell {
    width: min(98vw, calc((100dvh - 60px) * 1.5));
    max-height: calc(100dvh - 60px);
  }

  .story-copy {
    font-size: clamp(9px, 1.9vw, 13px);
  }

  .story-title {
    font-size: clamp(14px, 3.2vw, 20px);
  }

  .image-caption {
    font-size: clamp(9px, 1.75vw, 12px);
  }

  .controls {
    height: 52px;
    gap: 8px;
  }

  .controls button {
    padding: 9px 13px;
    font-size: 13px;
  }
}
