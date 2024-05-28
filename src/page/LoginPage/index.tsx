import mainLogo from '../../assets/icon/mainicon-white.png';
import mbca from '../../assets/icon/login/m-bca.png';
import klikbca from '../../assets/icon/login/klikbca.png';
import infobca from '../../assets/icon/login/infobca.png';
import info from '../../assets/icon/info.png';
import './styles.css';

import colors from '../../utils/constants';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { useState } from 'react';
const LoginPage = () => {
    const [open, setOpen] = useState<boolean>(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <div className='h-dvh' style={{ background: `radial-gradient(${colors.primaryLight},${colors.primaryDark})` }}>
            <div className='absolute bottom-0 w-full h-[450px]' style={{ borderRadius: 25, background: `linear-gradient(180deg,${colors.primaryDark}, #000000)` }}>
            </div>
            <div className='absolute w-full py-10'>
                <div className='py-5'>
                    <div className='flex justify-end'>
                        <img src={info} alt="" className='w-5 h-5 mx-4' />
                    </div>
                    <div className='flex justify-center'>
                        <img src={mainLogo} alt="" style={{ height: 32 }} />
                    </div>
                </div>
                <div className='p-4' >
                    <div className='border-2 rounded-lg w-full overflow-hidden'>
                        <div onClick={onOpenModal} className='btn flex flex-row p-2 py-3  items-center border border-white' style={{ background: `linear-gradient(180deg,${colors.primaryLight},${colors.primaryDark})` }}>
                            <div className='bg-slate-300 p-2 w-[70px] py-3 rounded-md' >
                                <img src={mbca} className='h-10' alt="" />
                            </div>
                            <p className=' text-xl  font-bold px-4'>m-BCA</p>
                        </div>
                        <div className='btn flex flex-row p-2 py-3 items-center border border-white' style={{ background: `linear-gradient(180deg,${colors.primaryLight},${colors.primaryDark})` }}>
                            <div className='bg-slate-300 p-2 py-3 w-[70px] rounded-md' >
                                <img src={klikbca} className='h-10' alt="" />
                            </div>
                            <p className=' text-xl  font-bold px-4'>KlikBCA</p>
                        </div>
                        <div className='btn flex flex-row p-2 py-3 items-center border border-white' style={{ background: `linear-gradient(180deg,${colors.primaryLight},${colors.primaryDark})` }}>
                            <div className='bg-slate-300 p-2 py-3 w-[70px] rounded-md' >
                                <img src={infobca} className='h-8' alt="" />
                            </div>
                            <p className=' text-xl  font-bold px-4'>m-BCA</p>
                        </div>
                    </div>

                    <div className='btn w-full py-4 my-5 rounded-lg hover:bg-blue-600 '>
                        <p className='font-bold text-center'>Buka Rekening Baru</p>
                    </div>
                    <div className='btn w-full py-4 my-5 rounded-lg'>
                        <p className='font-bold text-center'>Ganti Kode Akses</p>
                    </div>
                    <div className='btn w-full py-4 my-5 rounded-lg' >
                        <p className='font-bold text-center'>Flazz</p>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 w-full p-4 bg-white'>
                <p className='text-blue-800 text-center'>Selamat datang di <span className='italic'>BCA mobile</span> </p>
            </div>
            <Modal open={open} onClose={onCloseModal}>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-white font-semibold text-lg pb-4'>Kode Akses</h2>
                    <input className='h-10 px-2' type="text" />
                    <div className='flex flex-row mt-4 gap-4 w-full items-center'>
                        <div className='flex-1 border border-black px-4 py-2 rounded-md' style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} onClick={onCloseModal}>
                            <p className='text-white text-center font-semibold'>Cancel</p>
                        </div>
                        <div className='flex-1 border border-black px-4 py-2 rounded-md' style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} onClick={onCloseModal}>
                            <p className='text-white text-center font-semibold'>Login</p>
                        </div>
                    </div>
                </div>
            </Modal >
        </div >
    )

}


export default LoginPage;