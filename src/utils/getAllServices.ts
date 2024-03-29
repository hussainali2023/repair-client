export const getAllServices = async () => {
  const res = await fetch("http://localhost:5000/api/v1/services", {
    next: {
      revalidate: 5,
    },
  });
  return res.json();
};
