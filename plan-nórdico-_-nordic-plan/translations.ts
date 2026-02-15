
import { Content } from './types';

export const translations: Record<'en' | 'es', Content> = {
  en: {
    hero: {
      badge: "Science-Backed Vitality",
      title: "Reclaim Your Energy with the Nordic Philosophy",
      subtitle: "A gentle yet effective system designed for women 40+ to optimize metabolism, protect joints, and feel vibrant again—no extreme diets required.",
      bullets: [
        "Metabolic restoration for women 40-67",
        "Joint-friendly movement protocols",
        "Hormonal balance nutrition",
        "Sustainable, lifestyle-first approach"
      ],
      cta: "Start Your Nordic Plan Today"
    },
    hormonal: {
      title: "The Science of Change After 40",
      subtitle: "Your body isn't working against you—it's just changing. Conventional methods often fail because they ignore the unique shift in hormones.",
      points: [
        {
          title: "Metabolic Slowdown",
          desc: "Hormonal shifts directly impact insulin sensitivity and your basal metabolic rate. We prioritize high nutrient density to stabilize daily energy levels, avoiding the restrictive diets that often lead to chronic fatigue and significant loss of healthy muscle mass. Our method works with your internal chemistry to unlock energy stores safely."
        },
        {
          title: "Joint Integrity",
          desc: "As we age, natural collagen production decreases, affecting tissue elasticity and joint health. Our movement protocols are specifically designed to lubricate joints and build core muscular stability safely, progressively, and without any harmful high-impact stress. We focus on longevity through functional mobility that protects your frame for years."
        },
        {
          title: "Cortisol Management",
          desc: "Excess cortisol and chronic stress trigger signals that store stubborn abdominal fat. We implement proven Nordic recovery techniques to calm your nervous system, allowing your body to process energy and burn fat in a much more efficient and natural way. By managing stress hormones, we transform how your body utilizes its primary fuel sources."
        }
      ]
    },
    product: {
      title: "What's Inside Your Plan",
      subtitle: "A comprehensive digital ecosystem built for your stage of life.",
      items: [
        { title: "The Foundation Guide", desc: "A 12-week roadmap explaining the 'why' behind the Nordic approach." },
        { title: "Movement Library", desc: "Follow-along videos focusing on low-impact resistance and flexibility." },
        { title: "The Seasonal Menu", desc: "Delicious, anti-inflammatory recipes that simplify meal planning." },
        { title: "Metabolic Tracker", desc: "Simple tools to monitor your progress and energy levels." }
      ]
    },
    benefits: {
      title: "Real Outcomes, Sustainable Results",
      list: [
        { icon: "Energy", title: "Wake up Refreshed", desc: "Stable energy levels throughout the afternoon without the typical 3 PM crash." },
        { icon: "Mobility", title: "Pain-Free Movement", desc: "Reduced inflammation and increased joint lubrication for easier walking and gardening." },
        { icon: "Confidence", title: "Clothing Confidence", desc: "Feel comfortable in your favorite pieces as your body finds its natural balance." },
        { icon: "Clarity", title: "Mental Sharpness", desc: "Support brain health and reduce 'brain fog' through targeted nutrition." }
      ]
    },
    testimonials: {
      title: "Stories from the Nordic Community",
      items: [
        { name: "Elena", age: "54", text: "I finally found something that doesn't feel like a chore. My knees feel better than they did in my 30s." },
        { name: "Margaret", age: "62", text: "The recipes are delicious and simple. I have so much more energy for my grandkids now." },
        { name: "Sofia", age: "48", text: "Scientific, professional, and actually works. The focus on hormones changed everything for me." }
      ]
    },
    bonus: {
      badge: "Limited Bonus",
      title: "The Nordic Morning Protocol",
      desc: "Get our exclusive 10-minute ritual to boost metabolism and set your day for success.",
      items: [
        "Metabolism-boosting ritual",
        "Anti-inflammatory tonic recipe",
        "Mental clarity exercises"
      ],
      cta: "Secure My Bonus Now",
      limit: "Available for the first 50 buyers today"
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        { q: "Is this safe for me?", a: "Yes. All protocols are low-impact and designed with the physical needs of women 40-67 in mind. However, always consult your physician." },
        { q: "Do I need a gym membership?", a: "No. All movements can be done at home with minimal equipment like light weights or resistance bands." },
        { q: "What if I have bad knees or hips?", a: "Our movement library specifically focuses on joint stability and uses modifications for those with limited mobility." },
        { q: "Is it beginner friendly?", a: "Absolutely. We start with foundations and progress at your own pace. No complex choreography or extreme jumps." }
      ]
    },
    guarantee: {
      title: "The 30-Day Nordic Promise",
      desc: "Try the Plan Nórdico risk-free. If you don't feel a shift in your energy or mobility within 30 days, we'll provide a full refund. No questions asked.",
      badgeText: "30-Day Money Back"
    },
    footer: {
      rights: "© 2024 Nordic Plan. All Rights Reserved.",
      disclaimer: "Disclaimer: This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary based on individual effort and adherence."
    }
  },
  es: {
    hero: {
      badge: "Vitalidad Respaldada por la Ciencia",
      title: "Recupera tu Energía con la Filosofía Nórdica",
      subtitle: "Un sistema suave pero efectivo diseñado para mujeres mayores de 40 años para optimizar el metabolismo, proteger las articulaciones y volver a sentirse vibrante, sin dietas extremas.",
      bullets: [
        "Restauración metabólica para mujeres de 40-67 años",
        "Protocolos de movimiento respetuosos con las articulaciones",
        "Nutrición para el equilibrio hormonal",
        "Enfoque sostenible centrado en el estilo de vida"
      ],
      cta: "Inicia tu Plan Nórdico Hoy"
    },
    hormonal: {
      title: "La Ciencia del Cambio Después de los 40",
      subtitle: "Tu cuerpo no está trabajando en tu contra, simplemente está cambiando. Los métodos convencionales suelen fallar porque ignoran el cambio hormonal único.",
      points: [
        {
          title: "Ralentización Metabólica",
          desc: "Los cambios en el estrógeno afectan directamente la sensibilidad a la insulina y el ritmo metabólico basal. Priorizamos la densidad de nutrientes clave para estabilizar la energía diaria, evitando las dietas restrictivas que causan fatiga y pérdida de masa muscular. Nuestro sistema desbloquea las reservas de energía de forma totalmente natural y segura."
        },
        {
          title: "Integridad Articular",
          desc: "Con el paso de los años, la producción de colágeno disminuye, afectando la elasticidad de los tejidos y la salud ósea. Nuestros protocolos están diseñados para lubricar articulaciones y fortalecer la estabilidad muscular de forma segura, progresiva y totalmente libre de impacto. Nos centramos en una movilidad funcional que protege tu estructura física durante décadas."
        },
        {
          title: "Gestión del Cortisol",
          desc: "El exceso de cortisol y el estrés crónico activan señales de almacenamiento de grasa abdominal difícil de combatir. Aplicamos técnicas nórdicas de recuperación para calmar el sistema nervioso y permitir que tu cuerpo procese las grasas y la energía de manera natural y eficiente. Al equilibrar las hormonas del estrés, transformamos radicalmente el uso de combustible corporal."
        }
      ]
    },
    product: {
      title: "Qué Incluye Tu Plan",
      subtitle: "Un ecosistema digital completo construido para tu etapa de vida.",
      items: [
        { title: "Guía de Fundamentos", desc: "Una hoja de ruta de 12 semanas que explica el 'por qué' del enfoque nórdico." },
        { title: "Biblioteca de Movimiento", desc: "Videos guiados enfocados en resistencia de bajo impacto y flexibilidad." },
        { title: "El Menú Estacional", desc: "Recetas deliciosas y antiinflamatorias que simplifican la planificación de comidas." },
        { title: "Rastreador Metabólico", desc: "Herramientas sencillas para monitorear tu progreso y niveles de energía." }
      ]
    },
    benefits: {
      title: "Resultados Reales y Sostenibles",
      list: [
        { icon: "Energy", title: "Despierta Renovada", desc: "Niveles de energía estables durante toda la tarde sin el típico bajón de las 3 PM." },
        { icon: "Mobility", title: "Movimiento Sin Dolor", desc: "Inflamación reducida y mayor lubricación articular para caminar y hacer jardinería con facilidad." },
        { icon: "Confidence", title: "Confianza al Vestir", desc: "Siéntete cómoda con tus prendas favoritas mientras tu cuerpo encuentra su equilibrio natural." },
        { icon: "Clarity", title: "Claridad Mental", desc: "Apoya la salud cerebral y reduce la 'niebla mental' mediante nutrición dirigida." }
      ]
    },
    testimonials: {
      title: "Historias de la Comunidad Nórdica",
      items: [
        { name: "Elena", age: "54", text: "Finalmente encontré algo que no se siente como una obligación. Mis rodillas se sienten mejor que a mis 30." },
        { name: "Margarita", age: "62", text: "Las recetas son deliciosas y sencillas. Ahora tengo mucha más energía para mis nietos." },
        { name: "Sofía", age: "48", text: "Científico, profesional y realmente funciona. El enfoque en las hormonas lo cambió todo para mí." }
      ]
    },
    bonus: {
      badge: "Bono Limitado",
      title: "Protocolo Mañanero Nórdico",
      desc: "Obtén nuestro ritual exclusivo de 10 minutos para activar el metabolismo y preparar tu día para el éxito.",
      items: [
        "Ritual de activación metabólica",
        "Receta de tónico antiinflamatorio",
        "Ejercicios de claridad mental"
      ],
      cta: "Asegurar Mi Bono Ahora",
      limit: "Disponible para los primeros 50 compradores de hoy"
    },
    faq: {
      title: "Preguntas Frecuentes",
      questions: [
        { q: "¿Es esto seguro para mí?", a: "Sí. Todos los protocolos son de bajo impacto y diseñados pensando en las necesidades físicas de las mujeres de 40-67 años. Sin embargo, siempre consulta a tu médico." },
        { q: "¿Necesito membresía de gimnasio?", a: "No. Todos los movimientos se pueden hacer en casa con equipo mínimo como pesas ligeras o bandas de resistencia." },
        { q: "¿Qué pasa si tengo problemas de rodilla o cadera?", a: "Nuestra biblioteca de movimiento se enfoca específicamente en la estabilidad articular y utiliza modificaciones para personas con movilidad limitada." },
        { q: "¿Es apto para principiantes?", a: "Absolutamente. Comenzamos con los fundamentos y progresas a tu propio ritmo. Sin coreografías complejas ni saltos extremos." }
      ]
    },
    guarantee: {
      title: "La Promesa Nórdica de 30 Días",
      desc: "Prueba el Plan Nórdico sin riesgos. Si no sientes un cambio en tu energía o movilidad en 30 días, te devolveremos el dinero. Sin preguntas.",
      badgeText: "30 Días de Garantía"
    },
    footer: {
      rights: "© 2024 Plan Nórdico. Todos los derechos reservados.",
      disclaimer: "Descargo de responsabilidad: Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Los resultados pueden variar."
    }
  }
};
