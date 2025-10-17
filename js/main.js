const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы вытащить палец из кадра. В конце концов, это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках, и у нее фотография получилась лучше.',
  'Я скользнул по банановому кожуху и уронил камеру на кота, и у меня фотография получилась лучше.',
  'Лица у людей на фотке перекошены, как будто это их убийство. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Михаил',
  'Матвей',
  'Тимофей',
  'Илья',
  'Наталья',
  'Светлана',
  'Дарья',
  'Ольга',
  'Ксения'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function createRandomNumbers(min, max) {
  const previousValues = [];

  return function() {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[createRandomNumbers(0, elements.length - 1)()];
const generatePhotoId = createRandomNumbers(1, 25);
const urlId = createRandomNumbers(1, 25);
const generateNumbersOfLikes = createRandomNumbers(15, 200);
const userId = createRandomNumbers(1, 100000);
const avatarImg = createRandomNumbers(1, 6);

const createComment = () => ({
  id: userId(),
  avatar: `img/avatar-${avatarImg()}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${urlId()}.jpg`,
  description: 'Тут должно быть описание изображения',
  likes: generateNumbersOfLikes(),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

// eslint-disable-next-line no-unused-vars
const similarPhotoDescriptions = Array.from({length: 25}, createPhotoDescription);

