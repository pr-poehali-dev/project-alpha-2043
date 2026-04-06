import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FEATURES = [
  { icon: "Flame", label: "Калории" },
  { icon: "Beef", label: "Белки" },
  { icon: "Droplets", label: "Жиры" },
  { icon: "Wheat", label: "Углеводы" },
  { icon: "Activity", label: "Активность" },
  { icon: "Scale", label: "Вес и рост" },
];

const CHAT_MESSAGES = [
  { role: "ai", text: "Привет! Расскажи о своём рационе — помогу рассчитать норму калорий и дам рекомендации." },
  { role: "user", text: "Хочу похудеть на 5 кг за 2 месяца. Мне 28 лет, вешу 78 кг, рост 175 см." },
  { role: "ai", text: "Отлично! Для твоей цели рекомендую дефицит 400–500 ккал/день. Норма: ~1950 ккал. Белков — 140 г, жиров — 60 г, углеводов — 210 г. Хочешь план питания?" },
];

const STATS = [
  { value: "50+", label: "параметров питания" },
  { value: "24/7", label: "ИИ-консультант" },
  { value: "100%", label: "персонализация" },
];

export default function Index() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(CHAT_MESSAGES);
  const [activeFeature, setActiveFeature] = useState("Калории");

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", text: chatInput },
      { role: "ai", text: "Анализирую ваши данные... Скоро ИИ-агент будет подключён и даст развёрнутый ответ!" },
    ]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Icon name="Flame" size={16} className="text-white" />
            </div>
            <div className="text-xl font-bold">КалоКалк</div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Функции</a>
            <a href="#calculator" className="hover:text-gray-900">Калькулятор</a>
            <a href="#ai" className="hover:text-gray-900">ИИ-агент</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
        </div>
        <Button className="bg-green-500 text-white hover:bg-green-600 rounded-full px-6">
          Попробовать
        </Button>
      </header>

      {/* Hero */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-2 rounded-full mb-8">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-3">Новое</span>
          ИИ-агент теперь отвечает на вопросы о питании
          <Icon name="ChevronRight" size={16} className="ml-2" />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Калькулятор калорий,
          <br />
          который работает как{" "}
          <span className="text-green-500">диетолог</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Точный расчёт КБЖУ с учётом возраста, веса, роста, уровня активности и ваших целей.
          ИИ-консультант подбирает план питания и отвечает на любые вопросы.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-500 text-white hover:bg-green-600 rounded-full px-8 py-3">
            <Icon name="Calculator" size={16} className="mr-2" />
            Рассчитать калории
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-3 bg-transparent">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Спросить ИИ
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-green-500">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-6 flex items-center justify-center">
            <Icon name="User" size={28} className="text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Простой старт, быстрый результат</h3>
          <p className="text-gray-600 mb-2">
            "За 2 недели скинула 2 кг — просто следила за нормой калорий. Калькулятор сам всё считает,
            а ИИ подсказал, что есть до и после тренировок."
          </p>
          <p className="text-sm text-gray-500">Анна, 31 год — минус 6 кг за 3 месяца</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-green-500 font-medium mb-4">Характеристики</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Учитываем всё, что важно
          </h2>
          <p className="text-gray-600 mb-12">
            Более 50 параметров — от базального метаболизма до микронутриентов
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {FEATURES.map((f) => (
              <button
                key={f.label}
                onClick={() => setActiveFeature(f.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
                  activeFeature === f.label
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white text-gray-700 border-gray-200 hover:border-green-300"
                }`}
              >
                <Icon name={f.icon as any} size={14} />
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Preview + AI Chat */}
      <section id="calculator" className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Calculator Card */}
          <div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="Calculator" size={24} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Точный расчёт
              <br />
              под ваши цели
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Возраст, вес, рост и пол",
                "Уровень физической активности",
                "Цель: похудение, набор массы или поддержание",
                "Расчёт БЖУ и суточной нормы калорий",
                "Рекомендации по продуктам и рациону",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <Icon name="Check" size={18} className="text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-green-500 px-5 py-4 text-white">
                <div className="text-xs opacity-80 mb-1">Ваша норма на сегодня</div>
                <div className="text-3xl font-bold">1 950 ккал</div>
                <div className="text-xs opacity-80 mt-1">Цель: похудение -0.5 кг/нед</div>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: "Белки", val: "140 г", color: "bg-blue-400", pct: 70 },
                  { label: "Жиры", val: "60 г", color: "bg-yellow-400", pct: 45 },
                  { label: "Углеводы", val: "210 г", color: "bg-orange-400", pct: 85 },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{m.label}</span>
                      <span className="font-medium">{m.val}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div
                        className={`h-2 ${m.color} rounded-full`}
                        style={{ width: `${m.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t">
                  <div className="text-xs text-gray-500 mb-2">Выпито воды</div>
                  <div className="flex gap-2">
                    {[1,2,3,4,5,6,7,8].map((i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          i <= 5 ? "bg-blue-100 text-blue-500" : "bg-gray-100 text-gray-300"
                        }`}
                      >
                        <Icon name="Droplet" size={12} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="ai" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="Bot" size={24} className="text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ИИ-агент —
              <br />
              ваш личный диетолог
            </h2>
            <p className="text-gray-600 mb-6">
              Задавайте любые вопросы о питании, продуктах и диетах. Агент анализирует ваши данные
              и даёт персональные советы, а не шаблонные ответы.
            </p>
            <div className="space-y-3">
              {[
                "Учитывает ваш профиль и цели",
                "Отвечает на вопросы о продуктах и рецептах",
                "Подбирает план питания под любой бюджет",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <Icon name="Sparkles" size={16} className="text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Mockup */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-green-500 px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Bot" size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">КалоКалк ИИ</div>
                <div className="text-green-100 text-xs">онлайн</div>
              </div>
            </div>

            <div className="p-4 space-y-3 h-64 overflow-y-auto">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-green-500 text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                placeholder="Спросите о питании..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-green-400"
              />
              <button
                onClick={sendMessage}
                className="w-9 h-9 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Icon name="Send" size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-green-500 font-medium text-center mb-4">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Частые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                q: "Как рассчитывается норма калорий?",
                a: "Используем формулу Миффлина-Сан Жеора с поправкой на уровень активности — одна из самых точных на сегодня.",
              },
              {
                q: "Чем ИИ-агент отличается от обычного чата?",
                a: "Агент видит ваши данные (вес, цель, рацион) и даёт персонализированные советы, а не общие рекомендации.",
              },
              {
                q: "Можно ли отслеживать прогресс?",
                a: "Да, в приложении есть журнал питания, графики веса и ежедневная статистика КБЖУ.",
              },
              {
                q: "Подходит ли для спортсменов?",
                a: "Конечно! Есть расчёт для разных типов нагрузок: силовые, кардио, смешанные. Агент подберёт питание под тренировочный план.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-xl p-5">
                <div className="font-medium text-gray-900 mb-2">{q}</div>
                <div className="text-gray-600 text-sm">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-green-500">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Начните считать калории правильно
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Бесплатный расчёт нормы КБЖУ и первая консультация с ИИ-агентом — прямо сейчас.
          </p>
          <Button className="bg-white text-green-600 hover:bg-green-50 rounded-full px-10 py-4 text-lg font-semibold">
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
              <Icon name="Flame" size={14} className="text-white" />
            </div>
            <div className="text-xl font-bold">КалоКалк</div>
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-900">Условия использования</a>
            <a href="#" className="hover:text-gray-900">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
