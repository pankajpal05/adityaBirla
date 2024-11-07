const fetchTemplateViewData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/card-views?populate[templateView][populate]=*&populate[cardView]populate=*     `,
      { cache: "no-store" }
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};
export { fetchTemplateViewData };
