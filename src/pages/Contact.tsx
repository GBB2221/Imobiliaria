"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Fale Conosco</h1>
            <p className="text-xl text-muted-foreground">Estamos prontos para ajudar você a encontrar seu novo lar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Informações de Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefone</p>
                      <p className="font-bold">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail</p>
                      <p className="font-bold">contato@thiagolopes.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Endereço</p>
                      <p className="font-bold">Av. Principal, 1000 - Centro, São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Siga-nos</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Instagram size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Facebook size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Linkedin size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome Completo</label>
                    <Input placeholder="Seu nome" className="h-12 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" className="h-12 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Telefone</label>
                    <Input placeholder="(00) 00000-0000" className="h-12 rounded-xl" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensagem</label>
                    <Textarea placeholder="Como podemos ajudar?" className="min-h-[150px] rounded-xl" required />
                  </div>
                  <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;