import React from 'react'

const Comment = ({comment}) => {
    let{authorUsername,content,timestamp,fileImagePath}=comment;
    return (
        <>

  <div className="px-5">
    <div className="bg-[#ede7f6] max-w-xl rounded-2xl px-[8px] py-[10px] shadow-lg hover:shadow-2xl transition duration-500 blogCardAuthor">
      <div className="mt-4">
        <p className="mt-4 text-md homeText text-gray-600 font-normal">{content}</p>
        <div className="flex justify-between items-center">
          <div className="mt-4 flex items-center space-x-4 pt-6">
            <div class="">
              <img class="w-12 h-12 rounded-full" src={fileImagePath} alt={authorUsername} />
            </div>
            <div className="text-sm font-semibold font-serif">{authorUsername} • <span className="font-normal"> {timestamp}</span></div>

            {/* Upvote Downvote component */}
            <div className="buttonContainer">
            <button type="button" class="h-[18px] w-[20px] -rotate-90 border-2 border-green-700 hover:bg-green-600 rounded-md p-[0.1rem]  inline-flex items-center  hover:text-white  hover:scale-[1.05] hover:duration-200 mr-[2px]">
              <svg aria-hidden="true" class="w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
          </button>
          <button type="button" class="h-[18px] w-[20px] rotate-90 border-2 border-red-700 hover:bg-red-600 rounded-md p-[0.1rem]  inline-flex items-center hover:text-white hover:scale-[1.05] hover:duration-200">
            <svg aria-hidden="true" class="w-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"clip-rule="evenodd"></path>
            </svg>
          </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default Comment