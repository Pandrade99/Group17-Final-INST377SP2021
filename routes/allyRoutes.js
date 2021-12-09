import express from 'express';
import sequelize from 'sequelize';
// eslint-disable-next-line import/no-unresolved
import extinctionSQL from '../server/controllers/allyController.js';
import db from '../database/initializeDB.js';

const router = express.Router();

/// /////////////////////////////////
/// ////Extinction Endpoints////////
/// /////////////////////////////////

router
  .route('/extinction')
  // eslint-disable-next-line consistent-return
  .get(async (req, res) => {
    try {
      // eslint-disable-next-line no-shadow
      const extinction = await db.sequelizeDB.query(extinctionSQL, {
        type: sequelize.QueryTypes.SELECT
      });
      const reply = extinction.length > 0 ? { data: extinction } : { message: 'no results found' };
      console.log('touched /extinction with GET');
      res.json(reply);
      return reply;
    } catch (err) {
      console.error(err);
      res.send('Server error');
    }
  })
  .post(async (req, res) => {
    const extinction = await db.sequelizeDB.query(extinctionSQL, {
      type: sequelize.QueryTypes.SELECT
    });
    try {
      const newExtinction = await db.extinction.create({
        extinction_id: currentId,
        cause: req.body.cause,
        age_species_went_extinct: req.body.age_species_went_extinct
      });
      console.log('touched /biome with POST')
      res.json(newExtinction);
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .put(async (req, res) => {
    try {
      await db.extinction.update(
        {
          cause: req.body.cause,
          age_species_went_extinct: req.body.age_species_went_extinct
        },
        {
          where: {
            extinction_id: req.body.extinction_id
          }
        }
      );
      console.log('touched /extinction with PUT');
      res.send('Successfully Updated');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  })
  .delete(async (req, res) => {
    try {
      await db.extinction.destroy({
        where: {
          extinction_id: req.params.extinction_id
        }
      });
      res.send('Successfully Deleted');
    } catch (err) {
      console.error(err);
      res.error('Server error');
    }
  });
export default router;
