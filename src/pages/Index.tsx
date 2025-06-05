
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, PieChart, Target, ArrowRight, Smartphone, BarChart3 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              WiseBank
            </h1>
          </div>
          <Link to="/auth">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              Se connecter
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Votre{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Portefeuille Intelligent
            </span>{' '}
            Personnalisé
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Gérez vos finances avec intelligence grâce à l'IA, suivez vos budgets en temps réel,
            et recevez des conseils financiers personnalisés pour atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-3">
                Commencer Gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Voir la Démo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Fonctionnalités Intelligentes
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des outils puissants pour transformer votre gestion financière
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Budgets Intelligents</CardTitle>
              <CardDescription className="text-gray-600">
                Répartition automatique de votre budget avec des conseils IA personnalisés
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Analyses Prédictives</CardTitle>
              <CardDescription className="text-gray-600">
                Prédictions de votre évolution financière basées sur vos habitudes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Objectifs Personnalisés</CardTitle>
              <CardDescription className="text-gray-600">
                Définissez et atteignez vos objectifs financiers avec un suivi intelligent
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Sécurité Avancée</CardTitle>
              <CardDescription className="text-gray-600">
                Chiffrement de bout en bout et protection de vos données sensibles
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Interface Intuitive</CardTitle>
              <CardDescription className="text-gray-600">
                Design moderne et ergonomique pour une expérience utilisateur optimale
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl">Conseils IA</CardTitle>
              <CardDescription className="text-gray-600">
                Recommandations financières intelligentes basées sur les tendances du marché
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Prêt à Transformer Votre Gestion Financière ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'utilisateurs qui font confiance à WiseBank
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Créer Mon Compte Gratuitement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">WiseBank</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Votre partenaire pour une gestion financière intelligente
            </p>
            <p className="text-sm text-gray-500">
              © 2024 WiseBank. Tous droits réservés. | Monnaie: FCFA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
