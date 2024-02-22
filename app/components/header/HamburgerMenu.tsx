import Link from "next/link";
import PrimaryButton from "../common/buttons/PrimaryButton";

interface HamburgerMenuProps {
    isOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen }) => {
    return (
        <div className={isOpen ? "fixed left-0 w-[65%] top-0 h-screen sm:hidden bg-[#ecf0f3] transition ease-in duration-500" : "hidden"} style={{ backgroundImage: `url('/images/HamburgerFrame.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="p-10">
                <ul className="text-lg mt-20">
                    <Link href='/'>
                        <li className="mb-4 uppercase text-lg">
                            Home
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="mb-4 uppercase text-lg">
                            About
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="mb-4 uppercase text-lg">
                            Services
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className="mb-4 uppercase text-lg">
                            Contact Us
                        </li>
                    </Link>
                </ul>
                <div className="absolute bottom-0 left-0 w-full flex justify-center pb-10">
                    <PrimaryButton label="Log out" bgColor="bg-[white]" textColor="text-primary-purple"/>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
