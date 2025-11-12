import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTour, setActiveTour] = useState(false);

  const services = [
    {
      icon: 'Sparkles',
      title: 'Профессиональная гигиена',
      description: 'Комплексная чистка зубов и профилактика заболеваний'
    },
    {
      icon: 'Smile',
      title: 'Отбеливание',
      description: 'Безопасное отбеливание для белоснежной улыбки'
    },
    {
      icon: 'ShieldCheck',
      title: 'Имплантация',
      description: 'Современные имплантаты с пожизненной гарантией'
    },
    {
      icon: 'Heart',
      title: 'Эстетическая стоматология',
      description: 'Виниры и реставрация для идеальной улыбки'
    },
    {
      icon: 'Stethoscope',
      title: 'Лечение зубов',
      description: 'Безболезненное лечение кариеса и каналов'
    },
    {
      icon: 'BriefcaseMedical',
      title: 'Протезирование',
      description: 'Коронки и мосты высочайшего качества'
    }
  ];

  const doctors = [
    {
      name: 'Анна Петрова',
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/ea702e95-7853-40de-bed7-c2dfc86ba3ca/files/f78f70c8-a43e-49c0-aed4-b5a3b1105499.jpg'
    },
    {
      name: 'Дмитрий Соколов',
      specialty: 'Стоматолог-ортопед',
      experience: '12 лет опыта',
      image: 'https://cdn.poehali.dev/projects/ea702e95-7853-40de-bed7-c2dfc86ba3ca/files/f78f70c8-a43e-49c0-aed4-b5a3b1105499.jpg'
    },
    {
      name: 'Елена Иванова',
      specialty: 'Стоматолог-хирург',
      experience: '10 лет опыта',
      image: 'https://cdn.poehali.dev/projects/ea702e95-7853-40de-bed7-c2dfc86ba3ca/files/f78f70c8-a43e-49c0-aed4-b5a3b1105499.jpg'
    }
  ];

  const prices = [
    { service: 'Профессиональная чистка зубов', price: '3 500 ₽' },
    { service: 'Лечение кариеса', price: 'от 4 000 ₽' },
    { service: 'Отбеливание ZOOM', price: '18 000 ₽' },
    { service: 'Установка импланта', price: 'от 35 000 ₽' },
    { service: 'Керамическая коронка', price: 'от 25 000 ₽' },
    { service: 'Установка винира', price: 'от 30 000 ₽' }
  ];

  const reviews = [
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Прекрасная клиника! Врачи очень внимательные и профессиональные. Все прошло безболезненно.',
      date: '15 октября 2024'
    },
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Делал имплантацию. Результат превзошел все ожидания. Современное оборудование и высокий уровень сервиса.',
      date: '3 ноября 2024'
    },
    {
      name: 'Ольга В.',
      rating: 5,
      text: 'Хожу сюда всей семьей. Детям нравится, что врачи находят подход. Цены адекватные, качество отличное.',
      date: '28 октября 2024'
    }
  ];

  const promotions = [
    {
      title: 'Первичный осмотр бесплатно',
      description: 'Консультация и диагностика для новых пациентов',
      discount: '100%',
      validUntil: 'До конца месяца'
    },
    {
      title: 'Профгигиена со скидкой',
      description: 'Комплексная чистка зубов по специальной цене',
      discount: '-30%',
      validUntil: 'До 30 ноября'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ДентаЛюкс</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#doctors" className="text-foreground hover:text-primary transition-colors">Врачи</a>
              <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#promotions" className="text-foreground hover:text-primary transition-colors">Акции</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Записаться</Button>
          </nav>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/ea702e95-7853-40de-bed7-c2dfc86ba3ca/files/bdae894a-09c7-4fef-82e5-a622dd355f48.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Здоровая улыбка — наша забота
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Современная стоматология с индивидуальным подходом к каждому пациенту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Записаться на приём
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" onClick={() => setActiveTour(true)}>
              <Icon name="Eye" className="mr-2" size={20} />
              3D-тур по клинике
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <Icon name="Award" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-2xl font-bold mb-2">15+ лет</h3>
                <p className="text-muted-foreground">На рынке стоматологических услуг</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <Icon name="Users" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-2xl font-bold mb-2">10 000+</h3>
                <p className="text-muted-foreground">Довольных пациентов</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-scale">
              <CardContent className="pt-6">
                <Icon name="Star" className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="text-2xl font-bold mb-2">4.9/5</h3>
                <p className="text-muted-foreground">Средняя оценка клиники</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный спектр стоматологических услуг для всей семьи
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <Icon name={service.icon} className="mb-4 text-primary" size={40} />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши врачи</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Команда профессионалов с многолетним опытом
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover-scale">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-primary font-medium mb-1">{doctor.specialty}</p>
                  <p className="text-muted-foreground text-sm">{doctor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              {prices.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-4 border-b border-border last:border-0"
                >
                  <span className="text-foreground">{item.service}</span>
                  <span className="font-semibold text-primary text-lg">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="promotions" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Акции</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Специальные предложения для наших пациентов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {promotions.map((promo, index) => (
              <Card key={index} className="relative overflow-hidden hover-scale">
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg">
                  {promo.discount}
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-2">{promo.title}</h3>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <p className="text-sm text-primary font-medium">{promo.validUntil}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят наши пациенты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6">Запись на приём</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Комментарий" rows={4} />
                  </div>
                  <Button className="w-full">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="MapPin" className="text-primary mr-3 mt-1" size={24} />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Phone" className="text-primary mr-3 mt-1" size={24} />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Mail" className="text-primary mr-3 mt-1" size={24} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@dentalux.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Clock" className="text-primary mr-3 mt-1" size={24} />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 h-48 bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Карта</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {activeTour && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-[80vh] bg-white rounded-lg overflow-hidden">
            <button 
              onClick={() => setActiveTour(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary">
              <div className="text-center">
                <img 
                  src="https://cdn.poehali.dev/projects/ea702e95-7853-40de-bed7-c2dfc86ba3ca/files/97629b8d-eea2-4c74-a3bf-375299a899fc.jpg"
                  alt="Панорама клиники"
                  className="max-w-full max-h-[70vh] rounded-lg shadow-2xl"
                />
                <p className="mt-4 text-muted-foreground">3D-панорама клиники ДентаЛюкс</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Activity" size={32} />
            <span className="text-2xl font-bold">ДентаЛюкс</span>
          </div>
          <p className="mb-4">Современная стоматология для всей семьи</p>
          <p className="text-sm opacity-80">© 2024 ДентаЛюкс. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
