function Video() {
  return (
    <div className="relative h-[291px] w-[521px] rounded-[20px] ml-[190px] mt-[28px] ">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute bottom-4 left-4 text-left">
        <button className="mx-[234px] my-[120px] inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.5 51C39.5833 51 51 39.5833 51 25.5C51 11.4167 39.5833 0 25.5 0C11.4167 0 0 11.4167 0 25.5C0 39.5833 11.4167 51 25.5 51ZM21 32.9282L33 26L21 19.0718V32.9282Z"
              fill="#D9D9D9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Video;
