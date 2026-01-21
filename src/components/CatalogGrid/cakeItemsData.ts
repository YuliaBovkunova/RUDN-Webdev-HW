import product01 from '../../assets/images/products/product-01.png';
import product02 from '../../assets/images/products/product-02.png';
import product03 from '../../assets/images/products/product-03.png';
import product04 from '../../assets/images/products/product-04.png';
import product05 from '../../assets/images/products/product-05.png';
import product06 from '../../assets/images/products/product-06.png';
import product07 from '../../assets/images/products/product-07.png';
import product08 from '../../assets/images/products/product-08.png';
import product09 from '../../assets/images/products/product-09.png';

export type CakeItemData = {
  id: number;
  title: string;
  description: string;
  priceText: string;
  imagePath: string;
  imageAlt: string;
  unitPrice: number;
};

export const getCakeItems = (): CakeItemData[] => {
  return [
    {
      id: 1,
      title: 'Кремовый замок',
      description: 'Нежный крем любого цвета на выбор, ванильная основа',
      priceText: '150 ₽/шт.',
      imagePath: product01,
      imageAlt: 'Кремовый замок',
      unitPrice: 150,
    },
    {
      id: 2,
      title: 'Малиновый рай',
      description: 'Воздушный крем, темная основа и ягода малины',
      priceText: '150 ₽/шт.',
      imagePath: product02,
      imageAlt: 'Малиновый рай',
      unitPrice: 150,
    },
    {
      id: 3,
      title: 'Фейерверк',
      description: 'Разноцветный крем, с бисквитной основой',
      priceText: '150 ₽/шт.',
      imagePath: product03,
      imageAlt: 'Фейерверк',
      unitPrice: 150,
    },
    {
      id: 4,
      title: 'Мыс безумия',
      description: 'Разноцветная основа, стружка и нежный крем',
      priceText: '150 ₽/шт.',
      imagePath: product04,
      imageAlt: 'Мыс безумия',
      unitPrice: 150,
    },
    {
      id: 5,
      title: 'Шоколадный мир',
      description: 'Ореховая стружка, нежный крем и шоколадная основа',
      priceText: '150 ₽/шт.',
      imagePath: product05,
      imageAlt: 'Шоколадный мир',
      unitPrice: 150,
    },
    {
      id: 6,
      title: 'Слезы дракона',
      description: 'Нежный крем любого цвета на выбор, вафельная основа',
      priceText: '150 ₽/шт.',
      imagePath: product06,
      imageAlt: 'Слезы дракона',
      unitPrice: 150,
    },
    {
      id: 7,
      title: 'Летняя фантазия',
      description: 'Украшения в форме сердец, для любимого человека',
      priceText: '150 ₽/шт.',
      imagePath: product07,
      imageAlt: 'Летняя фантазия',
      unitPrice: 150,
    },
    {
      id: 8,
      title: 'Облачная сказка',
      description: 'Светлая основа, нежный крем со стружкой сверху',
      priceText: '150 ₽/шт.',
      imagePath: product08,
      imageAlt: 'Облачная сказка',
      unitPrice: 150,
    },
    {
      id: 9,
      title: 'Темный рыцарь',
      description: 'Темная основа, нежный крем и вкусные шарики',
      priceText: '150 ₽/шт.',
      imagePath: product09,
      imageAlt: 'Темный рыцарь',
      unitPrice: 150,
    },
  ];
};
