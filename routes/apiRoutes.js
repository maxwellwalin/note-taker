const _ = require('underscore');
let notesData = require('../db/db.json');


module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notesData));

  app.post('/api/notes', (req, res) => {

      let id = _.size(notesData) + 1;

      id++;
    
      notesData.push(
        {
          id: id,
          ...req.body,
        }
        );

      res.json(notesData);

    });


  app.delete('/api/notes/:id', (req, res) => {
    
    let index = _.indexOf(notesData, req.params.id);

    notesData.splice(index, 1);

    res.json(notesData);

  });
};
