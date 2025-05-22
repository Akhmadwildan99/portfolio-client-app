import React from 'react'
import BionicImage from '/assets/pt_bionic_teknologi_indonesia_logo.jpeg'
import IdstarImage from '/assets/pt_idstar_cipta_teknologi_logo.jpeg'
import SinarImage from '/assets/sinar_sukses_mandiri_logo.jpeg'

function Experiences() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-12 shadow-2xl ">
        <h2 className="flex text-lg font-semibold text-zinc-500 ">
            <i className="ri-macbook-line ri-lg"></i>
            <span className="ml-3">Works</span>
        </h2>
        <ol className="mt-6 space-y-4">
            <li className="flex gap-4">
                <div className="relative mt-1 flex h-20 w-20 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 d">
                    <img
                        src={IdstarImage}
                        alt="Idstar Image"
                        className="h-16 w-16 rounded-full object-cover"
                    />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900">Idstar</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 ">Java Developer</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2025 until Present">
                        <time datetime="2025">2025</time>
                        <span aria-hidden="true">-</span>
                        <time datetime="2025">Present</time>
                    </dd>
                </dl>
            </li>
            <li className="flex gap-4">
                <div className="relative mt-1 flex h-20 w-20 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 d">
                    <img
                        src={SinarImage}
                        alt="Sinar Image"
                        className="h-16 w-16 rounded-full object-cover"
                    />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900">Fullstack Web Dev</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 ">Java Developer</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2024 until 2025">
                        <time datetime="2024">2024</time>
                        <span aria-hidden="true">-</span>
                        <time datetime="2025">2025</time>
                    </dd>
                </dl>
            </li>
            <li className="flex gap-2">
                <div className="relative mt-1 flex h-20 w-20 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 d">
                    <img
                        src={BionicImage}
                        alt="Bionic Image"
                        className="h-16 w-16 rounded-full object-cover"
                    />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-1">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900">Bionic Teknologi Indonesia</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 ">Fullstack Web Dev</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2022 until 2024">
                        <time datetime="2022">2022</time>
                        <span aria-hidden="true">-</span>
                        <time datetime="2024">2024</time>
                    </dd>
                </dl>
            </li>
        </ol>
    </div>
  )
}

export default Experiences;