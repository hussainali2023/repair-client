import Service from "./Services";

const FeaturedServices = async() => {
    const res = await fetch ("http://localhost:5000/api/v1/services",{
       next: {
        revalidate: 5,
       }
    });
    const data = await res.json()
    console.log(data)
    return(
        <>
      <Service services={data.data.slice(0, 3)}></Service>
        </>
    )
}

export default FeaturedServices;