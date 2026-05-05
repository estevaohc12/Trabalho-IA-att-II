"use client";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Olá IA - Meu Primeiro Projeto
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Este projeto faz parte da disciplina de IA aplicada ao Dev de Micro SaaS no UNILAVRAS.
      </p>
      <MadeWithDyad />
      <footer className="mt-auto text-sm text-gray-600">
        Desenvolvido por Estevão Henrique
      </footer>
    </div>
  );
};

export default Index;