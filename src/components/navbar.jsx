const navbar = () => {
  return (
    <>
      <div className="flex w-screen fixed justify-between align-middle top-0 px-9 bg-gray-100 shadow-lg shadow-gray-300/40">
        <div className="flex">
          <img width="80" height="80" src="https://img.icons8.com/avantgarde/100/video-message.png" alt="video-message" />
          <span className="text-3xl mr-0 mt-auto mb-auto poppins-bold"> Framed </span>
          <img className="h-1/2 w-1/12 mt-auto mb-auto ml-0" src="https://img.icons8.com/ios/100/vertical-line.png" alt="vertical-line" />
          <span className="mt-auto mb-6 ml-0">Crystal clear video calls.</span>
        </div>
        <div className="flex">
          <span className="block border text-blue-700 rounded-md border-blue-400 h-fit mt-auto mb-auto px-3 py-2">Sign in</span>
        </div>
      </div>
    </>
  )
}

export default navbar
