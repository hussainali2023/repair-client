import getAllServices from "@/utils/getAllServices";
import Service from "./Services";

const FeaturedServices = async() => {
   
    const data = await getAllServices()
    console.log(data)
    return(
        <>
      <Service services={data.data.slice(0, 3)}></Service>
        </>
    )
}

export default FeaturedServices;