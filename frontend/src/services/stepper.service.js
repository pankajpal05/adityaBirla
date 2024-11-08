const fetchStepperData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/card-progresses?populate[stepper][populate]=*`,
      { cache: "no-store" },
    );
    const responseBody = await response.json();
    return responseBody?.data;
  } catch (error) {
    return {};
  }
};
export { fetchStepperData };
