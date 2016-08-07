'use strict';

const contents = [{
  question: 'Which one of these guys is NOT from Finland?',
  answers: [{answer: ['picture of Santa Claus'], feedback: 'Really? Don\'t you know this?', lie: false}, {answer: ['picture of Pippi Longstockings'], feedback: 'You\'re right. Pippi is from Sweden.', lie: true}, {answer: ['picture of Moomin'], feedback: 'Nope! Moomin is from Finland.', lie: false}]
},  {
  question: 'Which of these random facts is actually not true for Finland?',
  answers: [{answer: 'Women in Finland may go topless in public, providing it is not being used as a business.', feedback: 'Yeah, haha, this is New York!', lie: true}, {answer: 'A Finnish pizza chain once won the prize for best pizza at the New York Pizza Show, beating even the Italians.', feedback: 'Nope, this is true! The winning pizza was famously called "Pizza Berlusconi", as a revenge to the former Italian prime minister\'s public criticism of Finnish food.', lie: false}, {answer: 'Finns are the biggest coffee drinkers in the world.', feedback: 'No, this is true. Finland is number one, followed by Norway, The Netherlands, and Slovenia, according to a study from 2013.', lie: false}]
}, {
  question: 'Which one of these statements is a lie?',
  answers: [{answer: 'Finland declared its independence from Russia on December 6, 1917.', feedback: 'Nope! This is true.', lie: false}, {answer: 'Finnish, the native language of Finland, has a shared heritage with Danish, Norwegian, Swedish, Icelandic, and Faroese.', feedback: 'Correct. The others are related, but Finnish is not.', lie: true}, {answer: 'Finland used to be a part of the Swedish kingdom for more than 500 years.', feedback: 'Nope! This is true.', lie: false}]
}, {
  question: 'What are some common Finnish stereotypes?',
  answers: [{answer: 'Rude, introverted and emotionless. Many other cultures are more verbal and have small talk, which Finns are not interested in.', feedback: 'I know right, who would think this? But unfortunately it\'s true.', lie: false}, {answer: 'Finnish people drink a lot of alcohol and love vodka.', feedback: 'Nope! This is true.', lie: false}, {answer: 'Finns have a “small nation complex”. They constantly compare themselves to other countries, especially other Nordic countries – always wanting to outdo everyone and be the “best” at everything.', feedback: 'Well done - this stereotype belongs to Iceland.', lie: true}]
}, {
  question: 'What is NOT a typical / traditional Finnish dish?',
  answers: [{answer: 'Karelian pie, made from a thin rye crust with rice filling. Butter, often mixed with boiled egg is spread over the hot pasties before eating. + picture', feedback: 'Karelia used to be a part of Finland (before it was taken by Russia in the 1940s), so this statement is actually true.', lie: false}, {answer: 'Potato pancakes are one of the many Finnish dishes made from potatoes. Shredded potatoes are mixed with eggs, flour, seasonings, and onion. Usually served with sour cream and mushrooms. + picture', feedback: 'Correct. This is a traditional Lithuanian dish.', lie: true}, {answer: 'Mämmi, a traditional Easter dessert, made of water, rye flour, malted rye, molasses, salt and orange zest, served with sugar and milk. + picture', feedback: 'Nope! Mämmi is Finnish.', lie: false}]
}, {
  question: 'Which one of these is not a Finnish invention / brand?',
  answers: [{answer: 'Absolut Vodka', feedback: 'Correct. As much as we love vodka, this one is a Swedish brand.', lie: true}, {answer: 'The sauna.', feedback: 'Nope - sauna is a Finnish invention.', lie: false}, {answer: 'Nokia phones.', feedback: 'No, this is true. Nokia is a Finnish company.', lie: false}]
}, {
  question: 'Which one of these famous faces do you think doesn’t belong to a Finn?',
  answers: [{answer: ['picture of Irina'], feedback: 'Sorry, wrong. This is Irina Bjorklund, a Finnish actress.', lie: false}, {answer: ['picture of bjoern'], feedback: 'Correct. Bjoern Daehlie is a famous former skiier from Norway.', lie: true}, {answer: ['picture of teemu'], feedback: 'This is not a lie. Teemu Selanne is a famous former icehockey player who played in NHL.', lie: false}]
}, {
  question: 'Finland is known for it\'s great educational system. But can you guess which statement below is actually just a myth?',
  answers: [{answer: 'Finnish children do better in school simply because the poverty rate is so low.', feedback: 'Correct, this is a lie. What makes the difference in education is equity combined with quality. Instead of highlighting individual performance and competition of students, in Finland the focus is on schools’ ability to provide equally good education for different learners.', lie: true}, {answer: 'Basic education in Finland is completely free, including instruction, school materials, school meals, health care, dental care, special needs education and remedial teaching. One Finnish specialty is the free hot lunch served to everyone every day.', feedback: 'Nope, this is true. Most universities are free too.', lie: false}, {answer: 'Students in Finland get more than one hour of recess a day. During recess students go outside to play, and are encouraged to be physically active.', feedback: 'No, this is true. The basic model in K-12 is to have 45 minutes of instruction/learning and then a 15 minute break. First and second grade students go to school for four hours per day and from that time they have 75 minutes of recess.', lie: false}]
}, {
  question: 'What is not a nickname for Finland?',
  answers: [{answer: 'The land of a thousand lakes.', feedback: 'No, this is true. Finland has 187,888 lakes, where the definition of lake is "a body of standing water larger than 500 square metres".', lie: false}, {answer: 'Land of the midnight sun.', feedback: 'No, this is true. With stark differences between seasons, Finns are used to contrasts. Dark Arctic winters have their counterpart in one of the most iconic of Finnish natural phenomena, the Midnight Sun.', lie: false}, {answer: 'Land of the morning calm.', feedback: 'Yep - apparently this is South Korea.', lie: true}]
}, {
  question: 'In what does Finland NOT top the world?',
  answers: [{answer: 'Drinking the most milk.', feedback: 'Nope - I wish it was something more exciting, but this is one of the areas where Finland tops the world, with Finns consuming on average 1 liter (0.26 gallons) of milk per day!!!', lie: false}, {answer: 'Most successful mobile games (before Pokemon Go).', feedback: 'Well this was in a 2013 study, but still. Largely thanks to the Angry Birds game.', lie: false}, {answer: 'Most illegal downloads of Game Of Thrones season 6, episode 1.', feedback: 'Correct - this is a lie, and in fact the prize goes to Australia, followed by India, the US, and the UK.', lie: true}]
}, {
  question: 'Which one of the below is not actually a word or phrase in Finnish?',
  answers: [{answer: 'In place of the English expression "Once a thief always a thief", Finns say "Koirasta ei saa pekonia", which translates into "You can’t make bacon out of a dog".', feedback: 'Yes, this is a lie. Although those words are correct Finnish, the expression is used in Hungary not Finland.', lie: true}, {answer: '"Sisu" is a Finnish word that loosely translates into stoic determination, grit, bravery, guts, resilience, perseverance and hardiness, expressing the historic self-identified Finnish national character.', feedback: 'This is a true thing. The modern, positive concept of sisu arose originally out of the harsh and violent conditions under which Finns had to survive throughout their history, and it can be seen as a product of these conditions. Today, it is often used colloquially to refer to athletes, soldiers or national heroes, and more generally to anyone who endures stress in their daily lives, who chooses to stand up against injustice.', lie: false}, {answer: '"Kippis!" or "Terveydeksi!" in Finnish equal to "Cheers!" in English. The latter literally translates into "To your health", and is also said when somebody sneezes (like "bless you" in English).', feedback: 'No, this one is true.', lie: false}]
}, {
  question: 'Paavo Nurmi'
}, {
  question: 'What is not true about the Finnish climate?',
  answers: [{answer: 'In Lapland, in the north of Finland the snow never melts even in the summer.'}, {}, {}]
}];

export default contents;
