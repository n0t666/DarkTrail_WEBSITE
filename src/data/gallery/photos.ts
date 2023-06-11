import   screenshot from '../../Images/gallery/photo1.png';

let currentId = 1;
const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];
const galleryPhotos = [
  { width: 1121, height: 1074 },
  { width: 1920, height: 1080 },
  { width: 1920, height: 1080 },
  { width: 1920, height: 670 },
  { width: 1920, height: 1080 },
  { width: 1806, height: 934 },
  { width: 1147, height: 1077 },
];

const photos = galleryPhotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;

  const id = `photo${currentId}`;
  currentId++;

  return {
    src: require(`../../Images/gallery/${id}.png`),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: require(`../../Images/gallery/${id}.png`),
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

export default photos;
