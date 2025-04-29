import Link from "next/link";

export default function Header() {
    const menuList = [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about-us",
      },
      {
        name: "Contact",
        link: "/contact-us",
      },
    ];
    return (
        <nav className="sticky top-0 z-50 bg-white bg-opacity-65 backdrop-blur-2xl py-3 px-4 md:py-1 md:px-16 border-b flex items-center justify-between">
            <Link href={"/"}>
            <img className="h-10 md:h-20" src="/WishBasket.svg" alt="Logo" />
            </Link>
            <div className="hidden md:flex gap-2 items-center font-semibold">
            {menuList?.map((item) => {
          return (
            <Link href={item?.link}>
              <button className="text-sm px-4 py-2 rounded-lg hover:bg-gray-50">
                {item?.name}
              </button>
            </Link>
          );
        })}
            </div>
            <Link href={"/login"}>
            <button className="hidden md:block text-sm px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                Login
                </button>
            </Link>
        </nav>
    );
}  