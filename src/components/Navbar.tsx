"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Phone, Info, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-lg">
            <Home className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary">THIAGO LOPES</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">seu imóvel começa aqui!</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Início</Link>
          <Link to="/imoveis" className="text-sm font-medium hover:text-primary transition-colors">Imóveis</Link>
          <Link to="/sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</Link>
          <Link to="/contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</Link>
          <Button variant="default" className="rounded-full px-6">
            Anunciar Imóvel
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-10">
                <Link to="/" className="text-lg font-semibold flex items-center gap-2"><Home size={20}/> Início</Link>
                <Link to="/imoveis" className="text-lg font-semibold flex items-center gap-2"><Search size={20}/> Imóveis</Link>
                <Link to="/sobre" className="text-lg font-semibold flex items-center gap-2"><Info size={20}/> Sobre</Link>
                <Link to="/contato" className="text-lg font-semibold flex items-center gap-2"><Phone size={20}/> Contato</Link>
                <Button className="w-full rounded-xl">Anunciar Imóvel</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;