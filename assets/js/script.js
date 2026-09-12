document.addEventListener("DOMContentLoaded", () => {
  const bookElement = document.getElementById("book");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageIndicator = document.getElementById("pageIndicator");

  if (!window.St || !window.St.PageFlip) {
    console.error("Не вдалося завантажити бібліотеку PageFlip.");
    return;
  }

  const pageFlip = new St.PageFlip(bookElement, {
    width: 560,
    height: 820,

    size: "stretch",

    minWidth: 290,
    maxWidth: 560,

    minHeight: 425,
    maxHeight: 820,

    showCover: true,
    usePortrait: true,
    autoSize: true,

    drawShadow: true,
    maxShadowOpacity: 0.22,

    flippingTime: 1150,

    useMouseEvents: true,
    mobileScrollSupport: false,

    startPage: 0
  });

  const pages = document.querySelectorAll("#book .page");

  pageFlip.loadFromHTML(pages);

  const totalPages = pageFlip.getPageCount();

  function updateControls(pageIndex) {
    const current = pageIndex + 1;

    pageIndicator.textContent = `${current} / ${totalPages}`;

    prevBtn.disabled = pageIndex <= 0;
    nextBtn.disabled = pageIndex >= totalPages - 1;
  }

  prevBtn.addEventListener("click", () => {
    pageFlip.flipPrev("top");
  });

  nextBtn.addEventListener("click", () => {
    pageFlip.flipNext("top");
  });

  pageFlip.on("flip", (event) => {
    updateControls(event.data);
  });

  pageFlip.on("changeOrientation", () => {
    updateControls(pageFlip.getCurrentPageIndex());
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      pageFlip.flipNext("top");
    }

    if (event.key === "ArrowLeft") {
      pageFlip.flipPrev("top");
    }
  });

  updateControls(0);
});
