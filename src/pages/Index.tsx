"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { showSuccess } from '@/utils/toast';
import { useNavigate } from 'react-router-dom';

const MOCK_PROPERTIES = [
  {
    id: '1',
    title: 'Casa de Luxo em Jardim Primavera',
    price: 'R$ 1.250.000',
    location: 'Jardim Primavera, Duque de Caxias - RJ',
    beds: 4,
    baths: 3,
    area: 250,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const,
    financing: true
  },
  {
    id: '2',
    title: 'Mansão Exclusiva em Xerém',
    price: 'R$ 2.800.000',
    location: 'Xerém, Duque de Caxias - RJ',
    beds: 5,
    baths: 6,
    area: 600,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const,
    financing: true
  },
  {
    id: '3',
    title: 'Apartamento Moderno no Centro',
    price: 'R$ 450.000',
    location: 'Centro, Duque de Caxias - RJ',
    beds: 2,
    baths: 2,
    area: 85,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const,
    financing: true
  },
  {
    id: '4',
    title: 'Casa Contemporânea em Santa Cruz da Serra',
    price: 'R$ 950.000',
    location: 'Santa Cruz da Serra, Duque de Caxias - RJ',
    beds: 3,
    baths: 3,
    area: 180,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const,
    financing: true
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Luxury Home"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Seu novo lar em <br />
            <span className="text-primary-foreground bg-primary px-4 rounded-lg">Duque de Caxias</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-light">
            Thiago Lopes oferece as melhores oportunidades de investimento e moradia na Baixada Fluminense.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input 
                  placeholder="Bairro (Jardim Primavera, Xerém, Centro...)" 
                  className="bg-white/90 text-slate-900 h-14 rounded-xl border-none focus-visible:ring-primary"
                />
              </div>
              <select className="bg-white/90 text-slate-900 h-14 rounded-xl px-4 outline-none focus:ring-2 focus:ring-primary">
                <option>Tipo de Imóvel</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Terreno</option>
              </select>
              <Button className="h-14 rounded-xl text-lg font-bold gap-2" onClick={() => navigate('/imoveis')}>
                <Search size={20} /> Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold">Segurança Jurídica</h3>
              <p className="text-muted-foreground">Especialista no mercado de Caxias, garantindo transações seguras e transparentes.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold">Oportunidades Únicas</h3>
              <p className="text-muted-foreground">Acesso antecipado aos melhores lançamentos e revendas da região.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold">Agilidade no Processo</h3>
              <p className="text-muted-foreground">Aprovação de crédito e documentação com rapidez e eficiência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Destaques em Caxias</h2>
              <p className="text-muted-foreground">Confira nossa seleção exclusiva na cidade.</p>
            </div>
            <Button variant="outline" className="hidden md:flex gap-2 rounded-full" onClick={() => navigate('/imoveis')}>
              Ver todos <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_PROPERTIES.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Quer vender em Caxias?</h2>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Anuncie com quem domina o mercado local e venda seu imóvel pelo valor justo e com rapidez.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-lg font-bold" onClick={() => showSuccess("Iniciando processo de anúncio...")}>
            Falar com Thiago Lopes
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;