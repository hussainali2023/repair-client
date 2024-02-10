import { Spin } from "antd";

const LoadingPage = () =>{
    return(
        <>
        <div className="flex justify-center my-52">
    <Spin />
    <br />
    <p className=" pl-4">Loading</p>
  </div>
        </>
    )
}

export default LoadingPage;