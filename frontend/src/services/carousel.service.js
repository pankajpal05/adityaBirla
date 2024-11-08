const fetchCarouselData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/card-carousels?populate[CarouselComponent][populate]=*&populate[dateComponent]populate=*`,
      { cache: "no-store" }
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};
export { fetchCarouselData };
