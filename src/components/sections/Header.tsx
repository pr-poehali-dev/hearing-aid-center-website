import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/85d510e9-aaa0-4323-aaaf-04469fd887d9.png" 
              alt="Ясный слух" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold font-heading text-secondary">Ясный слух</span>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6">
          {['home', 'catalog', 'services', 'articles', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === section ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {section === 'home' && 'Главная'}
              {section === 'catalog' && 'Каталог'}
              {section === 'services' && 'Услуги'}
              {section === 'articles' && 'Статьи'}
              {section === 'about' && 'О нас'}
              {section === 'contact' && 'Контакты'}
            </button>
          ))}
        </nav>

        <Button className="font-medium" asChild>
          <a href="tel:+74957990926">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            +7 (495) 799-09-26
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
