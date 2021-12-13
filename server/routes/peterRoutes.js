/* eslint-disable no-console */
import express from "express";
import sequelize from "sequelize";
import db from "../../database/initializeDB.js";
import hierarchySQL from "../controllers/peterController.js";

const router = express.Router();

/// /////////////////////////////////
/// ////Animals Database - Hierarchy - Peter Andrade ///
/// /////////////////////////////////

router
  .route("/hierarchy")
  // eslint-disable-next-line consistent-return
  .get(async (req, res) => {
    try {
      const hierarchy = await db.sequelizeDB.query(hierarchySQL, {
        type: sequelize.QueryTypes.SELECT,
      });
      const reply =
        hierarchy.length > 0
          ? { data: hierarchy }
          : { message: "no results found" };
      console.log("touched /hierarchy with GET");
      res.json(reply);
      return reply;
    } catch (err) {
      console.error(err);
      res.send("Server error");
    }
  })

  .put(async (req, res) => {
    try {
      await db.hierarchy.update(
        {
          class: req.body.class,
          phylum: req.body.phylum,
        },
        {
          where: {
            hierarchy_id: req.body.hierarchy_id,
          },
        }
      );
      console.log("touched /hierarchy with PUT");
      res.send("Successfully updated");
    } catch (err) {
      console.error(err);
      res.send("Server error");
    }
  })

  .post(async (req, res) => {
    const hierarchy = await db.sequelizeDB.query(hierarchySQL, {
      type: sequelize.QueryTypes.SELECT,
    });
    const currentId = (await hierarchy.length) + 1;
    try {
      const newHierarchy = await db.hierarchy.create({
        hierarchy_id: currentId,
        class: req.body.class,
        phylum: req.body.phylum,
      });

      console.log("touched /hierarchy with POST");
      res.json(newHierarchy);
    } catch (err) {
      console.error(err);
      res.send("Server error");
    }
  })

  .delete(async (req, res) => {
    try {
      await db.hierarchy.destroy({
        where: {
          hierarchy_id: req.params.hierarchy_id,
        },
      });
      console.log("touched /hierarchy with DELETE");
      res.send("Successfully deleted");
    } catch (err) {
      console.error(err);
      res.send("Server error");
    }
  });

export default router;
