"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-white" />
              <span className="text-xl font-bold tracking-tight text-white">THIAGO LOPES</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialista em imóveis de alto padrão, oferecendo as melhores oportunidades de investimento e moradia com transparência e exclusividade.
            </p>
            <div className="flex space-x-4 pt-2">
              <Instagram className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
              <Facebook className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/imoveis" className="hover:text-white transition-colors">Todos os Imóveis</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Thiago Lopes</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Categorias</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="#" className="hover:text-white transition-colors">Apartamentos de Luxo</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Casas em Condomínio</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Coberturas</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terrenos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white shrink-0" />
                <span>Av. Principal, 1000 - Centro<br/>São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white shrink-0" />
                <span>contato@thiagolopes.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Thiago Lopes Imobiliária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;