import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="py-20 md:py-32 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-secondary leading-tight">
              Верните радость<br />четкого слуха
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Профессиональный центр слухопротезирования с 15-летним опытом. 
              Современное оборудование, квалифицированные специалисты и индивидуальный подход.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium" onClick={() => scrollToSection('catalog')}>
                <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="font-medium" onClick={() => scrollToSection('services')}>
                Наши услуги
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">5000+</div>
                <div className="text-sm text-muted-foreground">клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-heading">98%</div>
                <div className="text-sm text-muted-foreground">довольных</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
            <Icon name="Ear" className="h-48 w-48 text-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
