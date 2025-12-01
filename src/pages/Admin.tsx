import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Admin = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Мария К.', rating: 5, text: 'Прекрасная клиника!', date: '15.10.2024' },
    { id: 2, name: 'Алексей М.', rating: 5, text: 'Делал имплантацию. Результат превзошел все ожидания.', date: '03.11.2024' },
  ]);

  const [prices, setPrices] = useState([
    { id: 1, service: 'Профессиональная чистка зубов', price: '3 500 ₽' },
    { id: 2, service: 'Лечение кариеса', price: 'от 4 000 ₽' },
    { id: 3, service: 'Отбеливание ZOOM', price: '18 000 ₽' },
  ]);

  const [promotions, setPromotions] = useState([
    { id: 1, title: 'Первичный осмотр бесплатно', description: 'Консультация и диагностика', discount: '100%', validUntil: 'До конца месяца' },
    { id: 2, title: 'Профгигиена со скидкой', description: 'Комплексная чистка зубов', discount: '-30%', validUntil: 'До 30 ноября' },
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, name: 'Иван Петров', phone: '+7 (999) 123-45-67', service: 'Консультация', date: '2024-12-05', time: '10:00', status: 'pending' },
    { id: 2, name: 'Анна Сидорова', phone: '+7 (999) 765-43-21', service: 'Чистка зубов', date: '2024-12-06', time: '14:30', status: 'confirmed' },
  ]);

  const tabs = [
    { id: 'reviews', label: 'Отзывы', icon: 'MessageSquare' },
    { id: 'prices', label: 'Цены', icon: 'DollarSign' },
    { id: 'promotions', label: 'Акции', icon: 'Tag' },
    { id: 'appointments', label: 'Записи', icon: 'Calendar' },
  ];

  const deleteReview = (id: number) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  const deletePrice = (id: number) => {
    setPrices(prices.filter(p => p.id !== id));
  };

  const deletePromotion = (id: number) => {
    setPromotions(promotions.filter(p => p.id !== id));
  };

  const updateAppointmentStatus = (id: number, status: string) => {
    setAppointments(appointments.map(a => a.id === id ? { ...a, status } : a));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="text-primary" size={32} />
              <div>
                <span className="text-2xl font-bold text-primary">ЛЕГЕНДА</span>
                <p className="text-xs text-muted-foreground">Панель администратора</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Icon name="Home" className="mr-2" size={16} />
              На сайт
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-64">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary text-white'
                          : 'hover:bg-secondary text-foreground'
                      }`}
                    >
                      <Icon name={tab.icon} size={20} />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          <main className="flex-1">
            {activeTab === 'reviews' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Управление отзывами</span>
                    <Button>
                      <Icon name="Plus" className="mr-2" size={16} />
                      Добавить отзыв
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Имя</TableHead>
                        <TableHead>Рейтинг</TableHead>
                        <TableHead>Текст</TableHead>
                        <TableHead>Дата</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reviews.map((review) => (
                        <TableRow key={review.id}>
                          <TableCell className="font-medium">{review.name}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Icon name="Star" className="text-yellow-400" size={16} />
                              <span className="ml-1">{review.rating}</span>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs truncate">{review.text}</TableCell>
                          <TableCell>{review.date}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="destructive" onClick={() => deleteReview(review.id)}>
                                <Icon name="Trash2" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {activeTab === 'prices' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Управление ценами</span>
                    <Button>
                      <Icon name="Plus" className="mr-2" size={16} />
                      Добавить услугу
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Услуга</TableHead>
                        <TableHead>Цена</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {prices.map((price) => (
                        <TableRow key={price.id}>
                          <TableCell className="font-medium">{price.service}</TableCell>
                          <TableCell className="text-primary font-semibold">{price.price}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="destructive" onClick={() => deletePrice(price.id)}>
                                <Icon name="Trash2" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {activeTab === 'promotions' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Управление акциями</span>
                    <Button>
                      <Icon name="Plus" className="mr-2" size={16} />
                      Добавить акцию
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {promotions.map((promo) => (
                      <Card key={promo.id} className="border-2">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold">{promo.title}</h3>
                                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                                  {promo.discount}
                                </span>
                              </div>
                              <p className="text-muted-foreground mb-2">{promo.description}</p>
                              <p className="text-sm text-muted-foreground">
                                <Icon name="Clock" className="inline mr-1" size={14} />
                                {promo.validUntil}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Icon name="Edit" size={14} />
                              </Button>
                              <Button size="sm" variant="destructive" onClick={() => deletePromotion(promo.id)}>
                                <Icon name="Trash2" size={14} />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'appointments' && (
              <Card>
                <CardHeader>
                  <CardTitle>Записи пациентов</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Пациент</TableHead>
                        <TableHead>Телефон</TableHead>
                        <TableHead>Услуга</TableHead>
                        <TableHead>Дата и время</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointments.map((apt) => (
                        <TableRow key={apt.id}>
                          <TableCell className="font-medium">{apt.name}</TableCell>
                          <TableCell>{apt.phone}</TableCell>
                          <TableCell>{apt.service}</TableCell>
                          <TableCell>
                            {apt.date} в {apt.time}
                          </TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                apt.status === 'confirmed'
                                  ? 'bg-green-100 text-green-800'
                                  : apt.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {apt.status === 'confirmed' ? 'Подтверждена' : apt.status === 'pending' ? 'Ожидает' : 'Отменена'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              {apt.status === 'pending' && (
                                <Button size="sm" variant="outline" onClick={() => updateAppointmentStatus(apt.id, 'confirmed')}>
                                  <Icon name="Check" size={14} className="mr-1" />
                                  Подтвердить
                                </Button>
                              )}
                              <Button size="sm" variant="destructive" onClick={() => updateAppointmentStatus(apt.id, 'cancelled')}>
                                <Icon name="X" size={14} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
