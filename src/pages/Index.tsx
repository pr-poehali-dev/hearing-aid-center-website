import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      scrollToSection(section);
    }
  }, [searchParams]);

  const products = [
    {
      id: 1,
      name: 'Oticon Zircon 1 miniRITE T',
      description: 'Современный цифровой слуховой аппарат с технологией шумоподавления',
      price: 'от 45 000 ₽',
      features: ['Bluetooth', '24 канала', 'Защита IP68']
    },
    {
      id: 2,
      name: 'Oticon Xceed 3 BTE SP',
      description: 'Мощный аппарат для тяжелых потерь слуха',
      price: 'от 89 000 ₽',
      features: ['Супермощность', '48 каналов', 'Защита от влаги']
    },
    {
      id: 3,
      name: 'ReSound KEY KE277-DWH',
      description: 'Надежное решение с отличным качеством звука',
      price: 'от 38 000 ₽',
      features: ['12 каналов', 'Легкий вес', 'Аккумулятор']
    },
    {
      id: 4,
      name: 'Oticon Ruby 2 BTE PP 13',
      description: 'Комфортный аппарат для ежедневного использования',
      price: 'от 52 000 ₽',
      features: ['20 каналов', 'Удобная посадка', 'Долгая работа']
    },
    {
      id: 5,
      name: 'Phonak Audeo P50-312',
      description: 'Премиум-класс с технологией AutoSense OS',
      price: 'от 95 000 ₽',
      features: ['Bluetooth', 'AutoSense', 'Перезаряжаемый']
    }
  ];

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Диагностика слуха',
      description: 'Полное обследование на современном оборудовании'
    },
    {
      icon: 'Settings',
      title: 'Настройка аппаратов',
      description: 'Индивидуальная настройка под ваши потребности'
    },
    {
      icon: 'RefreshCw',
      title: 'Гарантийное обслуживание',
      description: 'Бесплатный сервис и консультации'
    },
    {
      icon: 'ShoppingBag',
      title: 'Подбор устройства',
      description: 'Помощь в выборе оптимального решения'
    }
  ];

  const articles = [
    {
      title: 'Как выбрать слуховой аппарат',
      excerpt: 'Основные критерии выбора и на что обратить внимание',
      date: '15 октября 2024'
    },
    {
      title: 'Уход за слуховым аппаратом',
      excerpt: 'Правила эксплуатации и чистки устройства',
      date: '10 октября 2024'
    },
    {
      title: 'Современные технологии в слухопротезировании',
      excerpt: 'Обзор последних разработок и инноваций',
      date: '5 октября 2024'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
              Каталог слуховых аппаратов
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Современные решения от ведущих производителей мира
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Activity" className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardTitle className="font-heading">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-primary font-heading">{product.price}</div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full font-medium"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по диагностике и слухопротезированию
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
              Полезные статьи
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Экспертные материалы о слухе и слухопротезировании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="FileText" className="h-12 w-12 text-primary/40" />
                  </div>
                  <CardTitle className="font-heading text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-xs">{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-8 text-center">
              О центре "Ясный слух"
            </h2>
            
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">О нас</TabsTrigger>
                <TabsTrigger value="advantages">Преимущества</TabsTrigger>
                <TabsTrigger value="team">Команда</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-4 mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Центр "Ясный слух" работает с 2009 года и является одним из ведущих специализированных 
                      центров слухопротезирования в России. Мы помогли более 5000 людей вернуть качественный слух 
                      и улучшить качество жизни.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Наша миссия — сделать современные технологии слухопротезирования доступными каждому, 
                      кто в них нуждается. Мы работаем только с проверенными производителями и предоставляем 
                      полную гарантию на все услуги и оборудование.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="advantages" className="space-y-4 mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Квалифицированные специалисты с медицинским образованием',
                    'Современное диагностическое оборудование',
                    'Индивидуальный подход к каждому клиенту',
                    'Широкий выбор слуховых аппаратов',
                    'Гарантийное и постгарантийное обслуживание',
                    'Удобное расположение в центре города'
                  ].map((advantage, idx) => (
                    <Card key={idx}>
                      <CardContent className="pt-6 flex items-start gap-3">
                        <Icon name="CheckCircle" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{advantage}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="team" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      В нашей команде работают сурдологи и аудиологи с опытом работы от 10 лет. 
                      Все специалисты регулярно проходят обучение и повышение квалификации.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
                        <div>
                          <div className="font-semibold">Высшее образование</div>
                          <div className="text-sm text-muted-foreground">Медицинские специалисты</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <Icon name="Award" className="h-8 w-8 text-primary" />
                        <div>
                          <div className="font-semibold">Сертификаты</div>
                          <div className="text-sm text-muted-foreground">Международного уровня</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Index;
