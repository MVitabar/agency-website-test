"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-blk.svg";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50 fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <div>
          <Link href="/home">
            <Image alt="logo" src={logo} width={100} height={48} />
          </Link>
        </div>

        {/* Botón de menú móvil */}
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-stone-950 p-2"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-10 w-10 text-stone-950 font-bold "
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Menú principal en escritorio */}
        <div className="hidden sm:flex gap-4 text-stone-950 items-center">
          <Link href="/home">Home Page</Link>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/career">Career</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </nav>

      {/* Menú móvil */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="sm:hidden"
      >
        <DialogPanel className="fixed inset-y-0 right-0 w-full bg-slate-50 text-stone-950  p-6 font-normal text-base  ">
          <div className="flex items-center justify-between">
            <Link href="/home" onClick={() => setMobileMenuOpen(false)}>
              <Image alt="logo" src={logo} width={100} height={48} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-stone-950 p-2"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-10 w-10 text-stone-950 font-bold "
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 space-y-11 ">
            <Link
              href="/home"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home Page
            </Link>
            <Link
              href="/about"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/career"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Career
            </Link>
            <Link
              href="/blog"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="block text-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-lime-400 hover:bg-lime-500 "
            >
              Get in touch
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
