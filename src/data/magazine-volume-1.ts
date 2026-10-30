export const volumeOnePageManifest = Array.from({ length: 36 }, (_, index) => {
  const pageNumber = index + 1;

  return {
    id: `page-${pageNumber}`,
    number: pageNumber,
    src: `/magazines/volume-1/pages/${pageNumber}.jpg`,
    alt: `Beyond Ventures Volume 1 page ${pageNumber}`,
  };
});
