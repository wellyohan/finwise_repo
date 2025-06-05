
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, PieChart, Target, ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "Connexion Sécurisée",
      description: "Connectez-vous en toute sécurité avec votre email et mot de passe",
      image: "/placeholder.svg",
      features: ["Authentification sécurisée", "Protection des données", "Accès rapide"]
    },
    {
      title: "Questionnaire Personnalisé",
      description: "Répondez à quelques questions pour personnaliser votre expérience",
      image: "/placeholder.svg",
      features: ["Questions intelligentes", "Profil financier", "Recommandations personnalisées"]
    },
    {
      title: "Tableau de Bord Intelligent",
      description: "Visualisez vos finances en temps réel avec des graphiques interactifs",
      image: "/placeholder.svg",
      features: ["Graphiques dynamiques", "Analyses en temps réel", "Interface intuitive"]
    },
    {
      title: "Gestion Budgétaire",
      description: "Créez et suivez vos budgets par catégorie facilement",
      image: "/placeholder.svg",
      features: ["Budgets personnalisés", "Suivi des dépenses", "Alertes intelligentes"]
    },
    {
      title: "Conseils IA",
      description: "Recevez des conseils financiers personnalisés grâce à l'intelligence artificielle",
      image: "/placeholder.svg",
      features: ["Conseils sur mesure", "Optimisation financière", "Prédictions intelligentes"]
    }
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= demoSteps.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  const progress = ((currentStep + 1) / demoSteps.length) * 100;

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
              WiseBank - Démonstration
            </h1>
          </div>
          <Link to="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Retour</span>
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Découvrez WiseBank en Action
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explorez toutes les fonctionnalités de votre futur portefeuille intelligent 
            à travers cette démonstration interactive.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button 
              onClick={startDemo} 
              disabled={isPlaying}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>{isPlaying ? 'Démonstration en cours...' : 'Démarrer la Démo'}</span>
            </Button>
            
            <Button 
              onClick={resetDemo} 
              variant="outline" 
              size="lg"
              className="flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Recommencer</span>
            </Button>
          </div>

          {isPlaying && (
            <div className="max-w-md mx-auto">
              <Progress value={progress} className="h-2 mb-2" />
              <p className="text-sm text-gray-500">
                Étape {currentStep + 1} sur {demoSteps.length}
              </p>
            </div>
          )}
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="mb-8 border-2 border-blue-200 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {currentStep === 0 && <TrendingUp className="w-8 h-8 text-white" />}
                {currentStep === 1 && <Target className="w-8 h-8 text-white" />}
                {currentStep === 2 && <PieChart className="w-8 h-8 text-white" />}
                {currentStep === 3 && <TrendingUp className="w-8 h-8 text-white" />}
                {currentStep === 4 && <Target className="w-8 h-8 text-white" />}
              </div>
              <CardTitle className="text-2xl mb-2">
                {demoSteps[currentStep]?.title}
              </CardTitle>
              <CardDescription className="text-lg">
                {demoSteps[currentStep]?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-800">
                    Fonctionnalités principales :
                  </h4>
                  <ul className="space-y-2">
                    {demoSteps[currentStep]?.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 text-center">
                  <div className="w-full h-48 bg-white rounded-lg shadow-inner flex items-center justify-center">
                    <div className="text-gray-400">
                      <PieChart className="w-16 h-16 mx-auto mb-4" />
                      <p>Aperçu de l'interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {demoSteps.map((step, index) => (
              <Card 
                key={index} 
                className={`transition-all duration-300 ${
                  index === currentStep ? 'ring-2 ring-blue-500 shadow-lg scale-105' : 'hover:shadow-md'
                }`}
              >
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                    index === currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}>
                    <span className={`font-bold ${
                      index === currentStep ? 'text-white' : 'text-gray-600'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à Commencer Votre Aventure Financière ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Rejoignez WiseBank et transformez votre gestion financière dès aujourd'hui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Créer Mon Compte Gratuit
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
                  En Savoir Plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
