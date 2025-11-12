import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">
            Запишитесь на бесплатную консультацию
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Форма записи</CardTitle>
              <CardDescription>Заполните форму, и мы перезвоним вам</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Расскажите о вашей проблеме или интересующем товаре"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <p className="text-sm text-muted-foreground">
                      ул. Люблинская д. 100 кор. 2<br />
                      Москва, Россия
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+74957990926" className="text-sm text-muted-foreground hover:text-primary">
                      +7 (495) 799-09-26
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@clearear.ru" className="text-sm text-muted-foreground hover:text-primary">
                      info@clearear.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Пн-Пт: 9:00 - 20:00</div>
                      <div>Сб: 10:00 - 18:00</div>
                      <div>Вс: выходной</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Как нас найти</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-[300px] rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=37.742913%2C55.676584&mode=search&oid=1078664426&ol=biz&z=16"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    title="Карта расположения - ул. Люблинская д. 100 кор. 2, Москва"
                    className="border-0"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
