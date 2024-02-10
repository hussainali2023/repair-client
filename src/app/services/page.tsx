import Service from "@/components/ui/Services";

const ServicePage = async() =>{
    const res = await fetch("http://localhost:5000/api/v1/services",{
       cache: "no-store"
    })

    const data = await res.json()

    return(
        <>
        <Service services={data.data}/>
        </>
    )
}

export default ServicePage;