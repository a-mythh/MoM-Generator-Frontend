import React from "react";

function Header() {
  return (
    <header className="my-8 font-poppins text-center flex flex-col items-center justify-center p-5 text-5xl text-white">
      <img
        src="../src/assets/logo.png"
        alt="Logo"
        className="h-52 filter invert"
      />
      Minutes of the Meeting
    </header>
  );
}

export default Header;
