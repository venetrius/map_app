"use strict";

const express       = require('express');
const mapsRoutes  = express.Router();

const getMaps = require('./../util/mapObject');


const get = function (req, res){
  const templateVars = {
    map: getMaps
  };
  res.render('main', templateVars);
};

const getMap = function (req, res){
  res.status(400).send();
};

const getPoints = function (req, res){
  res.status(200).json(getMaps.points);
};

const getPoint = function (req, res){
  let point;
  for (let p of getMaps.points){
    if(p.id === Number(req.params.point)){
      point = p;
    }
  }
  if(point){
    res.status(200).json(point);
  }
  else{
    res.status(404).send("not found");
  }
};

const createMap = function (req, res){
  res.status(400).send();
};

const createPoint = function (req, res){
  res.status(400).send();
};

const updatePoint = function (req, res){
  res.status(400).send();
};

const uploadImg = function (req, res){
  res.status(400).send();
};

const deleteImg = function (req, res){
  res.status(400).send();
};

const deletePoint = function (req, res){
  res.status(400).send();
};

const createFavorite = function (req, res){
  res.status(400).send();
};

const deleteFavorite = function (req, res){
  res.status(400).send();
};

module.exports = function(DataHelpers) {
  mapsRoutes.get("/", get);
  mapsRoutes.get("/:map", getMap);
  mapsRoutes.get("/:map/points", getPoints);
  mapsRoutes.get("/:map/points/:point", getPoint);
  mapsRoutes.post("/", createMap);
  mapsRoutes.post("/:map/points", createPoint);
  mapsRoutes.post("/:map/points/:point", updatePoint);
  mapsRoutes.post("/:map/points/:point/imgs", uploadImg);
  mapsRoutes.delete("/:map/points/:point/imgs/:img", deleteImg);
  mapsRoutes.delete("/:map/points/:point", deletePoint);
  mapsRoutes.post("/:map/favorite", createFavorite);
  mapsRoutes.delete("/:map/favorite", deleteFavorite);

  return mapsRoutes;
}();
