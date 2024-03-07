import IProduct from '../../interfaces/iProduct';

const mockDatabase: IProduct[] = [
  {
    id: 1,
    name: 'PlayStation 5',
    description: 'O console de próxima geração da Sony,'
    + ' com suporte para resolução 4K e tecnologia de áudio 3D.',
    price: 499.99,
    image: 'playstation5.jpg',
  },
  {
    id: 2,
    name: 'Xbox Series X',
    description: 'O console mais poderoso da Microsoft,'
    + ' com capacidade para jogos em 4K a 120 fps.',
    price: 499.99,
    image: 'xboxseriesx.jpg' },
  {
    id: 3,
    name: 'Nintendo Switch',
    description: 'Um console híbrido que pode ser usado tanto'
    + ' como um console doméstico quanto um console portátil.',
    price: 299.99,
    image: 'nintendoswitch.jpg',
  },

  {
    id: 4,
    name: 'PlayStation VR',
    description: 'Um sistema de realidade virtual para o PlayStation 4,'
    + ' proporcionando uma experiência imersiva de jogos.',
    price: 299.99,
    image: 'playstationvr.jpg' },
  {
    id: 5,
    name: 'Xbox Elite Wireless Controller Series 2',
    description: 'Um controle de alta performance para o Xbox,'
    + ' com personalização avançada e durabilidade.',
    price: 179.99,
    image: 'xboxelitecontroller.jpg' },
  {
    id: 6,
    name: 'Nintendo Switch Pro Controller',
    description: 'Um controle premium para o Nintendo Switch,'
    + ' oferecendo maior conforto e precisão durante o jogo.',
    price: 69.99,
    image: 'nintendoswitchprocontroller.jpg',
  },
  {
    id: 7,
    name: 'Logitech G Pro X Gaming Headset',
    description: 'Um headset gamer com tecnologia de áudio'
    + ' avançada e design confortável para longas sessões de jogo.',
    price: 129.99,
    image: 'logitechgprox.jpg',
  },
  {
    id: 8,
    name: 'Razer DeathAdder V2 Gaming Mouse',
    description: 'Um mouse de alta precisão projetado para jogadores profissionais,'
    + ' com sensor óptico de última geração.',
    price: 69.99,
    image: 'razerdeathadder.jpg',
  },
  {
    id: 9,
    name: 'SteelSeries Apex Pro Mechanical Gaming Keyboard',
    description: 'Um teclado mecânico premium com switches'
    + 'ajustáveis para personalização da sensibilidade das teclas.',
    price: 199.99,
    image: 'steelseriesapexpro.jpg',
  },
  {
    id: 10,
    name: 'ASUS ROG Swift PG279Q Gaming Monitor',
    description: 'Um monitor de alta performance com taxa de atualização '
    + 'de 165Hz e resolução 2K para uma experiência de jogo suave e nítida.',
    price: 699.99,
    image: 'asusrogswift.jpg',
  },
];

export default mockDatabase;
