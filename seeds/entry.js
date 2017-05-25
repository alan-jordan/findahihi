exports.seed = function (knex, Promise) {
  return knex('entry').del()
    .then(function () {
      return Promise.all([
        knex('entry').insert({id: 73, title: "Happy day!", text: "Great day today! Felt positive, restful. Charmed the world with my engaging personality. Did a lot of walking! I'm so funny.",
        mood_id: 55, created_at: "8-May-17"}),
        knex('entry').insert({id: 74, title: "", text: "Had a good day! Very calming, not too much excitement but I was productive and I worked hard.",
        mood_id: 35, created_at: "9-May-17"}),
        knex('entry').insert({id: 75, title: "I'm a very title", text: "A flat day today, didn't get much sleep I felt good but I was very zoned out the whole day and was excited to get home and straight into bed.",
        mood_id: 24, created_at: "10-May-17"}),
        knex('entry').insert({id: 76, title: "It's title time", text: "Bad day ):",
        mood_id: 22, created_at: "11-May-17"}),
        knex('entry').insert({id: 77, title: "Sad day ):", text: "Another bad day ):",
        mood_id: 11, created_at: "12-May-17"}),
        knex('entry').insert({id: 78, title: "", text: "Feeling a bit better now it's the weekend!",
        mood_id: 33, created_at: "13-May-17"})
      ]);
    });
};
