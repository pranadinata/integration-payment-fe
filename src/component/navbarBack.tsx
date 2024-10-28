
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/navigation';


interface Props {
    name: string; // Define the expected prop type
}

const NavbarBack = ({ name }: Props) => {
    const router = useRouter();
    const kembali = () => {
        router.push('/');
    };

    return (
        <>
            <nav className="bg-white py-4 px-4">
                <div className="container mx-auto flex items-center">
                    <div className="text-black font-bold text-lg flex items-center gap-2">
                        <a href="#" onClick={kembali} className="inline-flex items-center">
                            <i className="text-red-500 fas fa-arrow-left"></i> &nbsp;
                            <span className="pl-10 text-black font-semibold">{name}</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarBack;
