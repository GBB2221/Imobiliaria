"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';

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
  },
  {
    id: '5',
    title: 'Terreno em Condomínio Fechado',
    price: 'R$ 350.000',
    location: 'Jardim Primavera, Duque de Caxias - RJ',
    beds: 0,
    baths: 0,
    area: 450,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const,
    financing: false
  },
  {
    id: '6',
    title: 'Casa Duplex em Vila São Luiz',
    price: 'R$ 680.000',
    location: 'Vila São Luiz, Duque de Caxias - RJ',
    beds: 3,
    baths: 2,
    area: 150,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const,
    financing: true
  }
];

const Properties = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-primary mb-2">Imóveis em Caxias</h1>
            <p className="text-muted-foreground">Explore as melhores opções na Baixada Fluminense.</p>
          </div>
          
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar por bairro..." className="pl-10 h-12 rounded-xl" />
            </div>
            <Button variant="outline" className="h-12 rounded-xl gap-2">
              <SlidersHorizontal size={18} /> Filtros
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROPERTIES.map((prop) => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="rounded-full px-8">Carregar mais imóveis</Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;