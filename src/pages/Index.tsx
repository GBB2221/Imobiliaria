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
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
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
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687940-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Luxury Home"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Encontre o seu <span className="text-primary-foreground bg-primary px-4 rounded-lg">Lugar Ideal</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-light">
            Thiago Lopes oferece curadoria exclusiva dos melhores imóveis de alto padrão do Brasil.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input 
                  placeholder="Cidade, bairro ou condomínio..." 
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
              <p className="text-muted-foreground">Processos transparentes e acompanhamento jurídico completo em todas as etapas.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold">Curadoria Premium</h3>
              <p className="text-muted-foreground">Apenas imóveis selecionados que atendem aos mais altos padrões de qualidade.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold">Atendimento 24/7</h3>
              <p className="text-muted-foreground">Suporte personalizado para que você não perca nenhuma oportunidade de negócio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Imóveis em Destaque</h2>
              <p className="text-muted-foreground">As melhores oportunidades selecionadas para você.</p>
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Quer vender seu imóvel?</h2>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Anuncie com quem entende do mercado de luxo e alcance os compradores certos com Thiago Lopes.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-lg font-bold" onClick={() => showSuccess("Iniciando processo de anúncio...")}>
            Falar com um Especialista
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;