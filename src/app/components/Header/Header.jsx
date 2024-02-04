import Link from "next/link";

const Header = () => {
    return (
        <header className="mt-6">
            <Link href={'/'} className="text-sky-600 font-bold text-2xl px-24">Podcaster</Link>
            <div className="border-b border-gray-300 mx-4 my-2"></div>

        </header>
    );
};

export default Header;
