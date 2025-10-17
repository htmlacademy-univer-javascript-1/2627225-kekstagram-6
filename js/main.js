константы  СООБЩЕНИЯ  =  [
  'Всё отлично!' ,
  «В целом всё неплохо. Но не всё. ,
  «Когда вы делаете фотографию, хорошо бы вытащить палец из кадра. В конце концов, это просто непрофессионально». ,
  — Моя бабушка случайно чихнула с фотоаппаратом в руках, и у нее фотография получилась лучше. ,
  «Я скользнул по банановому кожуху и уронил камеру на кота, и у меня фотография получилась лучше». ,
  «Лица у людей на фотке перекошены, как будто это их убийство. Как можно было поймать такой неудачный момент?!' ,
] ;

константы  ИМЕНА  =  [
  'Артём' ,
  'Михаил' ,
  'Матвей' ,
  'Тимофей' ,
  'Илья' ,
  'Наталья' ,
  'Светлана' ,
  'Дарья' ,
  'Ольга' ,
  'Ксения' ,
] ;

const  getRandomInteger  =  ( a ,  b )  =>  {
  const  lower  =  Math . ceil ( Math . min ( a ,  b ) ) ;
  const  upper  =  Math.floor ( Math.max ( a , b ) ) ;​​​​ 
  const  result  =  Math.random ( ) * ( upper - lower + 1 ) + lower ;​​        
  return  Math.floor ( result ) ;​​
} ;

функция  createRandomNumbers  ( мин ,  макс )  {
  const  previousValues  ​​=  [ ] ;

   функция  возврата ( )  {
    пусть  currentValue  =  getRandomInteger ( мин ,  макс ) ;
    если  ( предыдущие значения . длина  >=  ( макс  -  мин  +  1 ) )  {
      вернуть  ноль ;
    }
    в то время как  ( предыдущие значения . включают ( текущее значение ) )  {
      currentValue  =  getRandomInteger ( мин ,  максимум ) ;
    }
    предыдущиеЗначения.push ( текущееЗначение ) ;​​
    вернуть  текущее значение ;
  } ;
}

const  getRandomArrayElement  =  ( elements )  =>  elements [ createRandomNumbers ( 0 ,  elements . length  -  1 ) ( ) ] ;
const  generatePhotoId  =  createRandomNumbers ( 1 ,  25 ) ;
const  urlId  =  createRandomNumbers ( 1 ,  25 ) ;
const  generateNumbersOfLikes  =  createRandomNumbers ( 15 ,  200 ) ;
const  userId  =  createRandomNumbers ( 1 ,  100000 ) ;
const  avatarImg  =  createRandomNumbers ( 1 ,  6 ) ;

const  createComment  =  ( )  =>  ( {
  идентификатор : идентификатор пользователя ( ) ,
  аватар : `img/avatar- ${  avatarImg ( )  } .svg` ,
  сообщение : getRandomArrayElement ( СООБЩЕНИЯ ) ,
  имя : getRandomArrayElement ( ИМЯ ) ,
} ) ;

const  createPhotoDescription  =  ( )  =>  ( {
  идентификатор : generatePhotoId ( ) ,
  url : `photos/ ${  urlId ( )  } .jpg` ,
  описание : 'Тут должно быть описание изображения' ,
  нравится : generateNumbersOfLikes ( ) ,
  комментарии : Array.from ( { length : getRandomInteger ( 0,30 ) } , createComment )​​​​  
} ) ;

// eslint-disable-next-line без-неиспользуемых-переменных
const  similarPhotoDescriptions  =  Array.from ( { length : 25 } , createPhotoDescription ) ;​​ 
