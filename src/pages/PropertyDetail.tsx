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
    title: 'Casa de Luxo em Jardim Primavera',
    price: 'R$ 1.250.000',
    location: 'Jardim Primavera, Duque de Caxias - RJ',
    beds: 4,
    baths: 3,
    area: 250,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'Venda' as const,
    financing: true,
    description: 'Espetacular casa linear em um dos bairros mais valorizados de Duque de Caxias. Com acabamento de primeira linha, porcelanato em todos os cômodos e uma área de lazer privativa com piscina e churrasqueira. Localizada em rua tranquila e segura, próxima a comércios e vias de acesso.',
    features: ['Piscina', 'Área Gourmet', 'Garagem para 3 carros', 'Suíte Master', 'Cozinha Planejada']
  },
  {
    id: '2',
    title: 'Mansão Exclusiva em Xerém',
    price: 'R$ 2.800.000',
    location: 'Xerém, Duque de Caxias - RJ',
    beds: 5,
    baths: 6,
    area: 600,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'Venda' as const,
    financing: true,
    description: 'Propriedade cinematográfica em Xerém, cercada por muito verde e tranquilidade. Projeto arquitetônico moderno com integração total entre os ambientes. Ideal para quem busca exclusividade, conforto e contato com a natureza sem abrir mão da sofisticação.',
    features: ['Campo de Futebol', 'Sauna', 'Casa de Hóspedes', 'Pomar', 'Segurança 24h']
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
      
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary px-4 py-1 text-sm">{property.type}</Badge>
              <Badge variant={property.financing ? "secondary" : "destructive"} className="px-4 py-1 text-sm flex items-center gap-2">
                {property.financing ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                {property.financing ? "Aceita Financiamento" : "Somente à Vista"}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tight mb-4">{property.title}</h1>
            <div className="flex items-center text-muted-foreground text-lg">
              <MapPin size={20} className="mr-2 text-primary" />
              {property.location}
            </div>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-muted-foreground mb-1 uppercase tracking-widest">Valor do Investimento</p>
            <p className="text-4xl md:text-5xl font-black text-primary">{property.price}</p>
            <div className="flex gap-3 mt-6 justify-start md:justify-end">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary hover:text-white transition-all" onClick={() => showSuccess("Link copiado!")}>
                <Share2 size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary hover:text-white transition-all" onClick={() => showSuccess("Adicionado aos favoritos!")}>
                <Heart size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Gallery */}
            <div className="space-y-6">
              <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src={activeImage} alt={property.title} className="w-full h-full object-cover transition-all duration-700" />
              </div>
              <div className="grid grid-cols-3 gap-6">
                {property.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(img)}
                    className={`aspect-video rounded-2xl overflow-hidden border-4 transition-all duration-300 ${activeImage === img ? 'border-primary scale-95 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-4">
                  <Bed size={28} />
                </div>
                <span className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Quartos</span>
                <span className="font-black text-2xl">{property.beds}</span>
              </div>
              <div className="flex flex-col items-center text-center border-x border-slate-200">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-4">
                  <Bath size={28} />
                </div>
                <span className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Banheiros</span>
                <span className="font-black text-2xl">{property.baths}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-4">
                  <Square size={28} />
                </div>
                <span className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Área Total</span>
                <span className="font-black text-2xl">{property.area}m²</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary tracking-tight">Sobre este Imóvel</h2>
              <p className="text-muted-foreground leading-relaxed text-xl font-light">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary tracking-tight">Diferenciais Exclusivos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-lg font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Contact */}
          <div className="space-y-8">
            <Card className="border-none shadow-2xl sticky top-28 rounded-[2.5rem] overflow-hidden">
              <div className="bg-primary p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Agende uma Visita</h3>
                <p className="text-white/80 font-light">Preencha os dados e entraremos em contato em até 15 minutos.</p>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleContact} className="space-y-5">
                  <Input placeholder="Seu Nome Completo" required className="h-14 rounded-2xl bg-slate-50 border-none text-lg px-6" />
                  <Input placeholder="Seu Melhor E-mail" type="email" required className="h-14 rounded-2xl bg-slate-50 border-none text-lg px-6" />
                  <Input placeholder="Seu Telefone / WhatsApp" required className="h-14 rounded-2xl bg-slate-50 border-none text-lg px-6" />
                  <Textarea placeholder="Como podemos te ajudar?" className="rounded-2xl bg-slate-50 border-none text-lg p-6 min-h-[120px]" />
                  <Button type="submit" className="w-full h-16 rounded-2xl text-xl font-bold gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                    <MessageSquare size={24} /> Enviar Mensagem
                  </Button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="text-sm text-center text-muted-foreground mb-6 uppercase tracking-widest">Atendimento Imediato</p>
                  <Button variant="outline" className="w-full h-16 rounded-2xl border-green-500 text-green-600 hover:bg-green-50 gap-3 text-lg font-bold" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
                    <Phone size={24} /> (21) 99999-9999
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