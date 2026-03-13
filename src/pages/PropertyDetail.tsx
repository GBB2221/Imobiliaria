"use client";

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Bed, Bath, Square, MapPin, Share2, Heart, 
  CheckCircle2, XCircle, Phone, MessageSquare 
} from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const MOCK_PROPERTIES = [
  {
    id: '1',
    title: 'Cobertura Duplex no Jardins',
    price: 'R$ 4.500.000',
    location: 'Jardins, São Paulo',
    beds: 4,
    baths: 5,
    area: 320,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687940-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'Venda' as const,
    financing: true,
    description: 'Exclusiva cobertura duplex totalmente reformada no coração dos Jardins. Com acabamentos de altíssimo padrão, automação residencial completa e uma vista panorâmica de tirar o fôlego. O imóvel conta com amplo living para 3 ambientes, cozinha gourmet integrada e área externa privativa com piscina aquecida.',
    features: ['Piscina Privativa', 'Automação', '4 Vagas', 'Depósito', 'Ar Condicionado']
  },
  {
    id: '2',
    title: 'Casa Contemporânea Alphaville',
    price: 'R$ 3.200.000',
    location: 'Alphaville, Barueri',
    beds: 5,
    baths: 6,
    area: 450,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'Venda' as const,
    financing: true,
    description: 'Projeto arquitetônico moderno com integração total entre os ambientes. Localizada em um dos condomínios mais seguros de Alphaville, esta residência oferece conforto e sofisticação. Pé direito duplo, iluminação natural abundante e área de lazer completa com espaço gourmet e jardim planejado.',
    features: ['Espaço Gourmet', 'Jardim', 'Escritório', 'Suíte Master', 'Energia Solar']
  }
];

const PropertyDetail = () => {
  const { id } = useParams();
  const property = MOCK_PROPERTIES.find(p => p.id === id) || MOCK_PROPERTIES[0];
  const [activeImage, setActiveImage] = useState(property.images[0]);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Sua solicitação foi enviada! Thiago Lopes entrará em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-primary">{property.type}</Badge>
              <Badge variant={property.financing ? "secondary" : "destructive"} className="flex items-center gap-1">
                {property.financing ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                {property.financing ? "Aceita Financiamento" : "Somente à Vista"}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-primary">{property.title}</h1>
            <div className="flex items-center text-muted-foreground mt-2">
              <MapPin size={18} className="mr-1" />
              {property.location}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Valor do Imóvel</p>
            <p className="text-3xl font-black text-primary">{property.price}</p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => showSuccess("Link copiado!")}>
                <Share2 size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={() => showSuccess("Adicionado aos favoritos!")}>
                <Heart size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img src={activeImage} alt={property.title} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {property.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(img)}
                    className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary scale-95' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-3xl">
              <div className="flex flex-col items-center text-center">
                <Bed className="text-primary mb-2" size={24} />
                <span className="text-sm text-muted-foreground">Quartos</span>
                <span className="font-bold text-lg">{property.beds}</span>
              </div>
              <div className="flex flex-col items-center text-center border-x border-slate-200">
                <Bath className="text-primary mb-2" size={24} />
                <span className="text-sm text-muted-foreground">Banheiros</span>
                <span className="font-bold text-lg">{property.baths}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Square className="text-primary mb-2" size={24} />
                <span className="text-sm text-muted-foreground">Área Total</span>
                <span className="font-bold text-lg">{property.area}m²</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Descrição do Imóvel</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Diferenciais</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Contact */}
          <div className="space-y-6">
            <Card className="border-none shadow-2xl sticky top-28">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Tenho Interesse</h3>
                <form onSubmit={handleContact} className="space-y-4">
                  <Input placeholder="Seu Nome" required className="h-12 rounded-xl" />
                  <Input placeholder="Seu E-mail" type="email" required className="h-12 rounded-xl" />
                  <Input placeholder="Seu Telefone" required className="h-12 rounded-xl" />
                  <Textarea placeholder="Gostaria de agendar uma visita..." className="rounded-xl min-h-[100px]" />
                  <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold gap-2">
                    <MessageSquare size={20} /> Enviar Mensagem
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-sm text-center text-muted-foreground mb-4">Ou fale agora pelo WhatsApp</p>
                  <Button variant="outline" className="w-full h-14 rounded-xl border-green-500 text-green-600 hover:bg-green-50 gap-2" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
                    <Phone size={20} /> (11) 99999-9999
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;