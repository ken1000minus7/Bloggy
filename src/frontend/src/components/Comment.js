import React from 'react'

const Comment = ({comment}) => {
    let{authorUsername,content,timestamp,fileImagePath}=comment;
    return (
        <>

  <div className="px-5">
    <div className="bg-[#ede7f6] max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
      <div className="mt-4">
        <p className="mt-4 text-md text-gray-600 font-normal">{content}</p>
        <div className="flex justify-between items-center">
          <div className="mt-4 flex items-center space-x-4 py-6">
            <div class="">
              <img class="w-12 h-12 rounded-full" src={fileImagePath} alt={authorUsername} />
            </div>
            <div className="text-sm font-semibold font-serif">{authorUsername} • <span className="font-normal"> {timestamp}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>

        </>
    )
}

export default Comment