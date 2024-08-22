export const questions = [
    
    {
      questionText: 'Elige una paleta de colores que te represente',
      type: 'multiple-choice-cards',
      options: [
        { text: 'Azul y rojo', value: 'Bloom', color: ['#1E90FF', '#FF4500'] },
        { text: 'Amarillo y dorado', value: 'Stella', color: ['#FFD700', '#FFA500'] },
        { text: 'Verde y rosa', value: 'Flora', color: ['#32CD32', '#FFC0CB'] },
        { text: 'Rojo y negro', value: 'Musa', color: ['#FF0000', '#000000'] },
        { text: 'Púrpura y azul', value: 'Tecna', color: ['#800080', '#0000FF'] }
      ],
    },
    {
      questionText: '¿Qué actividad prefieres hacer en tu tiempo libre?',
      type: 'multiple-choice',
      options: [
        { text: 'Leer un buen libro', value: 'Bloom' },
        { text: 'Diseñar nuevos conjuntos de moda', value: 'Stella' },
        { text: 'Cuidar plantas y jardines', value: 'Flora' },
        { text: 'Tocar un instrumento o escuchar música', value: 'Musa' },
        { text: 'Experimentar con gadgets y tecnología', value: 'Tecna' }
      ],
    },
    {
      questionText: '¿Qué prefieres hacer cuando estás con amigos?',
      type: 'multiple-choice',
      options: [
        { text: 'Planear aventuras o juegos', value: 'Bloom' },
        { text: 'Ir de compras o a la moda', value: 'Stella' },
        { text: 'Pasar tiempo al aire libre', value: 'Flora' },
        { text: 'Escuchar o tocar música', value: 'Musa' },
        { text: 'Jugar videojuegos o probar nuevas apps', value: 'Tecna' }
      ],
    },
    {
      questionText: '¿Qué música prefieres?',
      type: 'slider',
      min: 1,
      max: 10,
      description: 'El slider mide el gusto entre música clásica (1) y música electrónica (10).',
      interpretation: [
        { range: [1, 3], value: 'Musa' },
        { range: [4, 7], value: 'Stella' },
        { range: [8, 10], value: 'Tecna' },
      ],
    },
    {
      questionText: 'Elige tus hobbies favoritos',
      type: 'checkbox',
      options: [
        { text: 'Viajar', value: 'Bloom' },
        { text: 'Moda', value: 'Stella' },
        { text: 'Jardinería', value: 'Flora' },
        { text: 'Música', value: 'Musa' },
        { text: 'Tecnología', value: 'Tecna' }
      ],
    },
  ];
  