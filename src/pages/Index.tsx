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
    title: 'Cobertura Duplex no Jardins',
    price: 'R$ 4.500.000',
    location: 'Jardins, São Paulo',
    beds: 4,
    baths: 5,
    area: 320,
    image: 'https://images.unsplash.com/photo-1600607687940-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const,
    financing: true
  },
  {
    id: '2',
    title: 'Casa Contemporânea Alphaville',
    price: 'R$ 3.200.000',
    location: 'Alphaville, Barueri',
    beds: 5,
    baths: 6,
    area: 450,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const,
    financing: true
  },
  {
    id: '3',
    title: 'Apartamento Vista Mar',
    price: 'R$ 12.000 /mês',
    location: 'Leblon, Rio de Janeiro',
    beds: 3,
    baths: 3,
    area: 180,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    type: 'Aluguel' as const,
    financing: false
  },
  {
    id: '4',
    title: 'Mansão Minimalista',
    price: 'R$ 8.900.000',
    location: 'Lago Sul, Brasília',
    beds: 6,
    baths: 8,
    area: 720,
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
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.35] scale-105 animate-in fade-in duration-1000"
            alt="Luxury Home"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
            Encontre o seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 drop-shadow-sm">Lugar Ideal</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Thiago Lopes oferece uma curadoria exclusiva dos imóveis mais extraordinários do Brasil, onde cada detalhe é pensado para o seu estilo de vida.
          </p>
          
          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input 
                  placeholder="Onde você quer morar?" 
                  className="bg-white/95 text-slate-900 h-16 rounded-2xl border-none focus-visible:ring-primary text-lg px-6"
                />
              </div>
              <select className="bg-white/95 text-slate-900 h-16 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-primary text-lg appearance-none cursor-pointer">
                <option>Tipo de Imóvel</option>
                <option>Casa de Luxo</option>
                <option>Cobertura</option>
                <option>Apartamento Garden</option>
              </select>
              <Button className="h-16 rounded-2xl text-xl font-bold gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" onClick={() => navigate('/imoveis')}>
                <Search size={24} /> Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Segurança Jurídica</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Processos transparentes e acompanhamento jurídico especializado em todas as etapas da sua aquisição.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <Star size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Curadoria Premium</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Apenas imóveis que superam as expectativas, selecionados criteriosamente por nossa equipe de especialistas.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <Clock size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Atendimento 24/7</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">Suporte personalizado e imediato para garantir que você nunca perca a oportunidade de fechar o melhor negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">Imóveis em Destaque</h2>
              <p className="text-xl text-muted-foreground">As oportunidades mais exclusivas do mercado atual.</p>
            </div>
            <Button variant="outline" className="flex gap-2 rounded-full px-8 h-14 text-lg border-primary/20 hover:bg-primary hover:text-white transition-all" onClick={() => navigate('/imoveis')}>
              Ver todos os imóveis <ArrowRight size={20} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {MOCK_PROPERTIES.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight">Quer vender seu imóvel?</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Anuncie com quem domina o mercado de luxo. Utilizamos estratégias de marketing digital avançadas para conectar seu imóvel aos compradores certos.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-16 h-20 text-xl font-bold shadow-2xl hover:scale-105 transition-transform" onClick={() => showSuccess("Iniciando processo de anúncio...")}>
            Falar com um Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;