import { useParams } from "react-router-dom";

function Meet() {
  let { roomId } = useParams();
  return (
    <div className="w-100 h-screen bg-blue-500 flex justify-center items-center">
      <h1 className="text-4xl"> Meet ID : {roomId} </h1>
    </div>
  );
}

export default Meet;
