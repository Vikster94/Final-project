const artGrid = document.querySelector('.art-grid');
const artPieces = Array.from(document.querySelectorAll('.art-piece'));

const resizeObserver = new ResizeObserver(entries => {
  const { width } = entries[0].contentRect;
  const numColumns = Math.floor(width / 200); 
  const columnWidth = `${100 / numColumns}%`;
  artPieces.forEach(artPiece => {
    artPiece.style.width = columnWidth;
  });
});

resizeObserver.observe(artGrid);