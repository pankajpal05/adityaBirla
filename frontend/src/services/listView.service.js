const fetchListViewData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/card-list-views?populate[cardListView][populate]=*&populate[dateComponent]populate=*&populate[cardView]populate=*`,
      { cache: "no-store" },
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};
export { fetchListViewData };
