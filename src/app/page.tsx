"use client"
import NavbarBack from "@/component/navbarBack";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const HomeButton = () => {
    console.log('home');
  }

  const DetailUsers = () => {
      router.push('/pages/detail-users');
  }
  const HalamanTopUp = () => {
    router.push('/pages/top-up-bank');
  }

  const ResetUsers = () => {
    router.push('/pages/input-no-telepon');
}

  return (
   <>
      <div className="min-h-screen bg-white">
        <NavbarBack name={'Home Menu'}></NavbarBack>
        <div className=" flex flex-col items-center">
          <div className="container text-black px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={HomeButton}>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-home text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Home </p>
                    <p className="text-sm text-gray-600">Kembali ke menu utama</p>
                  </div>
                </div>
                {/* <i className="fas fa-arrow-right"></i> */}
              </div>

              <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={DetailUsers}>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-user-alt text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Detail Users</p>
                    <p className="text-sm text-gray-600">Melihat detail users</p>
                  </div>
                </div>
                {/* <i className="fas fa-arrow-right"></i> */}
              </div>


              <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={HalamanTopUp}>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-money-bill-wave text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Top Up</p>
                    <p className="text-sm text-gray-600">Pergi kehalaman top up </p>
                  </div>
                </div>
                {/* <i className="fas fa-arrow-right"></i> */}
              </div>

              <div className="bg-white p-4 shadow-lg rounded-lg flex items-center justify-between" onClick={ResetUsers}>
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <i className="fas fa-recycle text-white"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Reset users</p>
                    <p className="text-sm text-gray-600">Pergi kehalaman input no telepon </p>
                  </div>
                </div>
                {/* <i className="fas fa-arrow-right"></i> */}
              </div>

              
            </div>
          </div>
        </div>


      </div>
   </>
  );
}
