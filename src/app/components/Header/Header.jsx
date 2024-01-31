import Link from "next/link";

const Header = () => {
    return (
        <header className="border-solid border-b-2 border-slate-200 pt-8">
            <Link href={'/'} className="text-sky-600 font-bold text-xl px-24">Podcaster</Link>
        </header>
    );
};

export default Header;
