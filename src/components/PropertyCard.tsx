"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PropertyProps {
  id: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  type: 'Venda' | 'Aluguel';
  financing: boolean;
}

const PropertyCard = ({ id, title, price, location, beds, baths, area, image, type, financing }: PropertyProps) => {
  return (
    <Link to={`/imovel/${id}`}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-card/50 backdrop-blur-sm">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <Badge className="bg-primary/90 backdrop-blur-md border-none px-3 py-1">
              {type}
            </Badge>
            <Badge variant={financing ? "secondary" : "destructive"} className="backdrop-blur-md border-none px-3 py-1 flex items-center gap-1">
              {financing ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
              {financing ? "Aceita Financiamento" : "Somente à Vista"}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center text-muted-foreground text-xs mb-2">
            <MapPin size={14} className="mr-1" />
            {location}
          </div>
          <h3 className="text-lg font-bold mb-2 line-clamp-1 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-xl font-black text-primary mb-4">{price}</p>
          
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/50">
            <div className="flex flex-col items-center">
              <div className="flex items-center text-muted-foreground text-xs mb-1">
                <Bed size={14} className="mr-1" /> Quartos
              </div>
              <span className="font-semibold">{beds}</span>
            </div>
            <div className="flex flex-col items-center border-x border-border/50">
              <div className="flex items-center text-muted-foreground text-xs mb-1">
                <Bath size={14} className="mr-1" /> Banheiros
              </div>
              <span className="font-semibold">{baths}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center text-muted-foreground text-xs mb-1">
                <Square size={14} className="mr-1" /> Área
              </div>
              <span className="font-semibold">{area}m²</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;