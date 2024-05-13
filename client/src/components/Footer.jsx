
export default function Footer() {
  return (
    <div className='flex justify-between w-fill bg-blue-50 p-5 roboto-bold'>
      <div className='flex flex-col gap-3 justify-start'>
        <ul className="flex flex-row justify-start">
          <li className='pr-3'>
            <a href="https://www.instagram.com/abhinab_choudhury_/">
              <img width="32" height="32" src="https://img.icons8.com/ios/100/228BE6/instagram-new--v1.png" alt="instagram-new--v1" />
            </a>
          </li>
          <li className='mx-3'>
            <a href="https://www.linkedin.com/in/abhinab-choudhury-18022822b/">
              <img width="32" height="32" src="https://img.icons8.com/ios-filled/50/228BE6/linkedin.png" alt="linkedin" />
            </a>
          </li>
          <li className='mx-3'>
            <a href="https://twitter.com/abhinabc_">
              <img width="32" height="32" src="https://img.icons8.com/ios-glyphs/100/228BE6/twitterx--v2.png" alt="twitterx--v2" />
            </a>
          </li>
        </ul>
        <span className="font-thin text-sm">Developed by: Abhinab Choudhury</span>
      </div>

      <div className="font-bold flex flex-col justify-center">
        <div className='flex justify-end'>
          <span className="mt-auto mb-auto mx-3 font-extrabold">Framed</span>
          <img width="40" height="40" src="https://img.icons8.com/avantgarde/100/video-message.png" alt="video-message" />
        </div>
        <div className='mx-3 text-sm font-extralight'>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
