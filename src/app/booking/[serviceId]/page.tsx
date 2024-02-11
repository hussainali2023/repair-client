import BookingForm from "@/components/ui/BookingForm";

export type TParams = {
  serviceId: string;
};

const BookingPage = async ({ params }: { params: TParams }) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/services/${params.serviceId}`
  );
  const data = await res.json();
  //   console.log(data.data);
  return (
    <div>
      <BookingForm service={data.data} />
    </div>
  );
};

export default BookingPage;
