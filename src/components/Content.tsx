import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Content() {
  return (
    <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Morning</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong>Blurryface</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong>Blurryface</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong>Blurryface</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong>Blurryface</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong>Blurryface</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={104} height={104} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong>Blurryface</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Evoney Mendonça</h2>

          <div className='grid grid-cols-6 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong className='font-semibold'>Blurryface</strong>
              <span className='text-sm text-zinc-500'>Stressed out and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong className='font-semibold'>Blurryface</strong>
              <span className='text-sm text-zinc-500'>Stressed out and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong className='font-semibold'>Blurryface</strong>
              <span className='text-sm text-zinc-500'>Stressed out and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong className='font-semibold'>Blurryface</strong>
              <span className='text-sm text-zinc-500'>Stressed out and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' width={120} height={120} alt="Album blurryface da banda Twenty One Pilots"></Image>
              <strong className='font-semibold'>Blurryface</strong>
              <span className='text-sm text-zinc-500'>Stressed out and more</span>
            </a>
          </div>
        </main>
  )
}