document.addEventListener("DOMContentLoaded", () => {
  const bookBase = document.getElementById("bookBase");
  const leftPage = document.getElementById("leftPage");
  const rightPage = document.getElementById("rightPage");

  const rightSheet = document.getElementById("turnSheetRight");
  const rightFront = document.getElementById("turnFrontRight");
  const rightBack = document.getElementById("turnBackRight");

  const leftSheet = document.getElementById("turnSheetLeft");
  const leftFront = document.getElementById("turnFrontLeft");
  const leftBack = document.getElementById("turnBackLeft");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicator = document.getElementById("spreadIndicator");

  const START_BASE = "assets/images/00_book_start.png";
  const SPREAD_BASE = "assets/images/01_book_spread.png";

  const spreads = [
    {
      left: null,
      right: "page-1",
      base: START_BASE
    },
    {
      left: "page-2",
      right: "page-3",
      base: SPREAD_BASE
    },
    {
      left: "page-4",
      right: "page-5",
      base: SPREAD_BASE
    },
    {
      left: "page-6",
      right: "page-7",
      base: SPREAD_BASE
    }
  ];

  let spreadIndex = 0;
  let animating = false;
  let pointerStartX = null;

  function templateHTML(id) {
    if (!id) return "";

    const template = document.getElementById(id);
    return template ? template.innerHTML : "";
  }

  function renderSpread(index) {
    const spread = spreads[index];

    bookBase.src = spread.base;
    leftPage.innerHTML = templateHTML(spread.left);
    rightPage.innerHTML = templateHTML(spread.right);

    indicator.textContent = `${index + 1} / ${spreads.length}`;

    prevBtn.disabled = index === 0 || animating;
    nextBtn.disabled = index === spreads.length - 1 || animating;
  }

  function clearTurnSheets() {
    rightSheet.className = "turn-sheet turn-sheet-right";
    leftSheet.className = "turn-sheet turn-sheet-left";

    rightFront.innerHTML = "";
    rightBack.innerHTML = "";
    leftFront.innerHTML = "";
    leftBack.innerHTML = "";
  }

  function nextSpread() {
    if (animating || spreadIndex >= spreads.length - 1) return;

    animating = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    const current = spreads[spreadIndex];
    const next = spreads[spreadIndex + 1];

    rightFront.innerHTML = templateHTML(current.right);
    rightBack.innerHTML = templateHTML(next.left);

    rightPage.innerHTML = templateHTML(next.right);

    setTimeout(() => {
      bookBase.src = next.base;
    }, 390);

    rightSheet.classList.add("turn-next");

    setTimeout(() => {
      spreadIndex += 1;
      clearTurnSheets();
      animating = false;
      renderSpread(spreadIndex);
    }, 940);
  }

  function prevSpread() {
    if (animating || spreadIndex <= 0) return;

    animating = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    const current = spreads[spreadIndex];
    const prev = spreads[spreadIndex - 1];

    leftFront.innerHTML = templateHTML(current.left);
    leftBack.innerHTML = templateHTML(prev.right);

    leftPage.innerHTML = templateHTML(prev.left);

    setTimeout(() => {
      bookBase.src = prev.base;
    }, 390);

    leftSheet.classList.add("turn-prev");

    setTimeout(() => {
      spreadIndex -= 1;
      clearTurnSheets();
      animating = false;
      renderSpread(spreadIndex);
    }, 940);
  }

  prevBtn.addEventListener("click", prevSpread);
  nextBtn.addEventListener("click", nextSpread);

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextSpread();
    if (event.key === "ArrowLeft") prevSpread();
  });

  const bookShell = document.getElementById("bookShell");

  bookShell.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
  });

  bookShell.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;

    const delta = event.clientX - pointerStartX;
    pointerStartX = null;

    if (Math.abs(delta) < 55) return;

    if (delta < 0) {
      nextSpread();
    } else {
      prevSpread();
    }
  });

  renderSpread(0);
});
