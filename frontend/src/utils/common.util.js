const getImageUrl = (url) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_ASSET_URL}${url}`;
  return imageUrl;
};
