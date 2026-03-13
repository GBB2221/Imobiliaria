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
    title: 'Cobertura Duplex no Jardins',
    price: 'R$ 4.500.000',
    location: 'Jardins, São Paulo',
    beds: 4,
    baths: 5,
    area: 320,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const
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
    type: 'Venda' as const
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
    type: 'Aluguel' as const
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
    type: 'Venda' as const
  },
  {
    id: '5',
    title: 'Loft Industrial Pinheiros',
    price: 'R$ 1.200.000',
    location: 'Pinheiros, São Paulo',
    beds: 1,
    baths: 2,
    area: 95,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const
  },
  {
    id: '6',
    title: 'Casa de Campo Moderna',
    price: 'R$ 2.100.000',
    location: 'Itu, São Paulo',
    beds: 4,
    baths: 4,
    area: 380,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    type: 'Venda' as const
  }
];

const Properties = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-primary mb-2">Nossos Imóveis</h1>
            <p className="text-muted-foreground">Explore as melhores opções do mercado.</p>
          </div>
          
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar imóveis..." className="pl-10 h-12 rounded-xl" />
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