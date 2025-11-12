import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="py-12 border-t bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/85d510e9-aaa0-4323-aaaf-04469fd887d9.png" 
                alt="Ясный слух" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold font-heading text-secondary">Ясный слух</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональный центр слухопротезирования
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 font-heading">Контакты</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4" />
                <a href="tel:+74957990926" className="hover:text-primary">+7 (495) 799-09-26</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4" />
                <a href="mailto:info@clearear.ru" className="hover:text-primary">info@clearear.ru</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>ул. Люблинская д. 100 кор. 2, Москва</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 font-heading">Режим работы</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Пн-Пт: 9:00 - 20:00</div>
              <div>Сб: 10:00 - 18:00</div>
              <div>Вс: выходной</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 font-heading">Следите за нами</h3>
            <div className="flex gap-3">
              <Button size="icon" variant="outline">
                <Icon name="Facebook" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Icon name="Instagram" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Icon name="Youtube" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Центр слухопротезирования "Ясный слух". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
