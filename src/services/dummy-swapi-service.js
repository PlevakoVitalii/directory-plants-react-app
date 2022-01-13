//Этот файл имтирует работу сервера
//возвращает ф-ии и данные, такие файлы облегчают и ускоряет
//разработку, можно проверять работу проекта с етим МОС-сервисом

export default class DummySwapiService {

  _people = [
    {
      id: 1,
      name: 'Snake Plant',
      describe: 'Are you looking for a diehard houseplant? The Sanseveria aka Snake Plant or Mother In Law Tongue is the plant for you. Sansevierias are some of the toughest plants you can find. Whether indoors, in your garden or on your balcony, these spiky beauties can put up with almost anything. Native to tropical Africa, sansevieria(Sansevieria trifasciata), also called mother-in -law’s tongue, snake plant and viper\'s bowstring hemp, will not give you many problems. Its multi-colored, spearlike leaves add drama whether you grow it indoors as a houseplant or outdoors in a container or in the ground.',
      popularity: '172,792',
      container: 'Container should provide ample drainage and room for growth.',
      water: 'Snake plant care requires minimal effort. To keep a plant looking its best, water when a soil dries out. A best way to tell when your plant needs watering is to touch a soil every week. When a first inch of a soil feels dry, it’s time to water. Water: fill a watering can with room temperature water and give your plant a drink.',
      img: '../assets/plants/snakePlant.jpg'
    },
    {
      id: 2,
      name: 'Corn Plant',
      describe: 'The Dracaena Massangeana (nickname Corn Plant), like all other dracaenas, is tolerant of low light, missed waterings, and general neglect. Dracaena Corn plants are considered by some to be poisonous, especially to dogs and cats. This dracaena is especially popular because of its long graceful green leaves that have a yellow and light green stripe running down the center. The leaves of a Corn Plant Dracaena grow out of a central woody stalk much like a real corn stalk. When small Dracaena Corn Plants can sit on a table, but their claim to fame is as a stately cane plant growing up to 10-12 feet tall. Be sure there are at least three canes at staggered heights in the pot when purchasing a Dracaena Corn Plant. This insures that as it matures, the Massangeana will always look full and lush.',
      popularity: '70,413',
      container: 'Plants that don\'t like a lot of moisture will need a drainage hole for moisture to escape and for airflow to circulate through the pot. Another important function of drainage holes is to allow water to flush the soil of excess salts from fertilizers.',
      img: '../assets/plants/cornPlant.jpg'
    },
    {
      id: 3,
      name: 'Golden Pothos',
      describe: 'The pothos plant is considered by many to be a great way to get started caring for houseplants. Because pothos care in easy and undemanding, this lovely plant is an easy way to add some green in your home. Basic pothos care is very easy. These plants enjoy a wide range of environments. They do well in bright indirect light as well as low light and can be grown in dry soil or in vases of water. They will thrive in nutrient rich soil, but do almost as well in nutrient poor soil. Pothos plants make a great addition to you bathroom or office because they can tolerate low light. While pothos likes a wide variety of light conditions, they do not do well in direct sunlight. It is considered toxic to cats, dogs and children, but it normally will make them very sick but will not kill them.',
      popularity: '70,413',
      container: 'Plants that don\'t like a lot of moisture will need a drainage hole for moisture to escape and for airflow to circulate through the pot. Another important function of drainage holes is to allow water to flush the soil of excess salts from fertilizers.',
      img: '../assets/plants/goldenPothos.jpg'
    },
    {
      id: 4,
      name: 'Peace Lily',
      describe: 'Peace Lily plants are beautiful indoor houseplants with large, glossy, oval, dark green leaves and impressive white “spathes” (flowers) that last for weeks. A Peace Lily or Spathiphyllum originated in tropical forests around the world where it grew close to the forest floor in the shade of the larger plants. This helps explain why Peace Lily plants are one of very few indoor plants that can bloom even in medium to low light. NASA lists the Peace Lily as one of the best plants to clean the air of harmful toxins such as benzene, formaldehyde, and carbon monoxide. These plants are considered poisonous and should be kept away from pets and children.',
      popularity: '70,413',
      container: 'Plants that don\'t like a lot of moisture will need a drainage hole for moisture to escape and for airflow to circulate through the pot. Another important function of drainage holes is to allow water to flush the soil of excess salts from fertilizers.',
      img: '../assets/plants/peaceLily.jpg'
    },


  ];



  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[0]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `https://placeimg.com/400/500/people`
  };

  getStarshipImage = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImage = () => {
    return `https://placeimg.com/400/400/nature`
  };
}
